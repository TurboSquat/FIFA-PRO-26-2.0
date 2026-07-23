const teams1990_data = {
  'A': { teams: [
    { name: 'Italy', players: ['Walter Zenga','Stefano Tacconi','Giuseppe Bergomi','Franco Baresi','Riccardo Ferri','Ciro Ferrara','Paolo Maldini','Luigi de Agostini','Nicola Berti','Carlo Ancelotti','Fernando de Napoli','Giuseppe Giannini','Roberto Donadoni','Roberto Baggio','Gianluca Vialli','Andrea Carnevale','Roberto Mancini'] },
    { name: 'Austria', players: ['Klaus Lindenberger','Otto Konrad','Kurt Russ','Heribert Weber','Ernst Aigner','Anton Pfeffer','Robert Pecl','Peter Artner','Manfred Zsak','Manfred Linzmaier','Alfred Hortnagl','Andreas Herzog','Christian Keglevits','Andreas Ogris','Anton Polster','Gerhard Rodax','Heimo Pfeifenberger'] },
    { name: 'Czechoslovakia', players: ['Jan Stejskal','Ludek Miklosko','Julius Bielik','Miroslav Kadlec','Frantisek Straka','Jan Kocian','Lubomir Vlk','Peter Fieber','Ivan Hasek','Jozef Chovanec','Michal Bilek','Lubomir Moravcik','Vaclav Nemecek','Lubos Kubik','Stanislav Griga','Milan Luhovy','Tomas Skuhravy'] },
    { name: 'USA', players: ['Tony Meola','Kasey Keller','Marcelo Balboa','Jimmy Banks','Mike Windischmann','Steve Trittschuh','John Doyle','Paul Caligiuri','Brian Bliss','John Stollmeyer','Tab Ramos','John Harkes','Eric Eichmann','Hugo Perez','Bruce Murray','Peter Vermes','Eric Wynalda'] }
  ]},
  'B': { teams: [
    { name: 'Argentina', players: ['Nery Alberto Pumpido','Luis Alberto Islas','Nestor Rolando Clausen','Juan Ernesto Simon','Oscar Alfredo Ruggeri','Nestor Ariel Fabbri','Julio Jorge Olarticoechea','Ricardo Omar Giusti','Sergio Daniel Batista','Pedro Antonio Troglio','Jose Horacio Basualdo','Jorge Luis Burruchaga','Diego Armando Maradona','Claudio Paul Caniggia','Abel Eduardo Balbo','Gustavo Abel Dezotti','Jorge Alberto Valdano'] },
    { name: 'Soviet Union', players: ['Rinat Dasaev','Viktor Chanov','Vladimir Bessonov','Sergei Gorlukovich','Vagiz Khidiatullin','Oleg Kuznetsov','Vasili Rats','Andrei Zygmantovich','Sergei Aleinikov','Ivan Yaremchuk','Aleksei Mikhaijlichenko','Gennadij Litovchenko','Aleksandr Zavarov','Fedor Cherenkov','Oleg Protasov','Igor Dobrovolskij','Sergei Rodionov'] },
    { name: 'Romania', players: ['Silviu Lung','Bogdan Stelea','Dan Petrescu','Stefan Iovan','Mircea Rednic','Ion Andone','Adrian Bumbescu','Iosif Rotariu','Michael Klein','Gheorghe Popescu','Ovidiu Ioan Sabau','Dorin Mateut','Danut Lupu','Gheorghe Hagi','Marius Lacatus','Rodion Camataru','Gavril Balint'] },
    { name: 'Cameroon', players: ['Joseph-Antoine Bell / Thomas N\'Kono','Stephen Tataw / Emmanuel Kunde','Benjamin Massing / Bertin Ebwelle','Jean-Claude Pagal / Richard Tchakounang','Emile M\'Bouh / Andre Kana-Biyik','Louis Paul M\'Fede / Cyrille Makanaky','Ernest-Lottin Ebongue / Francois Omam-Biyik','Eugene Ekeke / Bonaventure Djonkep'] }
  ]},
  'C': { teams: [
    { name: 'Costa Rica', players: ['Luis Gabelo Conejo / Jose Arturo Hidalgo','Vladimir Quesada / Enrique Diaz','Roger Flores / Mauricio Montero','Ronald Marin / Jose Carlos Chavez','Hector Marchena / Alvaro Solano','Oscar Ramirez / German Chavarria','Juan Antonio Cayasso / Evaristo Coronado','Hernan Medford / Claudio Jara'] },
    { name: 'Brazil', players: ['Taffarel','Acacio','Mazinho','Mauro Galvao','Ricardo Gomes','Aldair','Ricardo Rocha','Branco','Jorginho','Alemao','Dunga','Silas','Valdo','Bebeto','Careca','Romario','Muller'] },
    { name: 'Scotland', players: ['Jim Leighton','Andy Goram','Richard Gough','Willie Miller','Alex McLeish','Gary Gillespie','Dave McPherson','Maurice Malpas','Roy Aitken','Steve Nicol','Murdo MacLeod','Paul McStay','Stuart McCall','Jim Bett','Ally McCoist','Maurice Johnston','Alan McInally'] },
    { name: 'Sweden', players: ['Thomas Ravelli','Sven Andersson','Roland Nilsson','Glenn Hysen','Peter Larsson','Roger Ljung','Dennis Schiller','Klas Ingesson','Jonas Thern','Leif Engqvist','Glenn Peter Stromberg','Anders Limpar','Niklas Larsson','Joakim Nilsson','Mats Magnusson','Johnny Ekstrom','Stefan Lindqvist'] }
  ]},
  'D': { teams: [
    { name: 'Germany', players: ['Bodo Illgner','Raimond Aumann','Thomas Berthord','Jurgen Kohler','Klaus Augenthaler','Guido Buchwald','Andreas Brehme','Stefan Reuter','Andreas Moller','Lothar Matthaus','Olaf Thon','Uwe Bein','Thomas Hassler','Pierre Littbarski','Rudi Voller','Jurgen Klinsmann','Karlheinz Riedle'] },
    { name: 'Yugoslavia', players: ['Tomislav Ivkovic','Fahrudin Omerovic','Vujadin Stanojkovic','Davor Jozic','Zoran Vulic','Faruk Hadzibegic','Predrag Spasic','Zoran Vujovic','Srecko Katanec','Dragoljub Brnovic','Dragan Stojkovic','Safet Susic','Robert Prosinecki','Zlatko Vujovic','Darko Pancev','Dejan Savicevic','Haris Skoro'] },
    { name: 'Colombia', players: ['Jose Rene Higuita','Eduardo Nino','Gildardo Biderman Gomez','Andres Escobar','Luis Carlos Perea','Carlos Mario Hoyos','Leon Fernando Villa','Alexis Antonio Mendoza','Gabriel Jaime Gomez','Ricardo Perez','Leonel de Jesus Alvarez','Bernardo Redin','Carlos Alberto Valderrama','Luis Alfonso Fajardo','Arnoldo Alberto Iguaran','Ruben Dario Hernandez','John Jairo Trellez'] },
    { name: 'UAE', players: ['Mushin Musabeh Faraj / Adil Anas Juma\'A','Mohamed Obaid Hilal / Eissa Meer Abdulrahman','Khaleel Ghanim Mubarak / Mubarak Ghanim Mubarak','Ibrahim Meer Abdulrahman / Abbulrahman Mohamed Abdullah','Abdulrahman Al Haddad / Nasser Khamees Mubarak','Fahad Abdulrahman Abdullah / Ali Thani Juma\'A','Hassan Mohamed Hussain / Fahad Khamees Mubarak','Adnan Khamees Al Taliyani / Zuhair Bakheet Bilal'] }
  ]},
  'E': { teams: [
    { name: 'South Korea', players: ['Poong-Joo Kim / Gi-Dong Jeong','Kang-Hee Choi / Kyung-Hoon Park','Yong-Hwan Chung / Jong-Soo Chung','Sang-Bum Gu / Duk-Yeo Yoon','Young-Sang Lee / Bo-Kwan Hwang','Sang-Ho Kim / Young-Jin Lee','Joo-Sung Kim / Soon-Ho Choi','Seon-Hong Hwang / Byung-Joo Byun'] },
    { name: 'Belgium', players: ['Michel Preud\'Homme','Gilbert Bodart','Eric Gerets','Georges Grun','Leo Clijsters','Stephane Demol','Philippe Albert','Michel de Wolf','Bruno Versavel','Marc Emmers','Franky van der Elst','Vincenzo Scifo','Patrick Vervoort','Jan Ceulemans','Marc de Gryse','Marc Vanderlinden','Luc Nilis'] },
    { name: 'Spain', players: ['Andoni Zubizarreta','Jose Manuel Ochotorena','Miguel Porlan Chendo','Genaro Andrinua','Juan Rodriguez Juanito','Manuel Sanchis','Manuel Jimenez','Luis Milla','Roberto Fernandez','Miguel Gonzalez Michel','Francisco Perez Villaroya','Rafael Martin Vazquez','Jose Maria Baquero','Manuel Sanchez Manolo','Emilio Butragueno','Julio Salinas','Aitor Beguiristain'] },
    { name: 'Uruguay', players: ['Eduardo Pereira','Javier Zeoli','Jose Herrera','Nelson Gutierrez','Felipe Revelez','Hugo de Leon','Alfonso Dominguez','Jose Perdomo','Santiago Ostolaza','Gabriel Correa','Pablo Bengoechea','Ruben Pereira','Ruben Paz','Antonio Alzamendi','Enzo Francescoli','Ruben Sosa','Carlos Aguilera'] }
  ]},
  'F': { teams: [
    { name: 'England', players: ['Peter Shilton','Chris Woods','Gary Stevens','Paul Parker','Des Walker','Terry Butcher','Stuart Pearce','Neil Webb','Steve McMahon','Steve Hodge','Paul Gascoigne','Bryan Robson','David Rocastle','Chris Waddle','Peter Beardsley','Gary Lineker','John Barnes'] },
    { name: 'Netherlands', players: ['Hans van Breukelen','Joop Hielle','Berry van Aerle','Ronald Koeman','Graeme Rutjes','Adrie van Tiggelen','Frank Rijkaard','Aron Winter','Jan Wouters','Erwin Koeman','Gerald Vanenburg','John van T Schip','Johnny Bosman','Ruud Gullit','Marco van Basten','Wim Kieft','Rob Witschge'] },
    { name: 'Ireland', players: ['Pat Bonner','Gerry Peyton','Chris Morris','Chris Hughton','Kevin Moran','David O\'Leary','Mick McCarthy','Steve Staunton','Paul McGrath','Ronnie Whelan','Andy Townsend','Ray Houghton','Kevin Sheedy','Tony Galvin','John Aldridge','Tony Cascarino','Frank Stapleton'] },
    { name: 'Egypt', players: ['Ahmed Shobeir / Ayman Taher','Ibrahim Hassan / Ahmed Ramzy','Hesham Yaken / Saber Eid','Ashraf Kassem / Rabie Yassine','Ahmed El Kass / Magdi Abdelghani','Badr Ragab / Yaser Farouk','Ayman Shawky / Taher Abouzeid','Gamal Abdelhamid / Hossam Hassan'] }
  ]}
};

const teamHasNoTeamPage1990 = {
  'Cameroon': true, 'Costa Rica': true, 'UAE': true, 'South Korea': true, 'Egypt': true
};

const teamBase1990 = {
  'Italy': 38, 'Austria': 57, 'Czechoslovakia': 76, 'USA': 95,
  'Argentina': 114, 'Soviet Union': 133, 'Romania': 152, 'Cameroon': 171,
  'Costa Rica': 181, 'Brazil': 191, 'Scotland': 210, 'Sweden': 229,
  'Germany': 248, 'Yugoslavia': 267, 'Colombia': 286, 'UAE': 305,
  'South Korea': 315, 'Belgium': 325, 'Spain': 344, 'Uruguay': 363,
  'England': 382, 'Netherlands': 401, 'Ireland': 420, 'Egypt': 439
};

// IDs dos 37 cromos pre-Italia (catálogo Panini Italia '90, posições 1-37)
// Reutilizado por shareMissing e shareWanted no index.html.
const fwc1990Ids = [
  'fwc1990-Intro-1','fwc1990-Intro-2','fwc1990-Intro-3','fwc1990-Intro-4',
  'fwc1990-Ciao-5','fwc1990-Ciao-6','fwc1990-Ciao-7','fwc1990-Ciao-8',
  'fwc1990-Stad-9','fwc1990-Cid-10','fwc1990-Stad-11','fwc1990-Cid-12',
  'fwc1990-Stad-13','fwc1990-Cid-14','fwc1990-Ciao-15','fwc1990-Stad-16',
  'fwc1990-Cid-17','fwc1990-Stad-18','fwc1990-Cid-19','fwc1990-Stad-20',
  'fwc1990-Cid-21','fwc1990-Stad-22','fwc1990-Cid-23','fwc1990-Stad-24',
  'fwc1990-Cid-25','fwc1990-Ciao-26','fwc1990-Ciao-27','fwc1990-Stad-28',
  'fwc1990-Cid-29','fwc1990-Cid-30','fwc1990-Stad-31','fwc1990-Cid-32',
  'fwc1990-Stad-33','fwc1990-Ciao-34','fwc1990-Ciao-35','fwc1990-Cid-36',
  'fwc1990-Stad-37'
];
