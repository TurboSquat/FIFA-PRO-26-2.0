const teams1970_data = {
  'A': { teams: [
    { name: 'Mexico', players: ['Ignacio Calderon', 'Juan Manuel Alejandrez', 'Gustavo Pena', 'Gabriel Nunez', 'Mario Perez', 'Sabas Ponce', 'Alberto Onofre', 'Isidoro Diaz', 'Juan Alvarado', 'Vicente Pereda', 'Aaron Padilla', 'Javier Fragoso', 'Enrique Borja', 'Francisco Castrejon'] },
    { name: 'Belgium', players: ['Jean Trappeniers', 'Georges Heylens', 'Nicolas Dewalque', 'Leon Jeck', 'Jean Thissen', 'Wilfried van Moer', 'Odilon Polleunis', 'Leon Semmeling', 'Johan Devrindt', 'Paul van Himst', 'Wilfried Puis'] },
    { name: 'El Salvador', players: ['Juan Gualberto Fernandez', 'Roberto Rivas', 'Salvador Mariona', 'Mauricio Manzano', 'Jorge Alfredo Vazquez', 'Jose Antonio Quintanilla', 'Mauricio Rodriguez', 'Juan Ramon Martinez', 'Salvador Flamenco', 'Mario Monje', 'Elmer Acevedo'] },
    { name: 'Soviet Union', players: ['Eugene Roudakov', 'Revaz Dzodzuashvili', 'Albert Chesternev', 'Mourtaz Khourtzilava', 'Eugene Zovtchev', 'Vladimir Kaplitchnyi', 'Victor Serebzianikov', 'Vladimir Mountian', 'Kakhi Asatiani', 'Anatole Bichevetz', 'Anatole Pouzatch', 'Guivi Nodia', 'Vitali Khmelnitzki', 'Anzor Kavazachvili'] }
  ]},
  'C': { teams: [
    { name: 'Italy', players: ['Dino Zoff', 'Tarcisio Burgnich', 'Giacinto Facchetti', 'Mario Bertini', 'Giorgio Puia', 'Sandro Salvadore', 'Angelo Domenghini', 'Gianni Rivera', 'Sandro Mazzola', 'Giancarlo De Sisti', 'Luigi Riva', 'Pietro Anastasi', 'Antonio Juliano', 'Enrico Albertosi'] },
    { name: 'Uruguay', players: ['Ladislao Mazurkiewicz', 'Luis Ubina', 'Atilio Anchetta', 'Roberto Matozas', 'Omar Caetano', 'Julio Castillo Montero', 'Luis Cubilla', 'Pedro Virgilio Rocha', 'Sergio Silva', 'Julio Cesar Cortes', 'Raul Bareno'] },
    { name: 'Sweden', players: ['Ronnie Hellstroem', 'Hans Selander', 'Kurt Axelsson', 'Bjorn Nordqvist', 'Roland Grip', 'Tommy Svensson', 'Bo Larsson', 'Leif Eriksson', 'Ove Grahn', 'Ove Kindvall', 'Hans Johansson'] },
    { name: 'Israel', players: ['Izchak Visoker', 'Shraga Bar', 'Menachem Bello', 'Mordechai Lubetzki', 'Zvi Rozen', 'Samuel Rosenthal', 'Rachamim Talbi', 'Izchak Shum', 'Giora Spiegel', 'Joshua Feigenbaum', 'Mordechai Spiegler'] }
  ]},
  'D': { teams: [
    { name: 'Brazil', players: ['Ado', 'Carlos Alberto', 'Brito', 'Joel', 'Everaldo', 'Piazza', 'Jairzinho', 'Gerson', 'Tostao', 'Pele', 'Edu', 'Rivelino', 'Dirceu Lopes', 'Leao'] },
    { name: 'England', players: ['Gordon Banks', 'Tommy Wright', 'Keith Newton', 'Alan Mullery', 'Brian Labone', 'Jack Charlton', 'Bobby Moore', 'Francis Lee', 'Colin Bell', 'Bobby Charlton', 'Alan Ball', 'Geoff Hurst', 'Martin Peters', 'Peter Bonetti'] },
    { name: 'Czechoslovakia', players: ['Ivo Viktor', 'Jan Pivarnik', 'Vladimir Hagara', 'Alexander Horvath', 'Vaclav Migas', 'Andrej Kvasnak', 'Ladislav Kuna', 'Bohumil Vesely', 'Karel Jokl', 'Josef Adamec', 'Jan Capkovic'] },
    { name: 'Romania', players: ['Necula Raducanu', 'Ludovic Satmareanu', 'Bujor Halmageanu', 'Coe Dan', 'Augustin Deleanu', 'Cornel Dinu', 'Flaviu Domide', 'Emerich Dembrovschi', 'Nicolae Dobrin', 'Florea Dumitrache', 'Mircea Lucescu'] }
  ]},
  'B': { teams: [
    { name: 'Bulgaria', players: ['Simeon Simeonov', 'Alexander Scialamanov', 'Ivan Dimitrov', 'Boris Gaganelov', 'Dobromir Zhecev', 'Dimiter Penev', 'Dinco Dermengiiev', 'Hristo Bonev', 'Gheorghi Asparuhov', 'Dimiter Jakimov', 'Peter Zhecov'] },
    { name: 'Peru', players: ['Luis Rubinos', 'Angel Eloy Campos', 'Orlando de la Torre', 'Hector Chumpitaz', 'Luis Pafael Risco', 'Roberto Mifflin', 'Roberto Challe', 'Julio Baylon', 'Pedro Pablo Leon', 'Teofilo Cubillas', 'Alberto Gallardo'] },
    { name: 'Morocco', players: ['Kassou Allal', 'Mohamed Abdallah', 'Benkrif Boujemaa', 'Alaoui Moulay Idriss', 'Kacem Slimani', 'Mohamed Maaroufi', 'Ghandi Said', 'Mohamed Filali', 'Ahmed Faras', 'Driss Bamouss', 'Mahjoub Ghazouani'] },
    { name: 'West Germany', players: ['Sepp Maier', 'Hubert Vogts', 'Willi Schulz', 'Franz Beckenbauer', 'Karl Heinz Schnellinger', 'Horst-Dieter Hottges', 'Klaus Fichtel', 'Helmut Haller', 'Wolfgang Overath', 'Bernd Dorfel', 'Uwe Seeler', 'Gerd Muller', 'Siegfried Held', 'Horst Wolter'] }
  ]}
};

const teamBase1970 = {
  'Mexico': 47, 'Belgium': 64, 'El Salvador': 78, 'Soviet Union': 92,
  'Italy': 109, 'Uruguay': 126, 'Sweden': 140, 'Israel': 154,
  'Brazil': 168, 'England': 185, 'Czechoslovakia': 202, 'Romania': 216,
  'Bulgaria': 230, 'Peru': 244, 'Morocco': 258, 'West Germany': 272
};

const fwc1970Special = [
  { name: 'Rimet Cup', id: 'fwc1970-Special-1', num: 1 },
  { name: 'F.I.F.A.', id: 'fwc1970-Special-2', num: 2 },
  { name: 'Mexican Map', id: 'fwc1970-Special-3', num: 3 },
  { name: 'Juanito (Mascot)', id: 'fwc1970-Special-4', num: 4 },
  { name: 'Mexican Poster', id: 'fwc1970-Special-5', num: 5 }
];
const fwc1970Posters = [
  { name: 'Poster Uruguay 1930', id: 'fwc1970-Poster-6', num: 6 },
  { name: 'Winners - Uruguay', id: 'fwc1970-Poster-7', num: 7 },
  { name: 'Cea (Uruguay)', id: 'fwc1970-Poster-8', num: 8 },
  { name: 'Andrade (Uruguay)', id: 'fwc1970-Poster-9', num: 9 },
  { name: 'Stabile (Argentina)', id: 'fwc1970-Poster-10', num: 10 },
  { name: 'Poster Italia 1934', id: 'fwc1970-Poster-11', num: 11 },
  { name: 'Winners - Italy', id: 'fwc1970-Poster-12', num: 12 },
  { name: 'Combi - Planicka', id: 'fwc1970-Poster-13', num: 13 },
  { name: 'Schiavio (Italy)', id: 'fwc1970-Poster-14', num: 14 },
  { name: 'Orsi (Italy)', id: 'fwc1970-Poster-15', num: 15 },
  { name: 'Poster Italia 1938', id: 'fwc1970-Poster-16', num: 16 },
  { name: 'Winners - Italy', id: 'fwc1970-Poster-17', num: 17 },
  { name: 'Leonidas (Brazil)', id: 'fwc1970-Poster-18', num: 18 },
  { name: 'Meazza - Sarosi', id: 'fwc1970-Poster-19', num: 19 },
  { name: 'Piola (Italy)', id: 'fwc1970-Poster-20', num: 20 },
  { name: 'Poster Uruguay 1950', id: 'fwc1970-Poster-21', num: 21 },
  { name: 'Winners - Uruguay', id: 'fwc1970-Poster-22', num: 22 },
  { name: 'Schiaffino (Uruguay)', id: 'fwc1970-Poster-23', num: 23 },
  { name: 'Ademir (Brazil)', id: 'fwc1970-Poster-24', num: 24 },
  { name: 'Ghiggia (Uruguay)', id: 'fwc1970-Poster-25', num: 25 },
  { name: 'Poster Deutschland 1954', id: 'fwc1970-Poster-26', num: 26 },
  { name: 'Winners - Germany', id: 'fwc1970-Poster-27', num: 27 },
  { name: 'Rahn (Germany)', id: 'fwc1970-Poster-28', num: 28 },
  { name: 'Puskas (Hungary)', id: 'fwc1970-Poster-29', num: 29 },
  { name: 'Kocsis (Hungary)', id: 'fwc1970-Poster-30', num: 30 },
  { name: 'Poster Brasil 1958', id: 'fwc1970-Poster-31', num: 31 },
  { name: 'Winners - Brazil', id: 'fwc1970-Poster-32', num: 32 },
  { name: 'Fontaine (France)', id: 'fwc1970-Poster-33', num: 33 },
  { name: 'Djalma Santos (Brazil)', id: 'fwc1970-Poster-34', num: 34 },
  { name: 'Didi (Brazil)', id: 'fwc1970-Poster-35', num: 35 },
  { name: 'Poster Brasil 1962', id: 'fwc1970-Poster-36', num: 36 },
  { name: 'Winners - Brazil', id: 'fwc1970-Poster-37', num: 37 },
  { name: 'Albert (Hungary)', id: 'fwc1970-Poster-38', num: 38 },
  { name: 'Garrincha (Brazil)', id: 'fwc1970-Poster-39', num: 39 },
  { name: 'Amarildo (Brazil)', id: 'fwc1970-Poster-40', num: 40 },
  { name: 'Poster England 1966', id: 'fwc1970-Poster-41', num: 41 },
  { name: 'Winners - England', id: 'fwc1970-Poster-42', num: 42 },
  { name: 'Albrecht (Argentina)', id: 'fwc1970-Poster-43', num: 43 },
  { name: 'Eusebio (Portugal)', id: 'fwc1970-Poster-44', num: 44 },
  { name: 'Hunt (England)', id: 'fwc1970-Poster-45', num: 45 }
];
const fwc1970Stadiums = [
  { name: 'Azteca Stadium', id: 'fwc1970-Stadium-46', num: 46 }
];
