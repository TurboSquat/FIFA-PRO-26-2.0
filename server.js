const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');

const PORT = process.env.PORT || 3000;
const DIR = __dirname;

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon'
};

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'FifarinhasBot/1.0', 'Accept': 'application/json' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractTeams(query) {
  const q = query.toLowerCase();
  const teamMap = {
    'portugal': 'Portugal', 'espanha': 'Espanha', 'brasil': 'Brasil', 'argentina': 'Argentina',
    'alemanha': 'Alemanha', 'frança': 'França', 'franca': 'França', 'inglaterra': 'Inglaterra',
    'italia': 'Itália', 'uruguai': 'Uruguai', 'colômbia': 'Colômbia', 'colombia': 'Colômbia',
    'bélgica': 'Bélgica', 'belgica': 'Bélgica', 'croácia': 'Croácia', 'croacia': 'Croácia',
    'holanda': 'Holanda', 'japão': 'Japão', 'japao': 'Japão', 'coreia': 'Coreia',
    'méxico': 'México', 'mexico': 'México', 'canadá': 'Canadá', 'canada': 'Canadá',
    'marrocos': 'Marrocos', 'senegal': 'Senegal', 'gana': 'Gana', 'egito': 'Egito',
    'tunísia': 'Tunísia', 'tunisia': 'Tunísia', 'irã': 'Irã', 'iran': 'Irã',
    'nova zelândia': 'Nova Zelândia', 'nova zelandia': 'Nova Zelândia',
    'cabo verde': 'Cabo Verde', 'cape verde': 'Cabo Verde',
    'costa do marfim': 'Costa do Marfim', 'austrália': 'Austrália', 'australia': 'Austrália',
    'turquia': 'Turquia', 'polônia': 'Polônia', 'polonia': 'Polônia',
    'suécia': 'Suécia', 'suecia': 'Suécia', 'dinamarca': 'Dinamarca',
    'suiça': 'Suíça', 'suica': 'Suíça', 'ruśsia': 'Rússia', 'russia': 'Rússia'
  };
  const found = [];
  for (const [key, val] of Object.entries(teamMap)) {
    if (q.includes(key) && !found.includes(val)) found.push(val);
  }
  return found;
}

function extractYear(query) {
  const match = query.match(/\b(19\d{2}|20\d{2})\b/);
  return match ? match[0] : null;
}

function buildSearchQueries(query) {
  const q = query.toLowerCase();
  const teams = extractTeams(query);
  const year = extractYear(query);
  const queries = [];
  
  if (year && teams.length >= 2) {
    queries.push(`${teams[0]} ${teams[1]} ${year} Copa do Mundo partida`);
    queries.push(`${teams[0]} vs ${teams[1]} ${year} futebol`);
    queries.push(`${teams[0]} na Copa do Mundo FIFA de ${year}`);
  } else if (year && teams.length === 1) {
    queries.push(`${teams[0]} na Copa do Mundo FIFA de ${year}`);
    queries.push(`${teams[0]} ${year} Copa do Mundo`);
  } else if (year) {
    queries.push(`Copa do Mundo FIFA de ${year}`);
  } else if (teams.length >= 2) {
    queries.push(`${teams[0]} vs ${teams[1]} futebol partida`);
  } else if (teams.length === 1) {
    queries.push(`${teams[0]} seleção futebol`);
  }
  
  queries.push(q);
  return { queries, year, teams };
}

function matchesYear(title, year) {
  if (!year) return true;
  return title.includes(year);
}

async function searchWikipediaDirect(title) {
  try {
    const url = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
    const data = await httpsGet(url);
    const json = JSON.parse(data);
    if (json.extract && json.content_urls && !json.extract.includes('desambiguação')) {
      return { title: json.title, snippet: json.extract, url: json.content_urls.desktop.page };
    }
  } catch(e) {}
  return null;
}

async function searchWikipedia(queries, year) {
  for (const q of queries) {
    try {
      const url = `https://pt.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srlimit=5&format=json`;
      const data = await httpsGet(url);
      const json = JSON.parse(data);
      if (json.query?.search?.length > 0) {
        for (const result of json.query.search) {
          if (year && !matchesYear(result.title, year)) continue;
          const article = await searchWikipediaDirect(result.title);
          if (article) return article;
        }
      }
    } catch(e) {}
  }
  return null;
}

async function searchDDG(query) {
  try {
    const data = await httpsGet(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`);
    const json = JSON.parse(data);
    const results = [];
    if (json.AbstractText && json.AbstractURL) {
      results.push({ title: json.Heading || query, snippet: json.AbstractText, url: json.AbstractURL });
    }
    (json.RelatedTopics || []).forEach(t => {
      if (t.Text && t.FirstURL) results.push({ title: t.Text.split(' - ')[0] || t.Text.substring(0, 60), snippet: t.Text, url: t.FirstURL });
    });
    return results.slice(0, 3);
  } catch(e) { return []; }
}

function formatResponse(query, wikiResult, ddgResults) {
  if (wikiResult) {
    let answer = wikiResult.snippet;
    if (answer.length > 500) answer = answer.substring(0, 500) + '...';
    return {
      answer: answer,
      source: { title: wikiResult.title, url: wikiResult.url },
      extraLinks: ddgResults.filter(r => r.url !== wikiResult.url).slice(0, 2)
    };
  }
  if (ddgResults.length > 0) {
    let answer = ddgResults[0].snippet;
    if (answer.length > 500) answer = answer.substring(0, 500) + '...';
    return {
      answer: answer,
      source: { title: ddgResults[0].title, url: ddgResults[0].url },
      extraLinks: ddgResults.slice(1, 3)
    };
  }
  return {
    answer: `Não encontrei informações específica sobre "${query}". Tenta reformular a pergunta.`,
    source: { title: 'Pesquisa', url: `https://duckduckgo.com/?q=${encodeURIComponent(query)}` },
    extraLinks: []
  };
}

async function webSearch(query) {
  const { queries, year } = buildSearchQueries(query);
  let wikiResult = null;
  let ddgResults = [];
  try { wikiResult = await searchWikipedia(queries, year); } catch(e) {}
  try { ddgResults = await searchDDG(queries[0]); } catch(e) {}
  return formatResponse(query, wikiResult, ddgResults);
}

http.createServer(async (req, res) => {
  const urlObj = new URL(req.url, `http://localhost:${PORT}`);
  if (urlObj.pathname === '/api/search') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    const query = urlObj.searchParams.get('q');
    if (!query) { res.writeHead(400); res.end(JSON.stringify({ error: 'Parametro q em falta' })); return; }
    try {
      const result = await webSearch(query);
      res.end(JSON.stringify({ query, ...result }));
    } catch (e) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: 'Erro ao pesquisar' }));
    }
    return;
  }
  let file = path.join(DIR, urlObj.pathname === '/' ? 'index.html' : urlObj.pathname);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(file);
    res.writeHead(200, { 'Content-Type': (MIME[ext] || 'application/octet-stream') + '; charset=utf-8' });
    res.end(data);
  });
}).listen(PORT, () => console.log('Servidor: http://localhost:' + PORT));
