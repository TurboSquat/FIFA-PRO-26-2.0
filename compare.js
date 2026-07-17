const wc2018 = require('./wc2018.js');

const lastSticker = {
  'RUS': ['Igor Akinfeev','Igor Smolnikov','Viktor Vasin','Mario Fernandes','Fedor Kudryashov','Ilya Kutepov','Dmitri Kombarov','Aleksei Miranchuk','Denis Glushakov','Aleksandr Golovin','Yuri Zhirkov','Aleksandr Samedov','Aleksandr Erokhin','Alan Dzagoev','Daler Kuzyaev','Dmitri Poloz','Fedor Smolov','Aleksandr Kokorin'],
  'KSA': ['Abdullah Al-Mayouf','Osama Hawsawi','Abdullah Al-Zori','Mansour Al-Harbi','Omar Hawsawi','Yasser Al-Shahrani','Motaz Hawsawi','Mohammed Al-Beraik','Taisir Al-Jassim','Salman Al-Faraj','Abdulmalek Al-Khaibri','Salman Al-Moasher','Yahya Al-Shehri','Salem Al-Dosari','Nawaf Al-Abed','Mohammad Al-Sahlawi','Nasser Al-Shamrani','Fahad Al-Muwallad'],
  'EGY': ['Essam El Hadary','Ali Gabr','Ahmed Elmohamady','Omar Gaber','Ramy Rabia','Ahmed Hegazi','Ahmed Abdelmonem Fathy','Mohamed Abdel Shafy','Saad El-Din Samir','Tarek Hamed','Mahmoud Kahraba','Mohamed Elneny','Trezeguet','Abdallah El Said','Ramadan Sobhi','Ahmed Hassan','Mohamed Salah','Amr Gamal'],
  'URU': ['Fernando Muslera','Maxi Pereira','Diego Godin','Martin Caceres','Jose Gimenez','Sebastian Coates','Gaston Silva','Mathias Corujo','Egidio Arevalo Rios','Alvaro Gonzalez','Nicolas Lodeiro','Carlos Sanchez','Cristian Rodriguez','Matias Vecino','Edinson Cavani','Luis Suarez','Cristhian Stuani','Diego Roland'],
  'POR': ['Rui Patricio','Bruno Alves','Pepe','Jose Fonte','Eliseu','Cedric Soares','Raphael Guerreiro','Joao Moutinho','Joao Mario','Danilo Pereira','William Carvalho','Andre Gomes','Ricardo Quaresma','Bernardo Silva','Andre Silva','Gelson Martins','Cristiano Ronaldo','Nani'],
  'ESP': ['David de Gea','Jordi Alba','Nacho Fernandez','Nacho Monreal','Gerard Pique','Sergio Ramos','Daniel Carvajal','Sergio Busquets','Thiago Alcantara','Isco','Koke','Marco Asensio','Andres Iniesta','David Silva','Saul Niguez','Alvaro Morata','Vitolo','Diego Costa'],
  'MAR': ['Munir Mohamedi','Medhi Benatia','Nabil Dirar','Romain Saiss','Fouad Chafik','Hamza Mendyl','Achraf Hakimi','Mbark Boussoufa','Karim El Ahmadi','Younes Belhanda','Nordin Amrabat','Faycal Fajr','Hakim Ziyech','Youssef Ait Bennasser','Khalid Boutaib','Rachid Alioui','Aziz Bouhaddouz','Youssef En-Nesyri'],
  'IRN': ['Alireza Beiranvand','Pejman Montazeri','Vouria Ghafouri','Jalal Hosseini','Milad Mohammadi','Morteza Pouraliganji','Ramin Rezaeian','Ehsan Hajsafi','Omid Ebrahimi','Saeid Ezatolahi','Vahid Amiri','Alireza Jahanbakhsh','Ashkan Dejagah','Saman Ghoddos','Mehdi Taremi','Karim Ansarifard','Reza Ghoochannejhad','Sardar Azmoun'],
  'FRA': ['Hugo Lloris','Raphael Varane','Lucas Digne','Djibril Sidibe','Samuel Umtiti','Layvin Kurzawa','Laurent Koscielny','Blaise Matuidi',"N'Golo Kante",'Thomas Lemar','Adrien Rabiot','Paul Pogba','Olivier Giroud','Antoine Griezmann','Alexandre Lacazette','Kylian Mbappe','Ousmane Dembele','Anthony Martial'],
  'AUS': ['Mathew Ryan','Mitchell Langerak','Milos Degenek','Bailey Wright','Aziz Behich','Trent Sainsbury','Ryan McGowan','Mark Milligan','Aaron Mooy','James Troisi','Mile Jedinak','Massimo Luongo','Jackson Irvine','Tom Rogic','Tim Cahill','Mathew Leckie','Tomi Juric','Robbie Kruse'],
  'PER': ['Pedro Gallese','Carlos Caceda','Aldo Corzo','Miguel Trauco','Christian Ramos','Luis Advincula','Alberto Rodriguez','Miguel Araujo','Christian Cueva','Renato Tapia','Andy Polo','Yoshimar Yotun','Edison Flores','Paolo Hurtado','Paolo Guerrero','Jefferson Farfan','Raul Ruidiaz','Andre Carrillo'],
  'DEN': ['Kasper Schmeichel','Jannik Vestergaard','Simon Kjaer','Andreas Christensen','Andreas Bjelland','Mathias Jorgensen','Jens Stryger Larsen','Peter Ankersen','Riza Durmisi','William Kvist','Thomas Delaney','Christian Eriksen','Lasse Schone','Pione Sisto','Nicklas Bendtner','Nicolai Jorgensen','Yussuf Poulsen','Andreas Cornelius'],
  'ARG': ['Sergio Romero','Gabriel Mercado','Federico Fazio','Javier Mascherano','Nicolas Otamendi','Marcos Rojo','Ramiro Funes Mori','Lucas Biglia','Enzo Perez','Angel Di Maria','Marcos Acuna','Ever Banega','Eduardo Salvio','Mauro Icardi','Lionel Messi','Paulo Dybala','Sergio Aguero','Gonzalo Higuain'],
  'ISL': ['Hannes Halldorsson','Birkir Saevarsson','Ragnar Sigurdsson','Kari Arnason','Ari Skulason','Sverrir Ingason','Hordur Magnusson','Aron Gunnarsson','Birkir Bjarnason','Emil Hallfredsson','Gylfi Sigurdsson','Arnor Ingvi Traustason','Rurik Gislason','Johann Gudmundsson','Alfred Finnbogason','Jon Dadi Bodvarsson','Vidar Orn Kjartansson','Bjorn Sigurdarson'],
  'CRO': ['Danijel Subasic','Sime Vrsaljko','Ivan Strinic','Dejan Lovren','Domagoj Vida','Josip Pivaric','Vedran Corluka','Ivan Rakitic','Luka Modric','Marcelo Brozovic','Marko Rog','Mario Pasalic','Milan Badelj','Mateo Kovacic','Andrej Kramaric','Nikola Kalinic','Mandzukic','Ivan Perisic'],
  'NGA': ['Ikechukwu Ezenwa','Elderson Echiejile','Shehu Abdullahi','William Troost-Ekong','Leon Balogun','Kenneth Omeruo','Ola Aina','John Obi Mikel','Ogenyi Onazi','Etebo Oghenekaro','Wilfred Ndidi','Mikel Agu','Ahmed Musa','Victor Moses','Moses Simon','Odion Ighalo','Alex Iwobi','Kelechi Iheanacho'],
  'BRA': ['Alisson','Dani Alves','Thiago Silva','Miranda','Filipe Luis','Marquinhos','Marcelo','Willian','Paulinho','Fernandinho','Casemiro','Renato Augusto','Giuliano','Philippe Coutinho','Douglas Costa','Roberto Firmino','Gabriel Jesus','Neymar Jr'],
  'SUI': ['Yann Sommer','Stephan Lichtsteiner','Manuel Akanji','Michael Lang','Ricardo Rodriguez','Johan Djourou','Fabian Schar','Granit Xhaka','Steven Zuber','Blerim Dzemaili','Denis Zakaria','Xherdan Shaqiri','Valon Behrami','Gelson Fernandes','Breel Embolo','Haris Seferovic','Admir Mehmedi','Eren Derdiyok'],
  'CRC': ['Keylor Navas','Giancarlo Gonzalez','Cristian Gamboa','Bryan Oviedo','Francisco Calvo','Kendall Waston','Ronald Matarrita','Michael Umana','Johnny Acosta','Bryan Ruiz','Celso Borges','Christian Bolanos','Randall Azofeifa','David Guzman','Rodney Wallace','Joel Campbell','Marco Urena','Johan Venegas'],
  'SRB': ['Vladimir Stojkovic','Branislav Ivanovic','Aleksandar Kolarov','Antonio Rukavina','Matija Nastasic','Dusko Tosic','Nikola Maksimovic','Jagos Vukovic','Dusan Tadic','Sergej Milinkovic-Savic','Nemanja Matic','Luka Milivojevic','Adem Ljajic','Nemanja Gudelj','Mijat Gacinovic','Filip Kostic','Aleksandar Mitrovic','Aleksandar Prijovic'],
  'GER': ['Manuel Neuer','Mats Hummels','Antonio Rudiger','Jerome Boateng','Joshua Kimmich','Jonas Hector','Julian Draxler','Toni Kroos','Emre Can','Leon Goretzka','Julian Brandt','Sebastian Rudy','Leroy Sane','Mesut Ozil','Sami Khedira','Mario Gotze','Thomas Muller','Timo Werner'],
  'MEX': ['Guillermo Ochoa','Hugo Ayala','Diego Reyes','Hector Moreno','Jesus Gallardo','Miguel Layun','Carlos Salcedo','Jonathan dos Santos','Giovani dos Santos','Andres Guardado','Hector Herrera','Javier Aquino','Jesus Corona','Hirving Lozano','Raul Jimenez','Carlos Vela','Javier Hernandez','Oribe Peralta'],
  'SWE': ['Robin Olsen','Mikael Lustig','Victor Nilsson Lindelof','Andreas Granqvist','Martin Olsson','Ludwig Augustinsson','Emil Krafth','Pontus Jansson','Sebastian Larsson','Emil Forsberg','Gustav Svensson','Viktor Claesson','Jimmy Durmaz','Albin Ekdal','Isaac Kiese Thelin','Marcus Berg','John Guidetti','Ola Toivonen'],
  'KOR': ['Kim Seunggyu','Kim Younggwon','Kim Jinsu','Kwak Taehwi','Hong Jeongho','Jang Hyunsoo','Koo Jacheol','Kwon Changhoon','Ki Sung-yueng','Nam Taehee','Han Kookyoung','Lee Chungyong','Jung Wooyoung','Lee Jaesung','Son Heungmin','Ji Dongwon','Kim Shinwook','Hwang Heechan'],
  'BEL': ['Thibaut Courtois','Toby Alderweireld','Thomas Vermaelen','Jan Vertonghen','Vincent Kompany','Thomas Meunier','Axel Witsel','Radja Nainggolan','Kevin De Bruyne','Marouane Fellaini','Youri Tielemans','Mousa Dembele','Nacer Chadli','Eden Hazard','Yannick Carrasco','Dries Mertens','Michy Batshuayi','Romelu Lukaku'],
  'PAN': ['Jaime Penedo','Jose Calderon','Michael Murillo','Fidel Escobar','Roman Torres','Adolfo Machado','Eric Davis','Luis Ovalle','Felipe Baloy','Gabriel Gomez','Edgar Barcenas','Armando Cooper','Alberto Quintero','Anibal Godoy','Blas Perez','Gabriel Torres','Luis Tejada','Abdiel Arroyo'],
  'TUN': ['Aymen Mathlouthi','Ali Maaloul','Syam Ben Youssef','Aymen Abdennour','Hamdi Nagguez','Yassine Meriah','Oussama Haddadi','Ferjani Sassi','Wahbi Khazri','Mohamed Amine Ben Amor','Ghailene Chaalali','Naim Sliti','Youssef Msakni','Fakhreddine Ben Youssef','Taha Yassine Khenissi','Yoann Touzghar','Anice Badri','Ahmed Akaichi'],
  'ENG': ['Joe Hart','Jordan Pickford','Gary Cahill','Kyle Walker','John Stones','Ryan Bertrand','Danny Rose','Phil Jones','Jordan Henderson','Alex Oxlade-Chamberlain','Dele Alli','Eric Dier','Adam Lallana','Jesse Lingard','Raheem Sterling','Harry Kane','Marcus Rashford','Jamie Vardy'],
  'POL': ['Lukasz Fabianski','Wojciech Szczesny','Lukasz Piszczek','Kamil Glik','Michal Pazdan','Thiago Cionek','Bartosz Bereszynski','Artur Jedrzejczyk','Maciej Rybus','Jakub Blaszczykowski','Kamil Grosicki','Grzegorz Krychowiak','Krzysztof Maczynski','Piotr Zielinski','Karol Linetty','Robert Lewandowski','Lukasz Teodorczyk','Arkadiusz Milik'],
  'SEN': ["Khadim N'Diaye",'Kara Mbodji','Lamine Gassama','Kalidou Koulibaly','Salif Sane','Saliou Ciss','Moussa Wague','Idrissa Gueye','Cheikhou Kouyate','Cheikh Ndoye',"Pape Alioune N'Diaye",'Sadio Mane','Moussa Sow','Moussa Konate','Keita Balde',"M'Baye Niang",'Moussa Sarr','Mame Diouf'],
  'COL': ['David Ospina','Cristian Zapata','Santiago Arias','Frank Fabra','Davinson Sanchez','Yerry Mina','Carlos Sanchez','Juan Guillermo Cuadrado','Abel Aguilar','James Rodriguez','Giovanni Moreno','Wilmar Barrios','Radamel Falcao Garcia','Teofilo Gutierrez','Carlos Bacca','Edwin Cardona','Yimmi Chara','Duvan Zapata'],
  'JPN': ['Eiji Kawashima','Shusaku Nishikawa','Masato Morishige','Yuto Nagatomo','Hiroki Sakai','Tomoaki Makino','Gotoku Sakai','Maya Yoshida','Hotaru Yamaguchi','Shinji Kagawa','Makoto Hasebe','Hiroshi Kiyotake','Keisuke Honda','Takashi Usami','Genki Haraguchi','Shinji Okazaki','Yuya Kubo','Yuya Osako']
};

const teamNames = {
  'RUS': 'Russia', 'KSA': 'Saudi Arabia', 'EGY': 'Egypt', 'URU': 'Uruguay',
  'POR': 'Portugal', 'ESP': 'Spain', 'MAR': 'Morocco', 'IRN': 'Iran',
  'FRA': 'France', 'AUS': 'Australia', 'PER': 'Peru', 'DEN': 'Denmark',
  'ARG': 'Argentina', 'ISL': 'Iceland', 'CRO': 'Croatia', 'NGA': 'Nigeria',
  'BRA': 'Brazil', 'SUI': 'Switzerland', 'CRC': 'Costa Rica', 'SRB': 'Serbia',
  'GER': 'Germany', 'MEX': 'Mexico', 'SWE': 'Sweden', 'KOR': 'Korea Republic',
  'BEL': 'Belgium', 'PAN': 'Panama', 'TUN': 'Tunisia', 'ENG': 'England',
  'POL': 'Poland', 'SEN': 'Senegal', 'COL': 'Colombia', 'JPN': 'Japan'
};

let total = 0;

for (const team of wc2018) {
  const filePlayers = team.players;
  const stickerPlayers = lastSticker[team.code];
  if (!stickerPlayers) continue;

  const fileSet = new Set(filePlayers);
  const stickerSet = new Set(stickerPlayers);

  for (const fname of filePlayers) {
    if (!stickerSet.has(fname)) {
      let bestMatch = '';
      let bestDist = 999;
      for (const sname of stickerPlayers) {
        if (!fileSet.has(sname)) {
          const d = levenshtein(fname, sname);
          if (d < bestDist) { bestDist = d; bestMatch = sname; }
        }
      }
      console.log(teamNames[team.code] + ': FILE="' + fname + '" STICKER="' + bestMatch + '"');
      total++;
    }
  }
}
console.log('TOTAL: ' + total);

function levenshtein(a, b) {
  if (a === b) return 0;
  const m = a.length, n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const v0 = Array(n + 1);
  const v1 = Array(n + 1);
  for (let j = 0; j <= n; j++) v0[j] = j;
  for (let i = 1; i <= m; i++) {
    v1[0] = i;
    for (let j = 1; j <= n; j++) {
      const cost = a[i-1] === b[j-1] ? 0 : 1;
      v1[j] = Math.min(v1[j-1] + 1, v0[j] + 1, v0[j-1] + cost);
    }
    for (let j = 0; j <= n; j++) v0[j] = v1[j];
  }
  return v0[n];
}
