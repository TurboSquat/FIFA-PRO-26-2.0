const teams2014_data = {
  'A': {
    teams: [
      { name: 'Brasil', players: ['Júlio César','Thiago Silva','David Luiz','Dani Alves','Marcelo','Dante','Ramires','Paulinho','Luiz Gustavo','Hernanes','Oscar','Bernard','Willian','Robinho','Neymar Jr.','Hulk','Fred'] },
      { name: 'Croácia', players: ['Stipe Pletikosa','Darijo Srna','Vedran Ćorluka','Ivan Strinić','Dejan Lovren','Domagoj Vida','Šime Vrsaljko','Ognjen Vukojević','Niko Kranjčar','Luka Modrić','Ivan Rakitić','Mateo Kovačić','Ivan Perišić','Ivica Olić','Eduardo da Silva','Nikica Jelavić','Mario Mandžukić'] },
      { name: 'México', players: ['Jesús Corona','Rafael Márquez','Francisco Rodríguez','Héctor Moreno','Miguel Layún','Paul Aguilar','Diego Reyes','Andrés Guardado','Héctor Herrera','Carlos Peña','Luis Montes','Giovani Dos Santos','Aldo De Nigris','Javier Hernández','Oribe Peralta','Raúl Jiménez','Moisés Muñoz'] },
      { name: 'Camarões', players: ['Charles Itandje','Aurélien Chedjou','Nicolas Nkoulou','Dany Nounkeu','Henri Bedimo','Benoît Assou-Ekotto','Joel Matip','Stéphane Mbia','Alex Song','Eyong Enoh','Jean Makoun','Landry Nguémo','Vincent Aboubakar','Eric Maxim Choupo-Moting','Benjamin Moukandjo','Pierre Webó','Samuel Eto\'o'] }
    ]
  },
  'B': {
    teams: [
      { name: 'Espanha', players: ['Iker Casillas','Sergio Ramos','Gerard Piqué','Raúl Albiol','Álvaro Arbeloa','Jordi Alba','Xabi Alonso','Sergio Busquets','Xavi Hernández','Andrés Iniesta','Cesc Fàbregas','David Silva','Jesús Navas','Juan Mata','Pedro Rodríguez','David Villa','Álvaro Negredo'] },
      { name: 'Países Baixos', players: ['Jasper Cillessen','Daryl Janmaat','Stefan de Vrij','Ron Vlaar','Bruno Martins Indi','Daley Blind','Jordy Clasie','Nigel de Jong','Kevin Strootman','Rafael van der Vaart','Wesley Sneijder','Arjen Robben','Memphis Depay','Dirk Kuyt','Jeremain Lens','Klaas-Jan Huntelaar','Robin van Persie'] },
      { name: 'Chile', players: ['Claudio Bravo','Marcos González','Eugenio Mena','Gonzalo Jara','José Rojas','Gary Medel','Mauricio Isla','Jorge Valdivia','David Pizarro','Matías Fernández','Marcelo Díaz','Arturo Vidal','Jean Beausejour','Charles Aránguiz','Mauricio Pinilla','Eduardo Vargas','Alexis Sánchez'] },
      { name: 'Austrália', players: ['Mathew Ryan','Lucas Neill','Jason Davidson','Mark Milligan','Ivan Franjic','Rhys Williams','Brett Holman','Mile Jedinak','Matt McKay','Mark Bresciano','Tom Rogic','Tim Cahill','Dario Vidošić','Tommy Oar','Ben Halloran','Mathew Leckie','Joshua Kennedy'] }
    ]
  },
  'C': {
    teams: [
      { name: 'Colômbia', players: ['David Ospina','Mario Yepes','Cristian Zapata','Luis Perea','Pablo Armero','Camilo Zúñiga','Aldo Ramirez','Carlos Sanchez','Abel Aguilar','Fredy Guarin','Juan Cuadrado','Macnelly Torres','Carlos Bacca','James Rodriguez','Teofilo Gutierrez','Jackson Martinez','Falcao'] },
      { name: 'Grécia', players: ['Orestis Karnezis','Vasilis Torosidis','Sokratis Papastathopoulos','Giannis Maniatis','Dimitris Siovas','Jose Holebas','Kostas Manolas','Andreas Samaris','Giorgos Karagounis','Kostas Katsouranis','Alexandros Tziolis','Panagiotis Kone','Sotiris Ninis','Giorgos Samaras','Dimitris Salpingidis','Theofanis Gekas','Kostas Mitroglou'] },
      { name: 'Costa do Marfim', players: ['Boubacar Barry','Kolo Toure','Serge Aurier','Souleymane Bamba','Arthur Boka','Benjamin Angoua','Didier Zokora','Yaya Toure','Cheick Tiote','Jean-Jacques Gosso','Serey Dié','Romaric','Gervinho','Salomon Kalou','Wilfried Bony','Lacina Traoré','Didier Drogba'] },
      { name: 'Japão', players: ['Eiji Kawashima','Maya Yoshida','Yasuyuki Konno','Atsuto Uchida','Yuto Nagatomo','Gotoku Sakai','Hiroki Sakai','Masato Morishige','Yasuhito Endo','Makoto Hasebe','Keisuke Honda','Hotaru Yamaguchi','Hiroshi Kiyotake','Shinji Kagawa','Shinji Okazaki','Yoichiro Kakitani','Yuya Osako'] }
    ]
  },
  'D': {
    teams: [
      { name: 'Uruguai', players: ['Fernando Muslera','Diego Lugano','Diego Godín','Maxi Pereira','Martín Cáceres','Álvaro Pereira','Walter Gargano','Egidio Arévalo Ríos','Diego Pérez','Álvaro González','Cristian Rodríguez','Gastón Ramírez','Cristhian Stuani','Abel Hernández','Diego Forlán','Edinson Cavani','Luis Suárez'] },
      { name: 'Costa Rica', players: ['Keylor Navas','Giancarlo González','Michael Umaña','Cristian Gamboa','Johnny Acosta','Junior Díaz','Roy Miller','Ariel Rodriguez','Christian Bolaños','José Miguel Cubero','Celso Borges','Michael Barrantes','Yeltsin Tejeda','Diego Calvo','Bryan Ruiz','Joel Campbell','Álvaro Saborío'] },
      { name: 'Inglaterra', players: ['Joe Hart','Ashley Cole','Glen Johnson','Gary Cahill','Phil Jagielka','Kyle Walker','Leighton Baines','Steven Gerrard','Frank Lampard','Michael Carrick','Jack Wilshere','James Milner','Andros Townsend','Alex Oxlade-Chamberlain','Danny Welbeck','Daniel Sturridge','Wayne Rooney'] },
      { name: 'Itália', players: ['Gianluigi Buffon','Andrea Barzagli','Leonardo Bonucci','Giorgio Chiellini','Ignazio Abate','Mattia De Sciglio','Thiago Motta','Daniele De Rossi','Andrea Pirlo','Riccardo Montolivo','Claudio Marchisio','Emanuele Giaccherini','Antonio Candreva','Alessio Cerci','Alberto Gilardino','Giuseppe Rossi','Mario Balotelli'] }
    ]
  },
  'E': {
    teams: [
      { name: 'Suíça', players: ['Diego Benaglio','Stephan Lichtsteiner','Ricardo Rodríguez','Steve von Bergen','Fabian Schär','Philippe Senderos','Johan Djourou','Tranquillo Barnetta','Gökhan Inler','Valon Behrami','Blerim Džemaili','Granit Xhaka','Valentin Stocker','Xherdan Shaqiri','Admir Mehmedi','Eren Derdiyok','Haris Seferović'] },
      { name: 'Equador', players: ['Alexander Domínguez','Walter Ayoví','Frickson Erazo','Jorge Guagua','Gabriel Achilier','Juan Carlos Paredes','Édison Méndez','Enner Valencia','Luis Saritama','Christian Noboa','Segundo Castillo','Joao Rojas','Antonio Valencia','Renato Ibarra','Jefferson Montero','Felipe Caicedo','Jaime Ayoví'] },
      { name: 'França', players: ['Hugo Lloris','Patrice Evra','Mathieu Debuchy','Raphaël Varane','Laurent Koscielny','Mamadou Sakho','Éric Abidal','Moussa Sissoko','Yohan Cabaye','Blaise Matuidi','Paul Pogba','Mathieu Valbuena','Samir Nasri','Franck Ribéry','Loïc Rémy','Olivier Giroud','Karim Benzema'] },
      { name: 'Honduras', players: ['Noel Valladares','Emilio Izaguirre','Víctor Bernárdez','Maynor Figueroa','Juan Carlos García','Brayan Beckeles','Jorge Claros','Arnold Peralta','Boniek García','Roger Espinoza','Luis Garrido','Wilson Palacios','Andy Najar','Jerry Palacios','Marvin Chávez','Jerry Bengtson','Carlo Costly'] }
    ]
  },
  'F': {
    teams: [
      { name: 'Argentina', players: ['Sergio Romero','Pablo Zabaleta','Ezequiel Garay','Federico Fernández','Hugo Campagnaro','Marcos Rojo','Lucas Biglia','Javier Mascherano','Fernando Gago','Éver Banega','Maxi Rodríguez','Ángel Di María','Ezequiel Lavezzi','Rodrigo Palacio','Sergio Agüero','Gonzalo Higuaín','Lionel Messi'] },
      { name: 'Bósnia e Herzegovina', players: ['Asmir Begović','Emir Spahić','Avdija Vršajević','Ermin Bičakčić','Toni Šunjić','Sead Kolašinac','Senad Lulić','Senijad Ibričić','Mensur Mujdža','Haris Medunjanin','Zvjezdan Misimović','Miralem Pjanić','Sejad Salihović','Adnan Zahirović','Izet Hajrović','Vedad Ibišević','Edin Džeko'] },
      { name: 'Irã', players: ['Daniel Davari','Jalal Hosseini','Khosro Heydari','Hossein Mahini','Pejman Montazeri','Ehsan Hajsafi','Hashem Beikzadeh','Amir Hossein Sadeghi','Javad Nekounam','Andranik Teymourian','Mojtaba Jabbari','Masoud Shojaei','Ashkan Dejagah','Reza Ghoochannejhad','Gholamreza Rezaei','Karim Ansarifard','Mohammad Khalatbari'] },
      { name: 'Nigéria', players: ['Vincent Enyeama','Joseph Yobo','Efe Ambrose','Godfrey Oboabona','Elderson Echiejilé','Azubuike Egwuekwe','Kenneth Omeruo','John Ogu','John Obi Mikel','Ogenyi Onazi','Sunday Mba','Victor Moses','Nnamdi Oduamadi','Ahmed Musa','Ideye Brown','Shola Ameobi','Emmanuel Emenike'] }
    ]
  },
  'G': {
    teams: [
      { name: 'Alemanha', players: ['Manuel Neuer','Philipp Lahm','Per Mertesacker','Jérôme Boateng','Mats Hummels','Marcel Schmelzer','Sami Khedira','Bastian Schweinsteiger','Toni Kroos','Mesut Özil','Mario Götze','Julian Draxler','Marco Reus','André Schürrle','Lukas Podolski','Thomas Müller','Miroslav Klose'] },
      { name: 'Portugal', players: ['Rui Patrício','Pepe','Bruno Alves','João Pereira','Fábio Coentrão','Ricardo Costa','Antunes','Josué','Miguel Veloso','João Moutinho','Raul Meireles','William Carvalho','Nani','Silvestre Varela','Hélder Postiga','Hugo Almeida','Vieirinha'] },
      { name: 'Gana', players: ['Fatau Dauda','Samuel Inkoom','Jonathan Mensah','Daniel Opare','Harrison Afful','John Boye','Michael Essien','Emmanuel Badu','Kwadwo Asamoah','Sulley Muntari','Wakaso Mubarak','Kevin-Prince Boateng','Waris Majeed','Christian Atsu','André Ayew','Jordan Ayew','Asamoah Gyan'] },
      { name: 'Estados Unidos', players: ['Tim Howard','Geoff Cameron','Omar Gonzalez','Clarence Goodson','Matt Besler','Fabian Johnson','DaMarcus Beasley','Jermaine Jones','Michael Bradley','Brad Evans','Graham Zusi','Mix Diskerud','Clint Dempsey','Aron Jóhannsson','Landon Donovan','Eddie Johnson','Jozy Altidore'] }
    ]
  },
  'H': {
    teams: [
      { name: 'Bélgica', players: ['Thibaut Courtois','Vincent Kompany','Toby Alderweireld','Jan Vertonghen','Daniel Van Buyten','Thomas Vermaelen','Steven Defour','Axel Witsel','Mousa Dembélé','Kevin De Bruyne','Marouane Fellaini','Nacer Chadli','Eden Hazard','Dries Mertens','Kevin Mirallas','Romelu Lukaku','Christian Benteke'] },
      { name: 'Argélia', players: ['Raïs M\'Bolhi','Madjid Bougherra','Carl Medjani','Adlène Guedioura','Djamel Mesbah','Mehdi Mostefa','Faouzi Ghoulam','Essaïd Belkalem','Hassan Yebda','Mehdi Lacen','Yacine Brahimi','Saphir Taïder','Sofiane Feghouli','Rafik Djebbour','Nabil Ghilas','El Arbi Soudani','Islam Slimani'] },
      { name: 'Rússia', players: ['Igor Akinfeev','Sergei Ignashevich','Aleksei Berezutski','Vasili Berezutski','Dmitri Kombarov','Aleksandr Anyukov','Aleksei Kozlov','Roman Shirokov','Igor Denisov','Viktor Fayzulin','Vladimir Bystrov','Denis Glushakov','Aleksandr Samedov','Alan Dzagoev','Fedor Smolov','Aleksandr Kokorin','Aleksandr Kerzhakov'] },
      { name: 'Coreia do Sul', players: ['Jung Sung-Ryong','Kwak Tae-Hwi','Hong Jeong-Ho','Kim Young-Gwon','Park Joo-Ho','Shin Kwang-Hoon','Lee Yong','Han Kook-Young','Lee Chung-Yong','Ki Sung-Yueng','Koo Ja-Cheol','Kim Bo-Kyung','Son Heung-Min','Ji Dong-Won','Kim Shin-Wook','Park Chu-Young','Lee Keun-Ho'] }
    ]
  }
};
