const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MovieIndianaJones = require('../../api/models/models.IndianaJones/movies.IndianaJones.model');

const arrayMoviesIndianaJones = [
  {
    title: 'Indiana Jones y el Arca Perdida',
    picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710450066/IndianaJones/Movies/EN_BUSCA_DEL_ARCA_PERDIDA_2_ugbcwe.jpg',
    director: 'Steven Spielberg',
    year: 1981,
    duration: "115 min",
    country: "EEUU",
    genre: 'Aventuras',
    clasification: "PG12",
    books: "",
    characters: [],
    resume: 'En 1936 el arqueólogo estadounidense Indiana Jones viaja a un templo peruano para recuperar una estatuilla, sin embargo es interceptado por René Belloq, un colega con quien tiene una rivalidad. Tras una persecución por integrantes de una tribu salvaje, Belloq se hace con la estatuilla y Jones escapa a bordo de un hidroavión. De vuelta en Estados Unidos, un par de agentes de inteligencia del ejército le informan a Jones que, al interceptar unos telegramas nazis, se percataron de que las fuerzas alemanas se encuentran excavando en algún sitio de Tanis, Egipto. En uno de los telegramas se menciona a Abner Ravenwood, el antiguo mentor de Indiana. Con esta información, el aventurero deduce que los nazis buscan el Arca de la Alianza para volverse «invencibles», así que acepta involucrarse en una misión para impedirlo.                                                                                                                                                                                                                                                                      Su primer destino lo lleva a un bar en Nepal a cargo de Marion, la hija de Abner y antiguo interés romántico del arqueólogo. Mientras la pareja conversa, un agente de la Gestapo, Arnold Toht, incendia el bar e intenta sin éxito robarle un medallón a la propietaria, tras lo cual huye del sitio. A partir de ese momento Marion decide acompañar a Indiana a su próximo destino, El Cairo, en donde se reúnen con Sallah, un viejo amigo del aventurero. Este les revela que los nazis son ayudados por Belloq y que el medallón contiene la pista para localizar el Arca de la Alianza. Marion es capturada por los nazis, mientras que Jones y Belloq acuden a un lugar subterráneo denominado el «Pozo de las almas», en donde el arqueólogo utiliza el medallón y una reliquia conocida como «el bastón de Ra» para descifrar la ubicación exacta del Arca de la Alianza. Para entonces descubre que el medallón contiene una advertencia relacionada con el interior del objeto sagrado. Asimismo Marion logra huir de su aprisionamiento.                                                                                                                                                                                                                                                                 Una vez descubierta el Arca de la Alianza, Indiana y Marion optan por trasladarla a Londres a bordo de un barco de vapor sin embargo son perseguidos en altamar por los nazis, quienes logran robarle la reliquia. De manera inadvertida para ellos, la pareja se infiltra en la embarcación alemana y navegan junto a la tripulación hasta una isla en el mar Egeo, sitio elegido por Belloq para revelar el supuesto «poder» interior del Arca de la Alianza. A pesar de que el aventurero les advierte sobre las consecuencias de tal acción, el arqueólogo rival y los oficiales nazis abren el cofre y descubren que aparentemente solo contiene arena. A continuación una serie de elementos sobrenaturales emergen del Arca y asesinan a todos los presentes, excepto a Jones y Marion al ser los únicos que cerraron sus ojos y evitaron observar el interior de la reliquia. Una vez asegurada el Arca y de regreso en Washington D. C., el gobierno estadounidense reconoce la exitosa misión de Jones y el objeto es almacenado en un lugar secreto del país.',
  },
  {
    title: 'Indiana Jones y el Templo Maldito',
    picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710450057/IndianaJones/Movies/INDINAA_Y_EL_TEMPLO_2_vgeamh.jpg',
    director: 'Steven Spielberg',
    year: 1984,
    duration: "118 min",
    country: "EEUU",
    genre: 'Aventuras',
    clasification: "PG12",
    books: "",
    characters: [],
    resume: 'En 1935, Indy y el dueño del club Obi Wan, Lao Che, tienen asuntos que atender. Jones ha recuperado las cenizas del Nuhachi, el primer emperador de la dinastía manchú de China, y a cambio del valioso objeto Lao le entregará el «Ojo del Pavorreal», un enorme diamante. La noche anterior los hijos de Lao Che habían intentado robarle la reliquia a Jones, por lo cual este ya esperaba una traición. Sin embargo, Indiana bebe un veneno que había sido puesto en su copa y Lao intenta quedarse con el diamante y la reliquia a cambio del antídoto. En ese momento aparece Wu Han, un viejo amigo de Indy disfrazado de camarero que sostiene una pistola, pero durante un segundo de distracción uno de los hijos de Lao mata a Wu e Indy se ve obligado a escapar en medio de una trifulca que él mismo provoca al matar a uno de los hijos de Che.Indy escapa lanzándose de la ventana del edificio con Willie como su prisionera, ya que ella guarda el antídoto en su escote; Indy y la chica aterrizan en un automóvil conducido por Wan Li, alias Short Round (Tapón, Taponcito Rapaz en Latinoamérica), un niño huérfano protegido por el Dr. Jones. En medio de una persecución por las calles de Shanghái, Indy bebe el antídoto y junto a Tapón y Willie logra llegar al aeropuerto, donde los tres abordan un avión que, para mala suerte de Indy, es propiedad de Lao Che.                                                                                                                                                                                                                                                                           Mientras sobrevuelan las montañas del norte de India, los pilotos, hombres de Lao, abandonan el avión en paracaídas dejando a los pasajeros a su merced. El arqueólogo obliga a todos a saltar del avión a bordo de una balsa inflable a modo de paracaídas poco antes de que la aeronave se estrelle. La balsa cae por cascadas, ríos y acantilados para finalmente navegar por un cauce de aguas tranquilas, donde un chamán lleva a Indy y sus acompañantes a Maypore, una aldea asolada por la sequía. El chamán explica a Indiana que su desgracia se debe a que en el Palacio de Pankot hay un nuevo marajá que es un adorador del mal, y que sus hombres robaron una piedra lingam de Shiva, una mística roca de río que mantenía fértil su tierra y una de las cinco rocas "Shankara" entregadas por Shiva a este como ayuda para combatir el mal. También le cuenta que tiempo después los hombres del palacio llegaron y secuestraron a todos los niños de la aldea. El chamán afirma que sus rezos fueron escuchados por Shiva y que fue él quien hizo que Indiana cayera del cielo.Ignorando las quejas de Willie, Indy los lleva a Pankot, donde son recibidos por Chattar Lal, primer ministro del marajá. Su visita coincide con la del capitán Phillip Blumburtt, un militar británico que se encuentra inspeccionando el palacio, por lo cual se organiza un banquete al que asiste el marajá en persona, Zalim Singh, quien tan solo es un adolescente. Durante la conversación, Indiana despierta sospechas sobre las actividades de la secta de Los Estranguladores Thugs, adoradores de la diosa Kali que habían desaparecido cien años atrás. Después de la cena, un matón trata de estrangular a Indiana en su propia habitación, por lo cual los tres deciden escapar. Encuentran un pasadizo secreto en el cuarto de Willie que conduce directamente al «Templo de la Perdición» o «Templo Maldito», donde la secta Thug, liderada por el sacerdote Mola Ram, realiza sacrificios humanos y donde se encuentran tres de las cinco piedras Shankara, objetos que le darán a su poseedor un gran poder. A la secta también pertenece el primer ministro, que tiene hechizado al joven marajá.                                                                                                                                                                                                                                                                      Indiana Jones roba las piedras, pero descubre que los Thug usan a los niños raptados como esclavos en una mina de diamantes. Indiana, Tapón y Willie son capturados y Mola Ram obliga a Indy a beber la sangre de Kali, una bebida con la cual lo hipnotizan para que sea parte de la secta y sacrifique a Willie. Sin embargo, Tapón logra escapar y libera a Indy del hechizo quemándole con una antorcha en el estómago. Los tres huyen del templo con la ayuda del marajá, ya liberado del hechizo, pero los Estranguladores Thug los persiguen en vagonetas por los túneles de la mina hasta un puente colgante. Rodeado, Indiana corta las cuerdas del puente con una espada y logra acabar con muchos de ellos, pero Mola Ram no cae y está a punto de matar a Indiana, quien se salva pronunciando mantras hindúes que provocan que las piedras que continuaban en su bolsa se vuelvan incandescentes y quemen la mano de Ram. El malvado sacerdote cae al río infestado de cocodrilos junto con casi todas las reliquias y muere; en ese momento el ejército británico comandado por Phillip Blumburtt llega para acabar con el resto de la secta. Indy retorna triunfal a la aldea con los niños y la piedra sagrada..',
  },
  {
    title: 'Indiana Jones y la Ultima Cruzada',
    picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710450000/IndianaJones/Movies/indiana_jones_and_the_last_crusade-543263734-large.jpg_1_ewzoee.jpg',
    director: 'Steven Spielberg',
    year: 1989,
    duration: "127 min",
    country: "EEUU",
    genre: 'Aventuras',
    clasification: "PG12",
    books: "",
    characters: [],
    resume: 'La historia comienza en 1912, cuando un Indiana Jones de trece años aparece cabalgando con su compañía de boy scouts en una zona desértica de Utah. El joven Indiana descubre a unos buscadores de tesoros furtivos en una cueva, los cuales acababan de encontrar una cruz que había pertenecido al conquistador español Francisco Vázquez de Coronado, la Cruz de Coronado.n. El jefe de los cazatesoros viste una chaqueta de cuero y un sombrero fedora, por lo que el joven Indiana le denomina «Fedora». Indy roba la cruz sosteniendo que debería permanecer en un museo en lugar de en una colección privada. Tras escapar de Fedora a caballo y refugiarse en un tren circense, el joven consigue un látigo en uno de los vagones, con el que termina hiriéndose el mentón, y adquiriendo una fobia a las serpientes al caer directamente en un vagón con reptiles. Aunque consigue huir con la cruz, los ladrones, en nombre de su cliente, Panama Hat (en referencia al sombrero panamá que lleva), le dicen al sheriff del pueblo donde viven que Indiana fue el ladrón y este se ve obligado a devolverla, mientras su descuidado padre, Henry Jones, sigue trabajando en su diario sobre el Santo Grial. El jefe de los ladrones, vestido de forma similar al Indiana futuro, e impresionado por el coraje del joven, le obsequia con unas palabras de aliento («Hoy has perdido, chico, pero no tiene por qué gustarte»)n. y le regala su sombrero fedora.                                                  Mediante una elipsis hecha con el sombrero fedora de Indy, la historia avanza veintiséis años después, en 1938. Indiana, ya adulto, se encuentra a bordo del barco de Panama Hat, el Coronado, junto a la costa portuguesa, y consigue arrebatarle finalmente la cruz antes de que el barco explote y volver a la Universidad Barnett, donde enseña. Allí, dona la cruz al museo que dirige Marcus Brody. Poco después recibe un paquete que no abre en ese momentoMás adelante, Indiana se reúne con el millonario Walter Donovan en su apartamento. Donovan ha hecho generosas contribuciones al museo en los últimos años, e informa a Indiana de que su padre había desaparecido mientras buscaba una pista de la ubicación del Grial, del que Donovan cree que proporciona la inmortalidad. Donovan le muestra a Indiana la mitad de una antigua tablilla de arenisca con un texto en latín que parece datar del siglo xii, encontrada por unos empleados de Donovan en Anatolia. La tableta describe el escondite del Grial, pero se encuentra incompleta. Donovan también le cuenta que, según ciertos textos medievales, el hallazgo de dicha tablilla es una señal de la aparición del Grial. La segunda señal se podría encontrar en Venecia, en la tumba de un caballero de la Primera Cruzada. Donovan le cuenta que el encargado de la búsqueda del Grial en Venecia era su padre y que había desaparecido allí.                                                                                                                                                                                                                                                                           Poco después, Indiana visita el apartamento de su padre, que había sido registrado, y se percata de que el paquete que había recibido era el diario en el que su progenitor recogía todos sus hallazgos e impresiones en la búsqueda del Grial. Comprendiendo que su padre no le habría enviado el diario a menos que estuviese en dificultades, viaja a Venecia en compañía de Marcus para encontrarse con la doctora Elsa Schneider, ayudante austriaca de su padre en la búsqueda, y así seguirle el rastro a su extraviado padre. Su recorrido en Venecia comienza en la biblioteca donde fue visto la última vez. Allí, Indy reconoce una vidriera dibujada por su padre en el diario, bajo la que encuentra una «X» en el suelo, rompe una baldosa y entra en unas antiguas catacumbas inundadas de petróleo. En el interior se halla la tumba de sir Richard, el caballero de la Primera Cruzada, cuyo escudo contiene una versión completa de la información en la tablilla. Sin embargo, la Hermandad de la Espada Cruciforme, una sociedad religiosa secreta que protege el Santo Grial, incendia el petróleo de las catacumbas para matar a Indiana y a Elsa. Ante esto, Indiana derriba el sarcófago de Richard, de forma que Elsa y él pudieron resguardarse de las llamas, y así cruzar por una alcantarilla para salir de la biblioteca. Finalmente, ambos logran huir a bordo de una lancha a motor. La persecución termina cuando Jones logra capturar a Kazim, el líder de la sociedad secreta, el cual le explica que la Hermandad tiene como objetivo proteger al Grial de aquellos que lo buscan con intenciones perversas. Una vez que le convence de que su propósito es encontrar a su padre, y no el Grial, Kazim le revela que Henry está cautivo en el castillo de Brunwald, en Austria, cerca de la frontera con Alemania.                                                                                                                                                                                                                                                                      Antes de partir a Brunwald, Marcus e Indiana repasan el contenido del escudo de sir Richard. El texto del escudo habla de la antigua ciudad de Alejandreta que en la época de los Jones tenía el nombre de Iskenderun, una ciudad de la actual Turquía y entonces parte de la república de Hatay, un territorio disputado entre Turquía y el mandato francés de Siria. El diario de Henry proporcionaba instrucciones adicionales, que permitirían hallar la localización del Grial, de forma que Indiana envía a Marcus y a Kazim a Alejandreta mientras que él y Elsa parten a Brunwald para salvar a Henry. Mientras tanto, una vez en Alejandreta, Marcus, con el diario de Henry, se encuentra con Sallah, el cual intenta ayudarlo a ocultarse de una muchedumbre de gente, en la cual se hallan algunas personas trabajando para las tropas nazis que desean obtener información sobre el Grial.',
  },
  {
    title: 'Indiana Jones y la Calavera de Cristal',
    picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710449991/IndianaJones/Movies/indiana_jones_and_the_kingdom_of_the_crystal_skull_indiana_jones_4-2_kbdzeh.jpg',
    director: 'Steven Spielberg',
    year: 2008,
    duration: "123 min",
    country: "EEUU",
    genre: 'Aventuras',
    clasification: "PG13",
    books: "",
    characters: [],
    resume: 'En 1957, y en pleno desierto de Nevada, la doctora y coronel soviética Irina Spalko (Cate Blanchett) se dirige hacia el Área 51 junto a Indiana Jones (Harrison Ford), al que obligan a encontrar la tumba del extraterrestre caído en Roswell. Exactamente donde se encuentra almacenada el Arca de la Alianza (que es vista un breve momento cuando se rompe la caja que la contiene) está también la tumba que, efectivamente, contiene el cuerpo del alienígena. Indy intenta escapar, pero es traicionado por su antiguo amigo y compañero Mac (Ray Winstone) y debe huir en un turborreactor, que le lleva hasta un pequeño pueblo donde se están haciendo pruebas nucleares. Tras librarse de una de éstas, vuelve a la Universidad Marshall (New Haven (Connecticut)) y conoce al joven Mutt (Shia LaBeouf), quien le pide ayuda para encontrar a un antiguo amigo de Indiana llamado Harold Oxley (John Hurt), desaparecido en plena búsqueda del cráneo de cristal en Nazca (Perú).                                                                                                                                                                                                                                                                        Una vez allí, Indiana y Mutt descubren que Oxley había estado encerrado en un manicomio cierto tiempo. En el suelo de la habitación que él ha ocupado encuentran una serie de pistas que les llevan hasta la tumba del conquistador Francisco de Orellana, desaparecido en 1546 mientras buscaba El Dorado. Una vez encontrada la tumba, encuentran también un cráneo de cristal en ella. Y ellos son encontrados por los soviéticos, quienes secuestran a Indiana y a Mutt y les llevan hasta un campamento. Allí coinciden con otros rehenes: el antiguo amor de Indiana Jones, Marion Ravenwood (Karen Allen) y madre de Mutt, y Oxley. Los soviéticos les explican que creen que el cráneo tiene un origen extraterrestre y que posee poderes psíquicos muy útiles para ganar la Guerra Fría. Y Marion cuenta que el padre de Mutt es Indiana.Indy, Mutt, Marion y Oxley emprenden la huida del campamento para encontrar el Templo de El Dorado y devolver el cráneo a su correspondiente sitio. A pesar de haber escapado de sus captores, Mac continúa siguiendo a Indy y sus acompañantes. Con el fin de evitar enfrentarse solo, confiesa ser un agente doble, que trabaja contra los soviéticos haciéndose pasar por un aliado suyo. Lo anterior le permite ganar la confianza de Indy, quien finalmente accede a unirse con él. Al entrar en el templo, Jones utiliza el cráneo para abrir una puerta que conduce a una habitación maya, la cual contiene trece esqueletos de cristal. Sin embargo, uno de ellos no posee su respectivo cráneo.                                                                                                                                                                                                                                                                        Cuando los soviéticos llegan, Indy es acorralado por Mac (quien le confirma que le ha mentido), y la tropa soviética de Spalko. Tras arrebatarle el cráneo a Indy, Spalko procede a colocarlo en el esqueleto. Al hacerlo, este último comienza a hablar, a través de Oxley, utilizando un antiguo dialecto maya. Jones lo traduce en el sentido de que los extraterrestres quieren darles un gran obsequio. Emocionada al respecto, Spalko expresa su deseo de obtener todo el conocimiento de la humanidad, así que los cráneos comienzan a "disparar" el razonamiento por medio de sus ojos. En medio de la escena, aparece un portal a una dimensión paralela. Oxley, quien ha recuperado su cordura, explica que los extraterrestres son realmente seres inter-dimensionales que brindaron a los mayas su avanzada tecnología. Debido a lo peligrosa de la situación (sobre la base de la aparición del portal), Indy, Mutt, Marion y Oxley escapan del templo, mientras que Mac queda atrapado en el portal. Al final, los esqueletos forman un solo extraterrestre que traslada el conocimiento íntegro a la cabeza de Spalko, quien muere por la sobrecarga de información. Después de ello, el templo se derrumba y un OVNI emerge de los escombros desapareciendo en una explosión de luz. Cuando Indy pregunta si se fueron al espacio exterior, Oxley contesta que en realidad se fueron al espacio entre los espacios, afirmando que los extraterrestres, o al menos la raza con esqueletos de cristal (y en consecuencia los de Roswell), eran en realidad seres de otra dimensión. Al final, Jones vuelve a la Universidad Marshall, en donde recibe el nombramiento de Decano de la Facultad de Arqueología, y contrae matrimonio con Marion.',
  },
  {
    title: 'Indiana Jones y el Dial del Destino',
    picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710450047/IndianaJones/Movies/poster-final-de-indiana-jones-y-el-dial-del-destino-original_suqh3w.jpg',
    director: 'James Mangold',
    year: 2023,
    duration: "153 min",
    country: "EEUU",
    genre: 'Aventuras',
    clasification: "PG13",
    books: "",
    characters: [],
    resume: 'En 1944, durante la liberación aliada de Europa, Indiana Jones es capturado por los nazis en un castillo en los Alpes franceses mientras intenta recuperar un artefacto robado que supuestamente es la lanza de Longino. Al mismo tiempo, el astrofísico alemán Jürgen Voller informa a sus superiores que ha encontrado el dial del destino, una versión fantástica del mecanismo de Anticitera, el cual, según dice, fue inventado por el matemático griego Arquímedes y permite localizar fisuras en el tiempo. En el fragor de la lucha, Jones escapa y aborda un tren lleno de antigüedades saqueadas por los nazis. Después de determinar que la lanza es falsa, Jones se apodera del dial, hiere a Voller y escapa del tren antes de que descarrile. A Jones lo acompaña Basil Shaw, un arqueólogo de la Universidad de Oxford, quien se queda con el dial.En agosto de 1969, Jones es despertado en su apartamento de Manhattan por unos jóvenes vecinos que celebran el regreso de los astronautas del Apolo 11. Se revela que él y su esposa Marion Ravenwood ahora están divorciados. Jones va a su universidad, donde sus colegas lo reciben con una fiesta sorpresa de jubilación. Al abatido, Jones que se dirige a un bar cercano, se le une Helena "Wombat" Shaw, hija de Basil y ahijada de Jones, estudiante de arqueología y cazadora de tesoros. Jones le dice que el dial se dividió en dos y que Basil, ahora fallecido, estuvo al borde de la locura mientras intentaba desbloquear sus secretos, lo que obligó a Jones a tomar la custodia del artefacto y esconderlo. A la vez es escéptico sobre la capacidad del artefacto para predecir cambios en el espacio-tiempo.                                                                                                                                                                                                                                                              Recuperan la primera mitad del dial en un almacén de la universidad, donde son atacados por un grupo de matones que trabajan para Voller, ahora un científico de la NASA bajo el nombre de Dr. Schmidt, y Mason, una agente de la CIA. Estos matan a una secretaria y uno de los profesores. Simultáneamente, Jones y Helena concluyen que para encontrar la segunda mitad del artefacto deben hallar el graphikos, una tableta escrita en código por Arquímedes, que revela la ubicación del fragmento perdido. Helena añade que el texto debe encontrarse en un pecio romano hundido en el Egeo. Sin embargo, Helena traiciona a Indiana y se lleva el fragmento del dispositivo para venderlo.Perseguido por los matones de Voller, Jones huye mezclándose en el desfile que celebra a los astronautas del Apolo y finalmente escapa a caballo por el tren subterráneo de la ciudad de Nueva York. Como la policía considera a Jones sospechoso de asesinar a sus colegas, este se esconde con la ayuda de Sallah, quien ahora vive en Nueva York con su familia. Luego, decide seguir a Helena para recuperar el dial.Jones vuela a Tánger, donde Helena está subastando la parte del dial, y allí Jones conoce a Teddy Kumar, compañero de Helena, pero cuando quiere recuperar el artefacto, llegan Voller y sus matones. Tras una pelea, el trío escapa en un autorickshaw, perseguidos por un gangster marroquí. Voller, que se ha llevado el dial, es detenido por Mason y llevado a un helicóptero, donde le revela que el gobierno de los Estados Unidos le ha quitado el apoyo. Entonces, Voller y sus hombres secuestran el helicóptero, matan a Mason y deciden perseguir a Jones para encontrar el texto perdido de Arquímedes.                                                                                                                                                                                                                                                                  Jones convence a Helena de que no puede vender un artefacto tan valioso y potencialmente peligroso. El trío va a Grecia, donde conocen a Renaldo, un viejo amigo de Jones que es buzo de aguas profundas. Jones revela a Helena que él y Marion se separaron debido a la muerte de Mutt, su hijo, quien se unió al ejército y murió en la guerra de Vietnam. Debido a que Jones no pudo consolar a su afligida esposa y se centró obstinadamente en su trabajo en la universidad, ella lo dejó y solicitó el divorcio. Helena y Jones usan el barco de Renaldo para viajar a un lugar en el Mar Egeo donde recuperan el graphikos mientras luchan con anguilas que asustan a Jones porque se parecen a serpientes.Voller llega con sus matones, mata a Renaldo y obliga a Helena a descrifrar el graphikos. Sin embargo, el trío escapa y se revela que Helena engañó a Voller. Jones descifra el verdadero graphikos, donde se indica que el artefacto está ubicado en Siracusa, dentro de la tumba de Arquímedes. Finalmente llegan a Sicilia y descubren la parte restante del dial, pero Voller los ha seguido y les roba el mecanismo ahora completo. Voller aborda un avión con Jones y le revela su plan: viajar al pasado para matar a Adolf Hitler en 1939, proclamarse líder de Alemania y llevar al país a la victoria. Helena logra colarse a bordo del avión antes de que despegue, mientras Teddy los persigue desde otra aeronave.                                                                                                                                                                                                                                                                   Mientras se activa el dial, Jones revela que Voller cometió un error y no tuvo en cuenta la deriva continental; por ello en lugar de viajar a 1939, terminan en 212 a. C., durante el Sitio de Siracusa. Jones y Helena luchan contra los nazis mientras el avión sufre graves daños por las armas lanzadas por los soldados de la batalla, quienes creen que el avión es un grifo. Los dos escapan con un paracaídas antes de que el avión se estrelle, muriendo Voller y sus hombres. Al mismo tiempo aparece Teddy con su aeronave intacta.En ese momento aparece Arquímedes, Jones le dice a Helena que quiere pasar sus últimos días viviendo en el pasado, convirtiéndose en parte de la historia antigua. Ella, al darse cuenta de que esto podría impactar dramáticamente en eventos futuros, le ruega que aborde el avión de Teddy antes de que causen más daño al pasado. Finalmente, Helena noquea a Jones y regresan a 1969.Jones se despierta en su apartamento donde Helena lo saluda. A ellos se unen Sallah con sus nietos, Teddy y Marion, quien presumiblemente canceló sus planes de divorciarse de Jones. Todos se van, mientras Jones y su esposa se reconcilian y recuerdan los eventos de Raiders of the Lost Ark.',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allMoviesIndianaJones = await MovieIndianaJones.find();
    if (allMoviesIndianaJones.length > 0) {
      await MovieIndianaJones.collection.drop();
      console.log('Películas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Películas', err);
  })
  .then(async () => {
    const moviesIndianaJonesMap = arrayMoviesIndianaJones.map((movie) => new MovieIndianaJones(movie));
    await MovieIndianaJones.insertMany(moviesIndianaJonesMap);
    console.log('Películas insertados');
  })
  .catch((err) => {
    console.log('error insertando los Películas', err);
  })
  .finally(() => mongoose.disconnect());
