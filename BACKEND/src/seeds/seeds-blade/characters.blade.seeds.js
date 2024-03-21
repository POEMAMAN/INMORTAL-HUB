const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterBlade = require('../../api/models/models.Blade/characters.Blade.model');

const arrayCharactersBlade = [
  {
    name: 'Blade',
    acthor: 'Wesley Snipes',
    race: 'Vampiro Mestizo',
    movie: 'Blade 1998, Blade2 y Blade Trinity',
    resume: 'Eric Darren Brooks​ nació en un prostíbulo en el barrio de Soho de Londres, Inglaterra en 1929.​ Su madre, Tara Brooks, era una prostituta en el Burdel de Madame Vanity. Cuando su madre tuvo complicaciones graves de trabajo, un médico fue convocado, que era en realidad Deacon Frost, un vampiro quién se deleitó con ella durante el nacimiento de Eric y la mató. Sin embargo, esto pasó inadvertido a lo largo de ciertas enzimas en su propia sangre al bebé. Esto dio lugar a las habilidades vampíricas de Eric, incluyendo una útil vida muy prolongada y la capacidad de percibir criaturas sobrenaturales, así como una inmunidad para completar el vampirismo, lo cual lo asemeja a un dhampiro. Las compañeras prostitutas de Brooks se marcharon heladas antes de que pudieran matar al niño también. Eric creció viviendo en la casa de Madame Vanity, y a los nueve años, regresando a casa del colegio un mes de diciembre, vio a un anciano siendo atacado por tres vampiros. Eric ayudó al anciano, que utilizó un bastón de plata para matar a los vampiros y luchar contra los atacantes. El hombre era Jamal Afari, un trompetista de jazz y un cazador de vampiros que se trasladó a Madame Vanity para entrenar al joven Eric en el combate, y en la música. Eric pronto fue capaz de derrotar a muchos jóvenes y débiles vampiros que los dos encontraron en abundancia. Eric se convirtió en un atleta a nivel olímpico y un formidable combatiente mano a mano, con experiencia en armas de filo como cuchillos y dagas tan notable que le valió el sobrenombre de "Blade" tanto entre sus compañeros cazadores como entre los vampiros a los que se opusieron y que comenzaron a temer al joven cazador. Sin embargo, las victorias de Blade lo hicieron engreído. Se unió a una pandilla callejera, los Bloodshadows,​ dirigidos por un vampiro mucho más viejo y más poderoso de lo que Blade había visto, de nombre Lamia. Blade apenas derrotó a Lamia, y, al hacerlo, perdió a su novia Gloria. Sin embargo, la tragedia de la experiencia de Blade lo dejó más decidido que nunca a dedicar su vida a la exterminación total de los vampiros.Afari fue víctima de Drácula, la primera ocurrencia en una batalla en curso entre Drácula y Blade.​ Blade mató al vampiro Afari y siguió a Drácula de regreso a Europa y a Asia, enfrentándose a él muchas veces, pero nunca pudo destruirlo por completo.​ En China, Blade se unió a los cazadores de vampiros de Ogun Strong, que eran Azu, Orji, y Musenda. Juntos, enfrentaron a Drácula una vez más. Drácula sobrevivió, y mató a todos los cazadores, excepto a Blade y a Musenda (que finalmente se retiró de la caza de vampiros). Orji había creado una impresión duradera en Blade con el uso de dagas de madera para luchar contra los vampiros, que condujo a la adopción de Blade como sus armas preferidas. Consumido por el dolor de sus camaradas caídos, Blade reanudó su búsqueda solo. CONTINUA EN SEGUNDO ACTOR-->>',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710952669/segundo%20spring/BLADE/characters/wesleysnipes_uh2pyc.jpg',
  },
  {
    name: 'Blade',
    acthor: 'Sticky Fingaz',
    race: 'Vampiro Mestizo',
    movie: 'Blade, la serie',
    resume: 'Eventualmente, Blade encuentra a Drácula en París, donde se encontró por primera vez con el cazador de vampiros Quincy Harker (hijo de Jonathan Harker), a quien conocía por su reputación, y los cazadores de vampiros de Harker: Rachel Van Helsing (bisnieta de Abraham Van Helsing), Taj Nital y Frank Drake.​ Debido a su temperamento mercurial, Blade ha tenido una relación tensa pero estable con el grupo, aliándose con ellos varias veces. Más tarde, después de una batalla sin éxito con Drácula,​ Blade se dio cuenta de que era inmune a la mordedura de un vampiro.​ Armado con este conocimiento, se separó de Harker​ y fue tras Deacon Frost solo. Blade más tarde luchó contra Drácula en Londres,​ al igual que con Morbius​ y la Legión de los Muertos,​ que lo acusó de asesinato. Blade también mató a un grupo de niños vampiros.La caza de Blade por la muerte de su madre lo llevó a Boston, Massachusetts, donde se alió con Drácula contra el Doctor Sol.​ Después de la batalla, Drácula se retiró, y Blade se estableció de nuevo por su cuenta.​ Con el tiempo encontró a Hannibal King, un detective privado, que Deacon Frost lo convirtió en vampiro.​ Aunque en un principio desconfió de King, Blade se asoció con él para cazar a Frost. Blade y King lucharon juntos contra el doppelgänger malvado de Blade, que absorbió al Blade real. King consiguió la ayuda de Daimon Hellstorm, el llamado Hijo de Satán, que exorcizó al doppelgänger de Blade y lo mató con ayuda de King. Blade y King finalmente fueron atrapados por Frost, que había creado un ejército de doppelgängers vampiros, uno para cada uno de sus víctimas. Juntos, destruyeron a Frost para siempre y forjaron una amistad duradera.​ Más tarde, Blade, Rachel Van Helsing y Harold H. Harold confrontaron a Drácula. Blade también salvó a la esposa de Musenda de convertirse en vampiro.​ En años posteriores, Blade, junto con King y Drake, se convirtió en un frecuente aliado del hechicero Doctor Strange, y los tres ayudaron a Strange en batallas con Drácula y los Darkholders y ayudaron en el lanzamiento de la fórmula Montesi, que por un tiempo destruyó todo vampiros en la Tierra.​ Blade, King y Drake luego formaron la agencia de detectives privados, Borderline Investigations, Inc., para combatir las amenazas sobrenaturales. Junto a Doctor Strange, los tres detectives lucharon contra los Darkholders nuevamente.​ Blade también rescató a su amigo cercano Safron Caulder de los Darkholders.​ La agencia se suspendió después de que Drake se fue y Blade fue internado en un hospital psiquiátrico después de una batalla con un Drácula resucitado temporalmente. Más tarde, el Doctor Strange arregló el lanzamiento de Blade para poder unirse a Drake y King en la reforma de Borderline, Inc. como los Nightstalkers. Blade, King y Drake fueron contratados por la demoníaca Lilith para matar al segundo Ghost Rider y al John Blaze sin poderes. Los tres Nightstalkers lucharon contra Meatmarket.2 Los Nightstalkers luego se unieron con Ghost Rider, Blaze, Morbius, Doctor Strange y los Redentores del Darkhold para luchar contra Lilith y su Lilin.​ Los Nightstalkers también lucharon contra otras amenazas, como el DOA de HYDRA. Tras el eventual debilitamiento de la fórmula de Montesi, y el regreso de los vampiros, Blade se encontró con un antiguo aliado, un ahora vampírico Taj Nital, y sobrevivió a una batalla con el señor vampiro Varnae en la que Drake y King parecían haber sido asesinados. CONTINUA EN TERCER ACTOR -->>',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710952677/segundo%20spring/BLADE/characters/p186507_b_v8_aa_odpjdv.jpg',
  },
  {
    name: 'Blade',
    acthor: 'Mahershala Ali',
    race: 'Vampiro Mestizo',
    movie: 'Blade 2025',
    resume: 'Un cazador de vampiros en solitario una vez más, Blade unió fuerzas con la mística Biblia John Carik, y se encontró con un vampiro que se hace pasar por Deacon Frost y un Drácula resucitado una vez más. Más tarde, en Nueva Orleans, Luisiana, Blade descubrió que Hannibal King había sobrevivido, y los dos se unieron para derrotar a un Frost genuinamente resucitado. Blade permaneció activo en Nueva Orleans, derrotando al vampiro Ulysses Sojourner y su propio aliado anterior, Morbius, el Vampiro Viviente, que estaba bajo la esclavitud mental de Sojourner. Blade siguió a Morbius a Nueva York, donde, mientras formaba equipo con Spider-Man, Blade fue mordido por Morbius.​ Las enzimas sanguíneas de Blade reaccionaron inesperadamente con la forma única de vampirismo de Morbius para otorgarle a Blade muchas fortalezas de vampiro mientras eliminaba las debilidades inherentes a un vampiro, especialmente la debilidad a la luz del sol. Fue en este momento que Blade asumió el título no oficial de "Caminante Diurno" entre su presa. Las Naciones Unidas-sancionadas en la agencia de espionaje S.H.I.E.L.D. trató de utilizar la sangre de la lámina para el Proyecto: Silvereye, un intento de clonación operativos de vampiro. Blade y los gemelos cazadores de vampiros Mosha y Mikado cerraron el proyecto. Blade más tarde se unió a Noah Van Helsing, en realidad Noah Tremayne, el primo adoptado de Rachel Van Helsing, y varios cazadores de vampiros en todo el mundo para evitar que Drácula se convierta en un señor vampiro genuinamente divino. Blade luego regresó a Nueva Orleans. Blade reencontrando Drácula, y apareció para destruir totalmente el vampiro, una vez más, a bordo del Helicarrirer de S.H.I.E.L.D., Pericles V. Sin que Blade lo supiera, su rico padre, Lucas Cross, había sido el responsable de la resurrección más reciente de Drácula. Cross más tarde secuestró a Blade e intentó obligar a Blade a alimentarse de una niña virgen en un intento por cumplir una profecía. Blade escapó después de morderse la mano. Más tarde, Blade se alimentaría de una virgen después de morder a un malvado sacerdote vampiro, Draconis.​ A cambio de emprender una aventura de viaje en el tiempo para el supervillano Doctor Doom, Blade recibió de Doom un elixir que supuestamente curaría a un vampiro de sed de sangre humana pero también eliminaría la sed de sangre que los cazadores de vampiros reciben por matar a los no-muertos. Al final de la serie, Blade le dio a Hannibal King el elixir. Durante esta misión de viaje en el tiempo, Blade cumplió con otra parte de la profecía al liberar a su padre encarcelado.Durante la historia de Civil War, en la que los superhéroes del Universo Marvel se dividieron en la Ley de Registro sobrehumanos, Blade se registra y comienza a cooperar con S.H.I.E.L.D.​ Esta alianza permitió a Blade acceder a la tecnología de S.H.I.E.L.D., obteniendo una "mano armada" para reemplazar su perdido. Blade completa una profecía que cree que le daría a todos los vampiros existentes sus almas, pero que en su lugar devuelve a la existencia a todos los vampiros que alguna vez han sido asesinados.Blade dirige a continuación un grupo de agentes de operaciones ilegales sobrehumanas financiado en secreto por el gobierno de los EE. UU., llamado Vanguard,​ del que ni siquiera el presidente desconoce. Durante su tiempo con este escuadrón, Blade recibe una mano de reemplazo cibernético. El escuadrón se deshace después de que su cobertura se ve comprometida, y Blade regresa a casa en el Reino Unido para unirse al MI-13 en su lucha contra el mal sobrenatural.​ Poco después estaca su nueva compañera de equipo, la heroína vampira Spitfire.​ Blade y Spitfire se enfrentaron una y otra vez en una batalla feroz, pero los dos se vieron obligados a trabajar juntos y parecían haber formado una amistad poco probable. Al completar su primera misión juntos, Blade intenta disculparse con Spitfire por tratar de matarla, pero antes de que pudiera terminar, ella lo besa. Durante la historia de Curse of the Mutants, Blade aparece en San Francisco para ayudar a los X-Men a capturar un espécimen de vampiro para el X-Club. Él confirma la muerte de Drácula y revela que su hijo Xarus es el nuevo Señor de los Vampiros, ya que ha unido a todas las sectas vampíricas bajo una sola bandera. Inmediatamente se opone al plan de Cyclops de resucitar a Drácula diciendo "No desentierras a Hitler para deshacerse de Saddam Hussein".​ El conflicto concluyó con la resurrección de Drácula a pesar de las objeciones de Blade. Blade intenta matar a Júbilo ahora como vampira, pero se ve obligada a retirarse después de un enfrentamiento con Wolverine, que se niega a permitir que la apuesten, incluso cuando Blade advierte a los X-Men que eventualmente tendrán que matarla.Posteriormente se descubrió que Blade estaba usando la identidad de Ronin como parte del equipo de Poderosos Vengadores. Blade luego aparece en un pequeño pueblo persiguiendo a un nigromante y termina enfrentando a Gwenpool, quien fue contratada para matarlo. Después de que Gwenpool explica que los residentes muertos viven en paz, Blade se va después de darle el número de su teléfono celular, pero se lo devuelve cuando Gwenpool descubre que el alcalde / nigromante está realmente matando a niños para mantener con vida a sus ciudadanos muertos vivientes. Durante la historia del Imperio Secreto, se demostró que Blade quedó atrapado en Manhattan cuando fue aislada por una cúpula de Fuerza Oscura. Debido a los ataques de vampiros en el momento, Blade se aprovecha de esto matando a cada vampiro atacante para proteger a los humanos.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710952662/segundo%20spring/BLADE/characters/tw-35456_kvhcfs.jpg',
  },
  {
    name: 'Karen Jerson',
    acthor: 'NBushe Wright',
    race: 'Humana',
    movie: 'Blade 1998',
    resume: 'La Dra. Karen Jenson es una brillante hematologista, convirtiendo la noche en el hospital cuando Quinn, completamente quemado, es llevado por los paramédicos. Mientras intenta curarlo, Quinn despierta y muerde tanto a ella como a su colega Curtis Webb. En ese mismo momento, Blade llega para acabar con Quinn, quien logra escapar, y se supone que también debe matarla a ella, pero ella le recuerda a su madre, y él decide salvarla. Blade lleva a Karen a su base, donde Whistler se queja de su decisión. Cuando Karen despierta, Whistler le reconoce la existencia de los vampiros y su misión como cazadores de vampiros, contándole también sobre el pasado de Blade. Karen decide regresar a casa, y Whistler le da un spray cargado con ajo y polvo de plata. Blade la advierte que también se convertirá en vampiro, y ella decide iniciar una investigación sobre una posible cura. Una vez en casa, Karen es atacada por el Oficial Krieger, uno de los familiares de Deacon Frost. Es salvada por Blade, y se queja de ser usada como cebo. Decide estar al lado de Blade, tanto por seguridad personal como para superar la situación, y los dos siguen a Krieger a un club de Frost. Aquí descubren el plan de Deacon sobre La Magra, el Dios Vampiro, y enfrentan al obeso vampiro Pearl. Karen, asqueada por el vampiro, lo mata con una antorcha UVA después de que les ha dado toda la información que necesitaban. Blade y Karen son luego atacados por Mercury, una de las amantes y generales de Frost, y sus secuaces, pero logran escapar gracias a la llegada de Whistler. Una vez en la base, Karen, partiendo de su propia sangre corrompida, encuentra una cura, e se inyecta con ella, curándose de la infección. Poco después, Deacon Frost mismo ataca la base y la secuestra, después de torturar a Whistler. Ella es usada por Frost como cebo para Blade, quien ve una cinta de video en la que ella pide ayuda.En la base de Frost, Karen se burla de él sobre sus orígenes humanos, y le habla sobre sus descubrimientos sobre la transformación vampírica, que es causada por algo similar a un virus. También le habla sobre la cura que encontró, afirmando que no le importa si él la muerde, ya que puede curarse a sí misma.Cuando Blade es capturado, Karen es llevada al templo de La Magra y arrojada a un pozo, donde encuentra a Curtis Webb, quien se ha convertido en un ghoul. Lucha contra él y logra escapar usando los huesos humanos que encuentra en el fondo del pozo. Va a Blade y lo libera del cuchillo de hierro en el que estaba atrapado, pero es atacada por Vanessa. Después de que Blade mata al vampiro, Karen le ofrece su sangre para que recupere sus fuerzas y pueda luchar contra Frost. Blade casi la drena de su sangre pero se detiene a tiempo. Durante la pelea, Karen es atacada por Mercury, pero logra matarla con el spray de Whistler.Después de la muerte de Frost, cuando todo ha terminado, Karen le ofrece su cura a Blade, pero él la rechaza, queriendo preservar sus poderes para seguir luchando contra los vampiros.',
    picture:'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710953348/segundo%20spring/BLADE/characters/Karen_Jenson_e8iptc.webp',
  },
  {
    name: 'Abraham Whistler',
    acthor: 'Kris Kristofferson',
    race: 'Humano',
    movie: 'Blade 1998 y Blade la SErie',
    resume: 'Abraham Whistler es un cazador de vampiros y el mentor de Blade. Abraham Whistler fue una vez un hombre felizmente casado, con dos hijas y una bella esposa. Vivía una vida normal y su familia vivía cómodamente, pero todo eso cambió una noche cuando llegó un vagabundo que buscaba cenar y descansar un rato antes de continuar su camino. Whistler dejó entrar al hombre, solo para lamentar esa decisión por el resto de su vida. El vagabundo era un vampiro, y sádico en eso. Después de torturar a la familia, principalmente a Whistler, durante un tiempo, intentó obligar a Whistler a decidir en qué orden moriría su familia. Whistler se negó, luchando por evitar que el vampiro matara a su esposa e hijas. No pudo, y unas pocas horas antes del amanecer, el vampiro lo dejó con una pierna dañada, otras heridas y los cuerpos vacíos de su familia. Whistler se dedicó a cazar vampiros, aprender sobre sus costumbres y sus costumbres y aislarse del mundo. Unos años después de la muerte de su familia, fue a un bar, se emborrachó y terminó durmiendo con uno de los lugareños. A la mañana siguiente, él le explicó que estaba huido de una organización poderosa y que correría peligro si descubrían que había estado involucrada con él. Él la dejó con un nombre y tomó su número y dirección, solo en caso de que él necesitara ponerse en contacto con ella si sucediera algo. El espectáculo de una noche tuvo una gran consecuencia: una hija, a quien Whistler conoció poco después de su nacimiento. Casi se asustó, obligando a su amante e hija de una sola vez a mudarse a otra parte y cambiar sus nombres. Estaba decidido a no perder esta nueva familia para los vampiros. Ciertos estaban a salvo, Whistler luego los dejó a su suerte por sí mismos después de darles una cantidad sustancial de dinero que había ganado robando a los vampiros y sus familiares. Revisó su nueva familia tan a menudo, pero los mantuvo en gran parte ignorantes. Varios años después, Whistler se encontró con un niño al que casi confundió con un vampiro: Eric Brooks, un milagro mitad vampiro y mitad humano. Llevó al Caminante Diurno, enseñándole a usar sus poderes y fue capaz de crear un suero para saciar la sed de sangre que Eric sufrió. Los dos se convirtieron en un equipo, Eric tomando el nombre de Blade, y desde entonces se han mantenido juntos y lucharon contra los vampiros como socios. Sin embargo, en los últimos años, a Whistler le diagnosticaron cáncer de pulmón al fumar, y se dio cuenta de que sin él, Blade estaría solo. Determinado Blade no tendría que pelear la guerra por sí mismo, Whistler secretamente comenzó a formar un equipo de cazadores de vampiros. Por la misma época, apareció Abigail Whistler, que había rastreado a su padre, determinada a saber quién la había dejado sola a ella y a su madre, mientras de vez en cuando los apoyaba. Whistler le dijo a regañadientes todo, solo para tener una niña aún más determinada en sus manos, una que quería seguir sus pasos. Al ver que era inútil convencerla de lo contrario, la incorporó al equipo, agradecida de que al menos tendría a otros con ella y él podría controlarla. Más tarde, Whistler casi fue golpeado hasta la muerte por los matones de Deacon Frost y se pegó un tiro en un intento de evitar resucitar como un vampiro. Sin embargo, su suicidio fue en vano. Regresó, solo para ser secuestrado por los vampiros que trabajaban para Eli Damaskinos, quien vio a Whistler como una gran ventaja sobre el Caminante Diurno y alguien que podría ser útil. Mantenido como prisionero y torturado regularmente, Whistler finalmente fue salvado por Blade y se le dio una cura para el vampirismo. Whistler no estaba contento con la alianza temporal entre Blade y los vampiros, y sintió algo entre Blade y Nyssa. También le molestaba Scud, pero se unió al plan de Blade.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710953359/segundo%20spring/BLADE/characters/MV5BMTk2MDUyMzc3NV5BMl5BanBnXkFtZTYwMDkzMjk2._V1__ud92p8.jpg',
  },
  {
    name: 'Deacon Frost',
    acthor: 'Stephen Dorff.',
    race: 'Vampiro',
    movie: 'Blade 1998',
    resume: 'Deacon Frost supuestamente era un científico que buscaba la clave de la inmortalidad. Para uno de sus experimentos, secuestró a una mujer joven para inyectarle a su víctima la sangre de un vampiro recientemente asesinado. El novio de la chica irrumpió en el laboratorio y (en la pelea resultante) Frost fue accidentalmente inyectado con la sangre él mismo. El resultado fue que Frost se convirtió en vampiro pero (debido al método inusual de convertirse en uno) fue dotado de una característica única. Cualquiera que convirtiera en un vampiro generaría un doppelgänger. Podría crear un número ilimitado de doppelgängers mordiendo cada doppelgänger, y todos estarían bajo su control mental. Frost intentó usar esta habilidad para luchar por el puesto de Señor de los Vampiros, una posición que actualmente ocupaba Drácula. Frost es el vampiro responsable de la muerte de la madre de Blade; La misión inicial de Blade es vengarse del asesino de la mujer. También fue Frost quien convirtió a Hannibal King en un vampiro. Blade y King (aunque inicialmente desconfiaban entre sí) eventualmente se unieron para luchar contra el ejército de doppelgangers de Blade y King de Frost. Los dos lograron derrotar y aparentemente destruir a Frost en su escondite subterráneo, apuñalándolo dos veces y dejando que su cuerpo fuera consumido mientras su escondite explotaba.Muchos años después, Blade se encontró con un vampiro que se hacía llamar Deacon Frost. Este vampiro tenía una apariencia y personalidad diferentes al original, y más tarde se identificó como un doppelgänger. El doppelgänger intentó convocar a un poderoso demonio, solo para ser devorado por dicha criatura. En una historia posterior de un solo tramo ambientada en Nueva Orleans, Frost se encontró una vez más, pero apareció como lo hizo en La Tumba de Drácula. También confirmó que el encuentro anterior fue de hecho un impostor (como sospechaba Blade) que fue creado usando la ciencia y la magia. Blade y King, con la ayuda del Hermano Voodoo, frustraron el intento de Frost de obtener el control de Industrias Garwood a través de Donna Garth (hija de Simon Garth, el Zombi Viviente). Frost escapó de este encuentro jurando venganza. Más recientemente, Frost apareció en la convocatoria de Drácula para defender al Señor de los Vampiros mientras se sometía a un ritual mágico, solo para ser apostado por Blade. Deacon Frost, al igual que el resto de vampiros, tiene una fuerza incrementada que en su caso le permite levantar un máximo de 675 kilogramos de peso. Tiene los poderes estándar de un vampiro, incluida la capacidad de cambiar su apariencia, la resistencia a las heridas convencionales y la fuerza sobrehumana. Frost también era capaz de crear duplicados vampíricos de sus víctimas con su mordisco, que estaban bajo su control mental absoluto. Incluso dichos duplicados, a su vez, producían réplicas de sí mismos si eran mordidos por Frost nuevamente. Al final, estos seres pudieron absorber a la víctima original en su propio cuerpo. Amplios conocimientos de medicina, física y química. Como el resto de los vampiros, Deacon Frost necesitaba beber sangre asiduamente para sobrevivir, no podía exponerse a la luz del sol sin quemarse, y se dañaba si estaba expuesto a crucifijos o cualquier otro símbolo religioso blandido por alguien con una fe profunda. Además, para acabar con su no vida, deberá perforar su corazón con una estaca de madera. Al final no proyecta ningún reflejo.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710953341/segundo%20spring/BLADE/characters/DeaconFrost-Blade_je0wgs.webp',
  },
  {
    name: 'Eli Damaskinos',
    acthor: 'Thomas Kretschmann',
    race: 'Vampiro',
    movie: 'Blade II',
    resume: 'Damaskinos es un antiguo vampiro de pura sangre de ascendencia griega, y líder del Gabinete de las Sombras en Praga. Tiene milenios de edad y afirma haber engendrado a miles de hijos, entre ellos Nyssa y Jared Nomak. La frágil postura de Eli puede o no ser un signo de sus frágiles facultades físicas. No mostró ninguna proeza de súper fuerza o velocidad, incluso se le vio cojeando mientras huía hacia un helicóptero. Es posible que su avanzada edad le haya privado de su fuerza de la misma manera que un anciano humano pierde gran parte de sus facultades corporales al llegar a sus últimos años.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710953527/segundo%20spring/BLADE/characters/Damaskin_uww1b0.webp',
  },
  {
    name: 'Abigail Whistler',
    acthor: 'Jessica Biel',
    race: 'Humana',
    movie: 'Blade Trinity',
    resume: 'Abigail Whistler es la hija ilegítima de Abraham Whistler. Conoce la existencia de los Vampiros desde su infancia. Abigail se convirtió en miembro de los Nightstalkers liderados por Hannibal King, un ex-vampiro que buscaba venganza.Cuando su padre murió y Blade fue arrestado por la FBI, Abigail y Hannibal acudieron al rescate y pidieron a Blade que se uniera a su equipo. Los Nightstalkers sabían de la resurrección de Drácula y querían que Blade les ayudara a destruirlo. Mientras Blade y Abigail estaban fuera, el resto del equipo fue asesinado por Drácula, que había tomado la forma de Abraham Whistler y también secuestró a Zoe Sommerfield. Hannibal King, que había sido herido debido a una pelea anterior con Drácula, fue llevado por los Vampiros para ser torturado. Blade y Abigail atacaron la Casa de Talos, liberaron a Hannibal King y lucharon con todos los Vampiros y los Familiares. Abigail mató a Asher Talos empalándolo con una flecha y luego se unió a Blade para ayudarle en su lucha contra Drácula. Abigail intentó matar a Drácula con una flecha cargada con el Virus Daystar, pero sus reflejos eran demasiado rápidos y falló. Blade, casi derrotado, agarró la flecha de Abigail y apuñaló a Drácula con ella, liberando el Virus Daystar y matando a todos los vampiros de la zona, Drácula incluido.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710953898/segundo%20spring/BLADE/characters/1eaaaed272a01a73ac2a50b559bc592b_kvf6lq.jpg',
  },
  {
    name: 'Hannibal King',
    acthor: 'Ryan Reynolds',
    race: 'Humano',
    movie: 'Blade Trinity',
    resume: 'Hannibal King fue mordido por Danica Talos  quien lo transformo en su "pequeño esclavo sexual" hasta que los Nightstalkers.Desde que fue sanado se convirtio en un miembro del equipo,teniendo como objetivo personal  la muerte de Danica Talos. Cuando Blade fue arrestad por el FBI, King junto con Abigail Whistler llegaron a rescatar a Blade, matando a una buena cantidad de Vampires. En la base de los Nightstalkers King le conto a Blade el plan de House of Talos de revivir al primer Vampire de la historia. Blade acepta y el con el Nightstalkers  se preparan para matar a Dracula. Blade, King y Abigail llegan a la oficina del Doctor Vance y encuentran a este asesinado por Dracula. King trata de atacar a Dracula  pero este hiere en el pecho a King, Blade persigue a Dracula mientras que Abigail trata las heridas de King. En la base, King descansa en una cama, mientras que Blade y Abigail salen a cazar. King se asusta de ver a Abraham Whistler, ya que este habia muerto, King no sabe que Dracula se disfrazo de Whistler. Dracula secuestra a King y en la base de House of Talos y se despierta al ver a un perro Reaper, Asher Talos le explica que el perro fue creado por experimentos con el gen Vampire y que el nombre del perro es Pac-Man. Danica Talos amenaza a King que si no le dice que tienen entre manos  Blade y el Nightstalkers, lo mordería y traería a Zoe para que se alimente.Blade y Abigail llegan a rescatar a King y Abigail le trae sus armas ,King se encuentra con Pac-Man y otros dos perros Reapers ,King los engaña y logra que se tiren de una ventana  y caigan de un piso muy alto.Jarko Grimwood se encuentra con King y le pregunta sobre Pac-Man ,King le responde si ya lo busco en el Lobby y Jargo comienza a golpearlo.King lucha contra Jargo y este vence a King y intenta morderlo ,pero King le pone en la boca una bala de plata en la boca y golpea a Jargo  provocando que la bala explote y mate a Jargo.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710953905/segundo%20spring/BLADE/characters/38d75dfe5755df292e42cd0a5533218f_mzfbcg.jpg',
  },
  {
    name: 'Danica Talos',
    acthor: 'Parker Posey',
    race: 'Vampiro',
    movie: 'Blade Trinity',
    resume: 'Danica es el líder de la Cámara de Talos, un poderoso vampiro que la familia se ha vuelto central en el mundo de los vampiros después de la caída de la Cámara de Damaskinos . Preocupado por la amenaza de la hoja representa para su carrera, Danica y sus secuaces ir a Siria, donde se encuentra la tumba de Drácula , el vampiro primera y más poderosa. Le despierta y llevarlo a cabo Talos ", pidiéndole ayuda en el asesinato de Blade.Mientras tanto, Blade ha sido capturado por el FBI y el jefe de policía Martin Vreede está listo para darle a Danica. Cuando ella llega a tomar el Daywalker con ella, los Nightstalkers intervenir y salvarlo, matando a muchos vampiros en el proceso.Habiendo recuperado su fuerza, Drake acepta la propuesta de Danica y comienza una cacería de Blade, diezmando los Nightstalkers y la captura de Hannibal King . Danica, su hermano y Grimwood Jarko le interogate sobre la Daystar, un arma biológica desarrollada por Sommerfield , un Nightstalker fallecido. El rey no da ninguna información sobre él, y justo cuando está a punto de ser mordido de nuevo por Danica, quien fue su amante cuando él era un vampiro, Blade y Whistler Abigail llegar y comenzar un ataque a la base. Durante la batalla, Danica combate Hannibal King y logra derrotarlo, pero cuando ella le calce, el Virus Daystar es liberado y se envenenó, y finalmente asesinados, por el mismo. Su cuerpo es convertido en cenizas por la luz del sol cuando llega el alba.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710954672/segundo%20spring/BLADE/characters/1118full-blade_-trinity-screenshot_blfaea.jpg',
  },
  {
    name: 'Dracula',
    acthor: 'Dominic Purcell ',
    race: 'Vampiro',
    movie: 'Blade Trinity',
    resume: 'Drake, también conocido como Drácula y como Dagon, era el patriarca de la Vampire carrera y era un enemigo de Blade. Dracula nace como un demonio, el vampiro primogénito. Era el terror de la humanidad en los primeros momentos de la historia de la humanidad, la difusión de su sangre maldita de todo el mundo. De repente, durante el imperio babilonios, él estaba tan disgustado del mundo que él mismo enterrado en una tumba real, y desapareció durante siglos. La búsqueda de ayuda en su lucha con la cuchilla , hermanos Danica y Talos Asher encontrar la tumba de Drácula en Siria, y el despertar de él. Después de docenas de consumo de los seres humanos con el fin de recuperar su fuerza y ​​poder, Drácula, ahora bajo el nombre de "Drake", es informado por Danica sobre la situación de la especie y el vampiro Blade, y, disgustado por su debilidad, acepta dar caza a y matar al Daywalker. Drake, inmune a los efectos de la luz del sol, sale de la base Talos "y ve todos los cambios que el mundo ha pasado por miles de años en el que estaba dormido. Burlado y humillado accidentalmente por dos dueños de la tienda, que tratan de venderle un vibrador con forma de Drácula, Drake mata a los dos, y luego se dirige a la oficina de Edgar Vance. Una vez allí, Drake mata el familiar y espera para la llegada de la hoja con la forma de la psiquiatra. El cazador llega junto con Abigail Whistler y Hannibal King . Después de descubrir el cadáver de Vance, el trío ataca a Drake, pero fácilmente incapacita Rey por apuñalar a su hombro. Mientras que Abigail se encarga de Hannibal, Blade sigue Drake que está escapando en los tejados. Drake dice que siente afinidad Hoja con él, ya que ambos son "guerreros honorables", y lo reta a un duelo regular. Después de hacer una distracción con un bebé que mantuvo como rehenes, Drake huye.Algunos días más tarde, cuando la hoja y Abigail salen a cazar, Drake llega a la Nightstalkers base con forma de Abraham Whistler . De aquí, que mata a todos los Nightstalkers, con las únicas excepciones de Hannibal King, que se lleva a Danica para un interrogatorio, y Zoe , hija de Sommerfield hija pequeño, que Drake quiere converte a causa vampiro. Zoe se niega Drake ofertas de la inmortalidad y la eterna juventud, llegando a la amenaza del maestro vampiro.Cuando la hoja llega al lugar Talos ", Drake le está esperando. Los dos involucrar a una pelea de espadas, durante los cuales resultan ser iguales. Disfrutar de la lucha, Drake asume su forma real, un demonio gigantesco cuyos poderes son muy superiores a Blade. Un momento antes de que termine Blade, Abigail trata de matar a Drake con una flecha cargada con el Virus de Daystar, un arma biológica creada para matar a todos los vampiros una vez mezclado con la sangre de Drake. Reflejos de Drake son demasiado afilado, y él coge la flecha en el aire, rugiendo a la chica y lo deja caer en el suelo. Hoja entiende la oportunidad, coge la flecha y el flanco puñaladas de Drake con ella, liberando así la Daystar que mata a todos los vampiros cercanos. Antes de la muerte, Drake alaba a su enemigo por sus habilidades y su honor, diciéndole que, siempre y cuando la hoja está vivo, no hay futuro para la raza de los vampiros. A continuación, concede la hoja con un "regalo de despedida".Cuando los agentes del FBI Ray Cumberland y Hale Wilson llegan, encuentran el cadáver de Blade y llevarlo a la morgue. Ellos pronto descubren que el cuerpo es en realidad uno de Drake, que transformó de manera que la hoja tuviera tiempo de escapar, lo que hace un elogio final a su enemigo.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710963190/segundo%20spring/BLADE/BACKGROUND/Dracula-aka-Drake-in-Blade-Trinity_gvxoc4.avif',
  },
  {
    name: 'Jared Nomak',
    acthor: 'Luke Goss',
    race: 'Segador',
    movie: 'Blade II',
    resume: 'Jared Nomak es el primero de los Segadores, una raza de vampiros especial creada como una evolución de los vampiros normales.Jared Nomak es la portadora original de la llamada "Reaper" virus, que, de acuerdo con Asad, es una mutación del vampiro original y es por lo tanto una amenaza para la raza vampiro. Tras un odio hacia los vampiros, Nomak se vio por primera vez en Rusia fuera de un banco de sangre de hablar con otra persona esperando para donar sangre y se les paga. Una vez en el banco de sangre, Nomak se le hace una serie de preguntas relacionadas con su historia y la cicatriz en la barbilla. Nomak finalmente es atado a una silla para que su sangre recolectadas por un grupo de vampiros se hacen pasar por un banco de sangre, pero estalla, mata y drena todos en la sala, y se escapa. Estamos próximos a ver Nomak en el club de vampiros popular "The House of Pain" en el que primeras peleas con Blade y dice que la popular línea "¿El enemigo de mi enemigo mi amigo o mi enemigo" antes de que la hoja se da cuenta de la aversión a la luz ultravoilet Reapers, y se escapa.Finalmente Nomak es la única izquierda Reaper, y, en un breve encuentro en las alcantarillas, revela la conspiración Whistler rodea la cepa Reaper, y es verdadera creación. Rompe Nomak en Eli Damaskinos fortaleza después de Whistler dice todo a la hoja sobre Nomak ser el hijo de Eli Damaskinos y genéticamente creado con la intención de crear un vampiro "raza superior", y Nomak mata Damaskinos e infecta Nisa antes de volver a pelear con Blade. Él es derrotado cuando la cuchilla lo apuñala en el corazón con la espada. Con la muerte se acerca, Nomak siente aliviado de su dolor de la existencia y empuja la hoja más en su corazón, matándolo instantáneamente.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710954131/segundo%20spring/BLADE/characters/favourite-custom-to-date-jared-nomak-v0-ck12z8s487i91_pmnxpv.webp',
  },
  {
    name: 'Nyssa Damaskinos',
    acthor: 'Leonor Varela',
    race: 'Vampiro',
    movie: 'Blade II',
    resume: 'Nyssa era una Vampire  de sangre pura que vivia en Praga  a principios del siglo 21 .Ella era hija de el vampire supremo  Eli Damaskinos y hermana de Jared Nomak .En 2002 ella y Asad solicitaron la ayuda de su peor enemigo Blade ,con el fin de detener a una peligrosa raza de vampires llamada Segadores .Nyssa estaba con un equipo llamado Bloodpack. Ella y el resto del equipo fueron a Casa del Dolor ,un club nocturno para vampires .Despues de la mision en la Casa del dolor ,donde Lighthammer resulto infectado por un Segador ,y donde Priest fue infectado y hubo que matarlo .Mas tarde ella descubrio que su hermano Nomak era el iniciador de la epidemia Segadora .En la mision de las alcantarillas ,ella resulto muy herida ,pero Blade la salvo .Despues de que todo el Bloodpack ,excepto Blade ,muriera todo el equipo .Nyssa fue mordida por su hermano .Blade lucha contra Nomak pero no lo mata y Nomak con una espada clavada en su pecho ,producto de la batalla con Blade .Nomak se hunde el mismo la espada dando un horrible grito y muriendo instantaneamente .Nyssa le pidio a Blade que queria morir siendo vampira y que su ultimo deseo era ver el sol .Blade le cumple el deseo ,ambos ven el amancer y Nyssa se hace cenizas en los brazos de Blade .',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710954850/segundo%20spring/BLADE/characters/Nyssa-Damaskinos-in-Blade-II1_j62pnf.avif',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharactersBlade = await CharacterBlade.find();
    if (allCharactersBlade.length > 0) {
      await CharacterBlade.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersBladeMap = arrayCharactersBlade.map(
      (character) => new CharacterBlade(character)
    );
    await CharacterBlade.insertMany(charactersBladeMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());