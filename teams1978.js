const teams1978_data = {
  'A': { teams: [
    { name: 'Argentina', players: ['Ubaldo Fillol','Jorge Olguín','Daniel Killer','Daniel Passarella','Alberto Tarantini','Hugo Alves','Américo Gallego','Osvaldo Ardiles','Ricardo Villa','Omar Larrosa','René Housemann','Mario Kempes','Leopoldo Luque','Daniel Bertoni','Oscar Ortiz','Héctor Baley'] },
    { name: 'Hungria', players: ['Sándor Gujdár','Győző Martos','Péter Török','Zoltán Kereki','László Bálint','István Kocsis','József Tóth','Tibor Rab','Sándor Zombori','Tibor Nyilasi','Sándor Pintér','László Fazekas','László Pusztai','András Törőcsik','Béla Várady','Ferenc Mészáros'] },
    { name: 'França', players: ['André Rey','Gérard Janvion','Patrice Rio','Marius Trésor','Christian Lopez','Maxime Bossis','Dominique Bathenay','Jean-Marc Guillou','Henri Michel','Michel Platini','Dominique Rocheteau','Christian Dalger','Bernard Lacombe','Didier Six','Olivier Rouyer','Dominique Baratelli'] },
    { name: 'Itália', players: ['Dino Zoff','Claudio Gentile','Mauro Bellugi','Giacinto Facchetti','Gaetano Scirea','Aldo Maldera','Marco Tardelli','Romeo Benetti','Renato Zaccarelli','Giancarlo Antognoni','Franco Causio','Claudio Sala','Francesco Graziani','Paolo Rossi','Roberto Bettega','Paolo Conti'] }
  ]},
  'B': { teams: [
    { name: 'Polônia', players: ['Jan Tomaszewski','Antoni Szymanowski','Henryk Maculewicz','Władysław Żmuda','Jerzy Gorgoń','Wojciech Rudy','Henryk Kasperczak','Bohdan Masztaler','Kazimierz Deyna','Zbigniew Boniek','Adam Nawałka','Grzegorz Lato','Andrzej Szarmach','Włodzimierz Lubański','Stanisław Terlecki','Zygmunt Kukla'] },
    { name: 'Alemanha Ocidental', players: ['Sepp Maier','Berti Vogts','Rolf Rüssmann','Hans-Georg Schwarzenbeck','Manfred Kaltz','Bernhard Dietz','Herbert Zimmermann','Rainer Bonhof','Erich Beer','Heinz Flöhe','Manfred Burgsmüller','Bernd Hölzenbein','Rüdiger Abramczik','Klaus Fischer','Karl-Heinz Rummenigge','Bernd Franke'] },
    { name: 'Tunísia', players: ['Sadok Sassi','Mokhtar Dhouieb','Khaled Gasmi','Kamel Chebli','Amor Jebali','Ali Kaabi','Nejib Ghommidh','Khemais Labidi','Hamadi Agrebi','Tarak Dhiab','Témime Lahzami','Mohamed Akid','Néjib Limam','Raouf Ben Aziza','Ali Manai','Lamine Ben Aziza'] },
    { name: 'México', players: ['Francisco Castrejón','Manuel Nájera','Carlos Gómez','Eduardo Ramos','Javier Guzmán','Arturo Vázquez Ayala','Antonio de la Torre','Javier Cárdenas','Rafael Chávez','José Luis Real','Alfredo Jiménez','Víctor Rangel','Leonardo Cuéllar','Hugo Sánchez','Cristóbal Ortega','José Pilar Reyes'] }
  ]},
  'C': { teams: [
    { name: 'Áustria', players: ['Friedrich Koncilia','Robert Sara','Bruno Pezzey','Peter Persidis','Eduard Krieger','Gerhard Breitenberger','Heinrich Strasser','Josef Hickersberger','Roland Hattenberger','Kurt Jara','Herbert Prohaska','Josef Stering','Hans Krankl','Wilhelm Kreuz','Walter Schachner','Hubert Baumgartner'] },
    { name: 'Espanha', players: ['Miguel Ángel','Marcelino','Migueli','Pirri','Antonio Olmo','José Antonio Camacho','Isidoro San José','Eugenio Leal','Ángel Villar','Juan Manuel Asensi','Julio Cardeñosa','Ignacio Churruca','Juanito','Dani','Rubén Cano','Luis Arconada'] },
    { name: 'Suécia', players: ['Ronnie Hellström','Hasse Borg','Björn Andersson','Kent Karlsson','Björn Nordqvist','Roy Andersson','Bo Börjesson','Anders Linderoth','Staffan Tapper','Tommy Larsson','Conny Torstensson','Ralf Edström','Benny Wendt','Thomas Sjöberg','Olle Nordin','Göran Hagberg'] },
    { name: 'Brasil', players: ['Leão','Zé Maria','Nelinho','Luís Pereira','Amaral','Edinho','Rodrigues Neto','Toninho Cerezo','Rivellino','Dirceu','Gil','Zico','Roberto','Reinaldo','Paulo César','Raul'] }
  ]},
  'D': { teams: [
    { name: 'Holanda', players: ['Piet Schrijvers','Wim Suurbier','Wim Rijsbergen','Johnny Dusbaba','Ruud Krol','Hugo Hovenkamp','Wim Jansen','Johan Neeskens','Wim van Hanegem','Willy van der Kerkhof','Jan Peters','Johnny Rep','Kees Kist','Rob Rensenbrink','René van der Kerkhof','Jan Jongbloed'] },
    { name: 'Irã', players: ['Mansour Rashidi','Hassan Nazari','Nasrollah Abdollahi','Hossein Kazerani','Andranik Eskandarian','Hassan Nayebagha','Ebrahim Ghasempour','Ali Parvin','Mohammad Sadeghi','Iraj Danaeifard','Hassan Rowshan','Ali Reza Khorshidi','Ghafour Jahani','Mohammad Reza Adelkhani','Gholam Mazloumi','Bahram Mavaddat'] },
    { name: 'Peru', players: ['Ramón Quiroga','José Navarro','Héctor Chumpitaz','Julio Meléndez','Rubén Toribio Díaz','Eléazar Soria','Alfredo Quesada','José Velásquez','Teófilo Cubillas','Julio Aparicio','Percy Rojas','Juan Muñante','Hugo Sotil','Juan Carlos Oblitas','Alejandro Luces','Horacio Ballesteros'] },
    { name: 'Escócia', players: ['Alan Rough','Willie Donachie','Gordon McQueen','Martin Buchan','Tom Forsyth','Danny McGrain','Bruce Rioch','Don Masson','Archie Gemmill','Asa Hartford','Lou Macari','Kenny Dalglish','Andy Gray','Joe Jordan','Willie Johnston','David Stewart'] }
  ]}
};

const teamBase1978 = {
  'Argentina': 43, 'Hungria': 61, 'França': 79, 'Itália': 97,
  'Polônia': 115, 'Alemanha Ocidental': 133, 'Tunísia': 151, 'México': 169,
  'Áustria': 187, 'Espanha': 205, 'Suécia': 223, 'Brasil': 241,
  'Holanda': 259, 'Irã': 277, 'Peru': 295, 'Escócia': 313
};

function get1978SeqNum(teamName, stickerPos) {
  const base = teamBase1978[teamName];
  if (!base) return 0;
  return base + stickerPos - 1;
}

const fwc1978History = [
  { name: 'Taça Rimet', id: 'fwc1978-History-1', num: 1 },
  { name: 'Poster Uruguai 1930', id: 'fwc1978-History-2', num: 2 },
  { name: 'Guillermo Stábile (ARG)', id: 'fwc1978-History-3', num: 3 },
  { name: 'Campeões: Uruguai', id: 'fwc1978-History-4', num: 4 },
  { name: 'Poster Itália 1934', id: 'fwc1978-History-5', num: 5 },
  { name: 'Giuseppe Meazza (ITA)', id: 'fwc1978-History-6', num: 6 },
  { name: 'Campeões: Itália', id: 'fwc1978-History-7', num: 7 },
  { name: 'Poster França 1938', id: 'fwc1978-History-8', num: 8 },
  { name: 'Silvio Piola (ITA)', id: 'fwc1978-History-9', num: 9 },
  { name: 'Campeões: Itália', id: 'fwc1978-History-10', num: 10 },
  { name: 'Poster Brasil 1950', id: 'fwc1978-History-11', num: 11 },
  { name: 'Juan Schiaffino (URU)', id: 'fwc1978-History-12', num: 12 },
  { name: 'Campeões: Uruguai', id: 'fwc1978-History-13', num: 13 },
  { name: 'Poster Suíça 1954', id: 'fwc1978-History-14', num: 14 },
  { name: 'Ferenc Puskás (HUN)', id: 'fwc1978-History-15', num: 15 },
  { name: 'Campeões: Alemanha Ocidental', id: 'fwc1978-History-16', num: 16 },
  { name: 'Poster Suécia 1958', id: 'fwc1978-History-17', num: 17 },
  { name: 'Just Fontaine (FRA)', id: 'fwc1978-History-18', num: 18 },
  { name: 'Campeões: Brasil', id: 'fwc1978-History-19', num: 19 },
  { name: 'Poster Chile 1962', id: 'fwc1978-History-20', num: 20 },
  { name: 'Gilmar (BRA)', id: 'fwc1978-History-21', num: 21 },
  { name: 'Campeões: Brasil', id: 'fwc1978-History-22', num: 22 },
  { name: 'Poster Inglaterra 1966', id: 'fwc1978-History-23', num: 23 },
  { name: 'Bobby Charlton (ENG)', id: 'fwc1978-History-24', num: 24 },
  { name: 'Campeões: Inglaterra', id: 'fwc1978-History-25', num: 25 },
  { name: 'Poster México 1970', id: 'fwc1978-History-26', num: 26 },
  { name: 'Pelé (BRA)', id: 'fwc1978-History-27', num: 27 },
  { name: 'Campeões: Brasil', id: 'fwc1978-History-28', num: 28 },
  { name: 'Troféu FIFA World Cup', id: 'fwc1978-History-29', num: 29 },
  { name: 'Poster Alemanha 1974', id: 'fwc1978-History-30', num: 30 },
  { name: 'Franz Beckenbauer (FRG)', id: 'fwc1978-History-31', num: 31 },
  { name: 'Campeões: Alemanha Ocidental', id: 'fwc1978-History-32', num: 32 }
];

const fwc1978Stadiums = [
  { name: 'Estádio de River Plate (Buenos Aires)', id: 'fwc1978-Stadium-33', num: 33 },
  { name: 'Buenos Aires', id: 'fwc1978-Stadium-34', num: 34 },
  { name: 'Estádio de Rosario', id: 'fwc1978-Stadium-35', num: 35 },
  { name: 'Rosario', id: 'fwc1978-Stadium-36', num: 36 },
  { name: 'Estádio de Córdoba', id: 'fwc1978-Stadium-37', num: 37 },
  { name: 'Córdoba', id: 'fwc1978-Stadium-38', num: 38 },
  { name: 'Estádio de Mendoza', id: 'fwc1978-Stadium-39', num: 39 },
  { name: 'Mendoza', id: 'fwc1978-Stadium-40', num: 40 },
  { name: 'Estádio de Mar del Plata', id: 'fwc1978-Stadium-41', num: 41 },
  { name: 'Mar del Plata', id: 'fwc1978-Stadium-42', num: 42 }
];
