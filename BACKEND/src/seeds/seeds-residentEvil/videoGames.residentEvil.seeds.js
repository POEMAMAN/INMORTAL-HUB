const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const VideoGameresidentEvil = require('../../api/models/models.residentEvil/videoGames.residentEvil.model');


const arrayVideoGamesresidentEvil = [{
        title: "Resident Evil Zero",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711712182/segundo%20spring/residentevil/videogames/juego_0_jmx3mb.jpg",
        platform: "GameCube",
        year: 2002,
        studio: "Capcom",
        classification: "Mature",
        resume: "Resident Evil 0, también nombrado Resident Evil Ø de forma estilizada, cuyo título original en Japón es Biohazard Ø (バイオハザードØ Baiohazādo Ø?), o también conocido como Resident Evil Zero, es un videojuego del género survival horror que fue desarrollado y publicado por Capcom para la Nintendo GameCube el 12 de noviembre de 2002 inicialmente como un título exclusivo de la consola y años más tarde siendo lanzado para la Nintendo Wii en 2008. También existe una versión remasterizada llamada Resident Evil 0 HD Remaster lanzada el 2016 para las consolas y ordenadores de séptima generación. La historia del juego es una precuela del primer Resident Evil, y narra las aventuras de Rebecca Chambers, un día antes del incidente en las instalaciones del laboratorio Arklay. En un principio, Resident Evil 0 se encontraba en desarrollo para la Nintendo 64, a raíz del éxito en el sistema de la conversión tardía (lanzada en octubre de 1999) de Resident Evil 2, con mejora poligonal en los modelos de personajes, fondos en alta resolución y herramientas especiales para la inclusión de los vídeos que habían aparecido en la versión de PlayStation. El equipo de desarrollo Angel Studios consiguió mejorar el juego original de PlayStation (excepto en el sonido y la calidad de los vídeos, los cuales resultaron empobrecidos muy ligeramente) con un cartucho de 64MB (512 megabits), es decir, menos de un 10% de lo que ocupaba en el sistema original. Se supone que la idea de rentabilizar las herramientas en las que Capcom había invertido fue otro de los puntos fuertes a tener en cuenta para el desarrollo de Resident Evil 0, incluso se llegaron a mostrar vídeos e imágenes del inicio del juego en N64 en Estados Unidos y se pretendía lanzarlo hacia el año 2000. No obstante, al igual que otros títulos para la consola de 64 bits, el proyecto original se pasó a GameCube, con mayores capacidades técnicas, consiguiendo un nivel gráfico y sonoro fuera del alcance de su predecesora. El juego, programado por Flagship, equipo de Capcom del que Nintendo cuenta con participaciones, se lanzó finalmente a finales de 2002. Aunque Capcom se quejó en el momento de las ventas de Resident Evil y Resident Evil 0 en Nintendo GameCube, lo cierto es que ambos juegos han superado el millón y medio de unidades vendidas, a diferencia de las entregas aparecidas en la misma generación en consolas como Sega Dreamcast o Sony PlayStation 2.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711796232/segundo%20spring/residentevil/trailers/videoGames/Resident_Evil_Zero_HD_Remaster_-_First_trailer_Espa%C3%B1ol_1080p_30fps_H264-128kbit_AAC_t4q2co.mp4"
    },
    {
        title: "Resident Evil",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711712186/segundo%20spring/residentevil/videogames/juego_1_z0uoro.webp",
        platform: "PlayStation",
        year: 1996,
        studio: "Capcom",
        classification: "Mature",
        resume: "Resident Evil —cuyo título original en Japón es Biohazard (バイオハザード Baiohazādo?, «Peligro biológico»)— es un videojuego de terror del subgénero horror de supervivencia desarrollado y publicado por Capcom, originalmente para PlayStation en 1996, y es el primer juego de la serie Resident Evil. La trama del juego sigue a Chris Redfield y Jill Valentine, miembros de una fuerza de élite conocida como S.T.A.R.S., mientras investigan las afueras de Raccoon City tras la desaparición de los miembros de su equipo. Pronto quedan atrapados en una mansión infestada de zombis y diferentes tipos de monstruos. Dentro del juego, El jugador, después de haber elegido jugar como Chris o Jill, debe explorar la mansión para descubrir sus secretos. Concebido originalmente por el productor Tokuro Fujiwara como una nueva versión de su anterior juego de terror, llamado Sweet Home (1989), el desarrollo de Resident Evil fue dirigido por Shinji Mikami. Pasó por varios rediseños, inicialmente fue pensado como un juego para la consola Super Nintendo en 1993, luego como un juego en primera persona totalmente en 3D para PlayStation en 1994 y finalmente como un juego en tercera persona con fondos prerrenderizados. El juego consiste en gran medida en acción en tercera persona con énfasis adicional en gestión de inventario, exploración y resolución de acertijos. Resident Evil estableció muchos elementos que se verían más adelante en la serie, incluido el esquema de control de tanque, el sistema de inventario y de guardado y el uso de modelos 3D sobrepuestos sobre fondos prerrenderizados. El juego fue muy bien recibido crítica y comercialmente, y a menudo se le atribuye el concepto del género survival horror. Fuera de los videojuegos, Resident Evil también ha sido destacado por traer de vuelta la popularización de los zombis en la cultura popular de finales de la década de 1990 en adelante (junto con The House of the Dead), lo que generó un renovado interés en las películas de zombis durante la década de 2000. El juego ha sido aclamado como uno de los mejores videojuegos de todos los tiempos. Su éxito ha generado una franquicia multimedia que incluye videojuegos, películas, cómics, novelas y otros productos. El juego ha recibido adaptaciones a Sega Saturn, Microsoft Windows y Nintendo DS. En 2002, se lanzó un remake del mismo nombre para Nintendo GameCube con gráficos y sonido totalmente renovados e importantes cambios en el juego y la historia, el cual fue aclamado tanto por la crítica como por los jugadores. Una secuela, Resident Evil 2, se lanzó en 1998, y una precuela, Resident Evil Zero, en 2002.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711796159/segundo%20spring/residentevil/trailers/videoGames/Resident_Evil_HD_REmaster_Tr%C3%A1iler_oficial_720p_30fps_H264-192kbit_AAC_vttqvz.mp4"

    },
    {
        title: "Resident Evil 2",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711712190/segundo%20spring/residentevil/videogames/juego_2_t0ozpb.jpg",
        platform: "PlayStation",
        year: 1998,
        studio: "Capcom",
        classification: "Mature",
        resume: "La trama tiene lugar dos meses después de los acontecimientos del primer juego. Transcurre en Raccoon City, una ciudad estadounidense cuya población en su mayoría ha sido transformada en zombi por el virus-T, un arma biológica desarrollada por la compañía Umbrella. Mientras huyen de la ciudad, el oficial Leon S. Kennedy y la estudiante universitaria Claire Redfield se conocen y unen a otros supervivientes, y descubren que Umbrella trata de apoderarse de una muestra del nuevo virus para continuar con sus experimentos biológicos en seres humanos. Desarrollado por un equipo de aproximadamente cincuenta personas en un año y nueve meses, Resident Evil 2 fue dirigido por Hideki Kamiya y producido por Shinji Mikami. Tuvo una versión previa llamada Resident Evil 1.5, descartada cuando su desarrollo rondaba entre 60-80 % porque su productor la consideró «sosa y aburrida». La versión definitiva contó con escenarios diferentes y una presentación de la historia más cinematográfica, apoyada por una banda sonora que emplea distintos motivos y composiciones orquestales. El sistema de juego de Resident Evil 2 está centrado en la exploración de los escenarios, la resolución de acertijos y el combate. La principal novedad respecto a su predecesor es el Zapping System, el cual permite jugar distintos acertijos e historias dependiendo del personaje que se elija al comenzar la partida, agregando rejugabilidad. Tras su estreno, la mayoría de los críticos elogió el ambiente, los gráficos y el audio del juego, aunque también hubo comentarios desfavorables respecto a sus controles, la actuación de voz y algunos elementos de su sistema de juego. Desde su publicación se han vendido más de seis millones de copias del juego en todo el mundo, y es el título más exitoso de la serie sin tener en cuenta los relanzamientos en otras consolas Una década después de su primer lanzamiento, fue incluido en cinco listas de los «mejores juegos de la historia». Su éxito llevó a la producción de diferentes adaptaciones para otras plataformas de juego como PC, Nintendo 64, Dreamcast y Nintendo GameCube, así como de cómics, álbumes de teatro y radioteatros que continuaron la trama original. En agosto de 2015 Capcom anunció la producción de una nueva adaptación de Resident Evil 2 para las videoconsolas de octava generación que fue publicado en enero de 2019 para PC, PlayStation 4 y Xbox One.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711796089/segundo%20spring/residentevil/trailers/videoGames/Resident_Evil_2_-_Tr%C3%A1iler_con_subt%C3%ADtulos_en_Espa%C3%B1ol_1080p_30fps_H264-128kbit_AAC_uv5rn8.mp4"
    },
    {
        title: "Resident Evil 3: Nemesis",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711712193/segundo%20spring/residentevil/videogames/juego_3_xudbkx.jpg",
        platform: "PlayStation",
        year: 1999,
        studio: "Capcom",
        classification: "Mature",
        resume: "Resident Evil 3: Nemesis, conocido originalmente en Japón como Biohazard 3: Last Escape es la tercera entrega de la saga Resident Evil lanzada para la consola PlayStation el 22 de septiembre en Japón, el 11 de noviembre en EE.UU. y finalmente el 9 de diciembre de 1999 en Europa. Posteriormente se lanzó la versión para Microsoft Windows el 16 de junio de 2000 en el país nipón, el 24 de noviembre de 2000 en el continente europeo y el 16 de abril de 2001 en América del Norte. Luego se le hizo un lanzamiento en la consola Sega Dreamcast el 16 de noviembre de 2000 en Japón, un día más tarde en los Estados Unidos y el 22 de diciembre del mismo año en Asia. Más tarde, fue desarrollada una versión para Nintendo GameCube el 14 de enero de 2003 en Norteamérica, el 23 de enero de 2003 en Japón y el 30 de mayo de 2003 en Oceanía. Una versión remake fue lanzada en abril de 2020 para PlayStation 4, Xbox One y PC con importantes cambios gráficos, jugabilidad y trama. Asimismo, el juego está disponible en la tienda en línea Playstation Store para ser jugado en la consola PlayStation 3 y en las consolas portátiles de Sony PlayStation Portable y PlayStation Vita. Como sus dos predecesores anteriores, es un juego de acción y aventura del género Survival Horror el cual se sitúa argumentalmente tanto antes de la aventura de Resident Evil 2 como después de esta, La protagonista en esta ocasión es Jill Valentine, quien tiene que escapar de una ciudad plagada de zombis infectados por el virus-T. En este videojuego, Jill tendrá que lidiar, no solamente con las hordas de zombis y criaturas infectadas por el virus, sino también contra un nuevo enemigo: una arma biológica llamada NEMESIS quien está programado para destruir a miembros de S.T.A.R.S. que tantos problemas le han ocasionado a Umbrella. El juego sigue conservando varios detalles de las primeras entregas (baúl para guardar nuestros objetos, así como otras características ya conocidas de la franquicia). Como agregados, se ha incluido la posibilidad de hacer una serie de decisiones en tiempo real (es decir, durante el juego) las cuales modifican parcialmente la trama argumental del mismo dando la posibilidad de volver a jugar la partida a través de distintos caminos que pueden costarle (o no) la vida a ciertos personajes. En el aspecto de la jugabilidad, se han agregado objetos que explotan al atinarles un disparo, permitiendo eliminar a varios enemigos a la vez. Resident Evil 3: Nemesis es el primer juego de la serie en incluir una nueva modalidad de juego llamada The Mercenaries - Operation: Mad Jackal; esta ofrece una nueva aventura en donde el jugador se pone en la piel de uno de los miembros del U.B.C.S., quien deberá abrirse paso a través de hordas de muertos vivientes y enemigos variopintos para entregar un maletín a un insólito personaje. El juego fue planeado originalmente como un derivado de la serie principal con diferentes personajes e historia, además de estar orientado más a la acción que al género del Survival Horror, como lo hicieron las dos primeras entregas. El juego destaca por su gran variedad de enemigos y la introducción del personaje de Nemesis, un monstruo intimidante que acosa al jugador durante la partida. Acompañado de una campaña de publicidad importante, Resident Evil 3: Nemesis vendió la cifra de tres millones de copias a nivel mundial y tuvo una acogida favorable, alabando sus gráficos, mejoras en la jugabilidad y la introducción de Nemesis. No obstante, el juego fue criticado por historia y su corta duración. Sin embargo, aquello no impidió su conversión a Sega Dreamcast, Nintendo GameCube y Windows para repetir el éxito.",
        trailer: "https://www.youtube.com/watch?v=djjHZoDIvSY"
    },
    {
        title: "Resident Evil Code: Veronica",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711712197/segundo%20spring/residentevil/videogames/juego_4_p1zrel.jpg",
        platform: "Dreamcast",
        year: 2000,
        studio: "Capcom",
        classification: "Mature",
        resume: "Resident Evil Code: Veronica es la quinta entrega de la serie de videojuegos Resident Evil y el cuarto dentro de la serie principal del género survival horror desarrollada por la compañía nipona Capcom para las consolas de sexta generación Sega Dreamcast, siendo el primer título de la serie en ser publicado fuera de la consola PlayStation, aunque posteriormente fue lanzado para su sucesora, la PlayStation 2 y la consola Nintendo GameCube. Fue publicado inicialmente en el año 2000 para Dreamcast, y en el año 2001 para PS2 y en 2003 para la Nintendo GameCube, aunque estas últimas dos fueron tituladas CODE Veronica X (CODE Veronica Kanzenban en Japón) e incluyeron más contenido. En el año 2011, una versión remasterizada fue publicada para las consolas Xbox 360 y PlayStation 3 y en el 2017 fue publicado para la PlayStation 4. El 2019 fue lanzado para Xbox One a través de la retrocompatiblidad. Este fue el primer juego en la serie hecho para la sexta generación de consolas, siendo la secuela argumental de Resident Evil 2 y Resident Evil 3, y la precuela a los eventos de Resident Evil 4 siendo además el cuarto título dentro de la serie principal y el quinto título en orden de lanzamiento en ser producido por Capcom. La aventura se juega alternando entre secciones controladas por Claire Redfield y Chris Redfield, y transcurre en las ubicaciones de Isla Rockfort y la Antártida. Por primera vez en la serie, el juego emplea escenarios poligonales que reemplazan a los pre-renderizados de las entregas anteriores. El argumento del juego revela una de las circunstancias más importantes en la decadencia de Umbrella, como es la desaparición de la línea de uno de sus fundadores, la de los Ashford, así como también la existencia de una corporación rival a Umbrella que también está interesada en armas biológicas y que ha reclutado a un villano clave en la serie que se creía muerto, Albert Wesker",
        trailer: "hhttps://res.cloudinary.com/dqh5ovfj1/video/upload/v1711795619/segundo%20spring/residentevil/trailers/videoGames/Resident_Evil_Code__Veronica_X_-_Trailer_de_doblaje_al_Espa%C3%B1ol_Castellano_1080p_30fps_H264-128kbit_AAC_x4rpf6.mp4"
    },
    {
        title: "Resident Evil 4",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711712201/segundo%20spring/residentevil/videogames/juego_5_ocprnl.webp",
        platform: "PlayStation 2",
        year: 2005,
        studio: "Capcom",
        classification: "Mature",
        resume: "In Resident Evil 4es la cuarta entrega numerada y el sexto juego de la serie principal de la popular saga de survival horror Resident Evil creada por la compañía nipona Capcom siendo distribuido por otras compañías como Nintendo Australia, Ubisoft, THQ Asia Pacific y Red Ant Enterprises. Como es común en esta serie tiene una clasificación D originalmente en Japón, +18 en Europa y M (Mature 17+) en América del Norte. Originalmente se estrenó sólo para Nintendo GameCube siendo lanzado el 11 de enero de 2005 en Norteamérica, el 27 de Enero en Japón y el 18 de marzo de ese mismo año en Europa, pero luego se desarrolló también para PlayStation 2 siendo lanzado el 25 de octubre de 2005 en Norteamérica, el 4 de noviembre de 2005 en Europa y el 1 de diciembre de 2005 en el país nipón. Y estaría disponible ademas en PC desde el 2 de marzo de 2007, con otra versión ya lanzada (31 de mayo de 2007) para Nintendo Wii. Una adaptación para la consola brasileña Zeebo fue lanzada el 11 de agosto de 2009, basada en la versión para móviles del juego. El argumento del juego nos pone en la piel de Leon Scott Kennedy, sobreviviente del desastre vírico que destruyó a Raccoon City, convertido ahora seis años después de este suceso en un agente del Servicio Secreto de los Estados Unidos enviado a una zona rural de España con la misión de rescatar a la hija del Presidente de los Estados Unidos, Ashley Graham que fuera secuestrada por una secta que opera en la zona. La investigación de Leon se complica luego de que una horda de aldeanos enfurecidos lo ataquen sin razón aparente. Resident Evil 4 tuvo grandes diferencias respecto de sus versiones anteriores; esté incluyó una historia diferente, con pocos nexos con lo acontecido anteriormente, con grandes cambios, con un modo de juego con mas combate y menos componentes Survival Horror que los anteriores juegos, y con enemigos diferentes; el mayor cambio en cuanto a los enemigos fue la desaparición de los clásicos zombis por enemigos con IA (Inteligencia Artificial) más avanzada, como por ejemplo los Ganados (que vinieron a reemplazar a los zombis como enemigos comunes) destacando la capacidad de los pueblerinos frente a una amenaza, ya que se organizan a la hora de cazar a alguien con tridentes, piquetes, antorchas, motosierras, explosivos, etc. En comparación, la versión del PlayStation 2 trae más elementos que la versión del GameCube, pero esta última ofrece mejores gráficas. La versión de Wii, trae los extras de PS2 y las texturas y los gráficos mejorados, además, claro está, de poder disponer del control de Wii. Este videojuego ha alcanzado vender 6 millones de unidades en todo el mundo. Por último, el 27 de febrero de 2014, se lanzó la Ultimate HD Editon. A diferencia de la versión original para plataformas compatibles, esta edición para PC no tiene censura, funciona a 60 FPS por primera vez, permite resoluciones en HD y además soluciona algunos de los problemas técnicos del mismo. El 30 de agosto de 2016 fue publicada la versión de PlayStation 4 y Xbox One, similar a la Ultimate HD de PC, esta cuenta con gráficos en alta resolución y el 21 de mayo de 2019 fue lanzado para la Nintendo Switch. El 21 de octubre de 2021, fue lanzada una versión de realidad virtual para el Oculus Quest 2, la cual cambia el esquema del juego para adaptarlo a la realidad virtual con una jugabilidad en primera persona.",
        trailer: "https://www.youtube.com/watch?v=O75Ip4o1bs8"
    },
    {
        title: "Resident Evil: Revelations 2",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711712212/segundo%20spring/residentevil/videogames/juego_8_guhxdu.jpg",
        platform: "Nintendo 3DS",
        year: 2015,
        studio: "Capcom",
        classification: "Mature",
        resume: "Resident Evil: Revelations es una entrega de la saga anunciado el día 1 de septiembre de 2014. Capcom desveló que el juego se vendería en forma de episodios durante el año 2015, con un total 4 episodios, a $5.99 USD cada uno, que también fueron publicados más tarde en formato físico. En 2017 fue lanzada una versión especial titulada Resident Evil Revelations Collection donde se incluye también el Resident Evil: Revelations original de forma exclusiva para la Nintendo Switch, aunque Revelations 2 se obtiene por medio de descarga digital. Claire Redfield es una de las pocas personas que sobrevivió a la destrucción de Raccoon City en 1998. Aquella vez pudo comprobar el efecto que las armas biológicas tienen sobre las personas. Tras el incidente, se unió a una organización no gubernamental dedicada a ayudar a las víctimas de armas biológicas y químicas, un grupo conocido como TerraSave. En 2011, unos asaltantes desconocidos atacaron la sede central de la ONG. Claire y sus compañeros, incluida la incorporación más reciente, Moira Burton, son secuestrados y llevados a una isla desierta. Claire y Moira despiertan en celdas de una prisión de la isla. Antes de que puedan comprender lo que sucede, ven cómo una especie de monstruo despedaza a uno de sus compañeros.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711795009/segundo%20spring/residentevil/trailers/videoGames/Resident_Evil_Revelations_2_-_Drama___Tr%C3%A1iler_Espa%C3%B1ol_1080p_30fps_H264-128kbit_AAC_whcwht.mp4"
    },
    {
        title: "Resident Evil 5",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711712208/segundo%20spring/residentevil/videogames/juego_7_qwu1sn.webp",
        platform: "PlayStation 3, Xbox 360, PC",
        year: 2009,
        studio: "Capcom",
        classification: "Mature",
        resume: "Resident Evil 5 es la quinta entrega numerada de la saga de videojuegos de Resident Evil y la séptima entrega de la serie principal; del género shooter en tercera persona pero con la estética propia del género de Terror de supervivencia, El juego fue desarrollado por la compañía nipona Capcom para las consolas de séptima generación PlayStation 3 y Xbox 360. Fue lanzado el 5 de marzo de 2009 en Japón y toda Asia mientras que en América y Europa fue lanzado el 13 de marzo de 2009. Más tarde, la versión para Microsoft Windows fue estrenada en el mes de junio, con el soporte de NVIDIA's GeForce 3D Vision Technology. El 18 de mayo de 2016 fue lanzada una versión en la Google Play para la NVIDIA Shield Tablet y el 28 de junio de 2016 fue lanzada la versión digital del juego para la PlayStation 4 y Xbox One mientras que la versión física fue lanzada el 12 de julio de 2016. El 29 de octubre de 2019 se lanzó para la Nintendo Switch, encontrándose también disponible desde la edición especial Triple Pack. La trama del juego se ubica en el año 2009, cinco años después de los acontecimientos posteriores a Resident Evil 4, poniéndonos en el papel esta vez de Chris Redfield quien ahora trabaja como agente activo de la B.S.A.A., organización creada para combatir el fenómeno del Bioterrorismo surgido tras la desaparición de la Corporación Umbrella, en una misión en territorio africano.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711794855/segundo%20spring/residentevil/trailers/videoGames/RESIDENT_EVIL_5_Game_trailer_espa%C3%B1ol_1080p_30fps_H264-128kbit_AAC_l7gpj7.mp4"
    },
    {
        title: "Resident Evil 6",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711712215/segundo%20spring/residentevil/videogames/juego_9_f3kqps.jpg",
        platform: "PlayStation 3, Xbox 360, PC",
        year: 2012,
        studio: "Capcom",
        clasification: "Mature",
        resume: "En Resident Evil 6 El juego comienza en un flashback de Leon Scott Kennedy donde hace una visita al presidente esto en el año 2013. Han pasado quince años desde los acontecimientos en Raccoon City y el presidente de los Estados Unidos, amigo personal de Leon está decidido en contar toda la verdad sobre esos hechos. Sin embargo, un ataque bioterrorista evita la comparecencia y transforma al presidente en un ser deforme, obligando a Leon a tomar una difícil decisión, junto a una nueva misteriosa compañera llamada Helena Harper. Al mismo tiempo, se desarrolla la aventura de Chris Redfield y Piers Nivans, como parte de la B.S.A.A., en China, país donde se ha desatado una amenaza bioterrorista. Por otro lado, también hay una tercera historia paralela a la de Leon Scott Kennedy y Chris Redfield. Esta tercera historia está protagonizada por Jake Muller y Sherry Birkin. (Este primero, siendo el hijo de Albert Wesker). Sherry protege a Jake con el propósito de salvar su sangre, que al parecer, es el único antídoto contra el virus-C. También se ha confirmado que el lugar en el que están situados estos dos personajes, es Europa del Este. También hay un cuarto Modo Historia, protagonizado por Ada Wong, que desde la actualización de diciembre de 2012 se puede jugar desde un principio, al contrario de Separate Ways de Resident Evil 4, que solo se puede jugar terminando la campaña principal con Leon. Los enemigos principales serán los J'avos; tienen una apariencia similar a la de un zombi. Sin embargo son rápidos y pueden utilizar armas en combate. Estos podrían descender de los ganados de Resident Evil 4 al igual que los majinis, ya que son enemigos con una inteligencia muy alta. Estos obedecen las ordenes de Carla Radames y tienen como base un humano, infectado con el virus C. El último número de la revista nacional española gamesTM tiene en portada a Resident Evil 6 y en ella incorpora un reportaje de siete páginas con la más actual información acerca del juego tras el pasado Captivate de Roma. Definió el juego de la siguiente manera: El segmento de Leon es puro horror gótico, muy cercano al Survival Horror de las primeras entregas. La parte de Chris estará más encaminada a la acción, aunque tendrá sus propios elementos de horror. Y en cuanto a Jake y Sherry, la mecánica está más enfocada hacia la huida, ya que su principal objetivo en Edonia será escapar de sus perseguidores",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711794672/segundo%20spring/residentevil/trailers/videoGames/Resident_Evil_6_tr%C3%A1iler_en_espa%C3%B1ol_720p_29fps_H264-192kbit_AAC_psm2ut.mp4"
    },
    {
        title: "Resident Evil 7: Biohazard",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711712219/segundo%20spring/residentevil/videogames/juego_10_epdbh4.jpg",
        platform: "PlayStation 4, Xbox One, PC",
        year: 2017,
        studio: "Capcom",
        clasification: "Mature",
        resume: "Resident Evil 7: Biohazard presenta un cambio radical en la serie al adoptar una perspectiva en primera persona y un enfoque más centrado en el horror psicológico. Los jugadores asumen el papel de Ethan Winters, quien busca a su esposa desaparecida en una mansión aislada en Luisiana, solo para verse atrapado en los horrores de la familia Baker y una presencia misteriosa conocida como Eveline. es la siguiente gran entrega de la renombrada serie Resident Evil y supone un nuevo hito para la franquicia, puesto que se aprovecha de sus raíces y abre la puerta a una experiencia de miedo realmente terrorífica. Con su gran cambio a la vista en primera persona y un estilo fotorrealista gracias al nuevo motor de Capcom RE Engine, Resident Evil 7 trae un nivel sin precedentes de inmersión que logra una experiencia de terror muy cercana y personal. Ambientado en el Estados Unidos rural moderno y continuando la historia de los dramáticos sucesos de Resident Evil® 6, los jugadores experimentarán el terror directamente desde la perspectiva en primera persona. Resident Evil 7 encarna los elementos distintivos de la serie de exploración y atmósfera tensa con los que se acuñó el género de “terror de supervivencia” hace ya veinte años. Ahora, una completa actualización del sistema de juego lleva la experiencia del terror de supervivencia al siguiente nivel.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711794540/segundo%20spring/residentevil/trailers/videoGames/Resident_Evil_7_biohazard_Trailer_Audio_Espa%C3%B1ol_720p_30fps_H264-192kbit_AAC_uamclo.mp4"
    },
    {
        title: "Resident Evil Village",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711712180/segundo%20spring/residentevil/videogames/juego_11_gfntfm.png",
        platform: "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, PC",
        year: 2021,
        studio: "Capcom",
        clasification: "Mature",
        resume: "Resident Evil Village sigue la historia de Ethan Winters mientras busca a su hija secuestrada en un misterioso pueblo europeo. En su búsqueda, se enfrenta a horrores sobrenaturales y criaturas monstruosas, incluida la misteriosa figura conocida como Lady Dimitrescu y sus hijas vampíricas. El juego continúa la jugabilidad en primera persona introducida en Resident Evil 7: Biohazard. La historia se desarrolla en una región montañosa aislada alrededor de un pueblo y un castillo medieval en Europa del Este. Ethan y Mia Winters siguieron juntos después de los eventos de Resident Evil 7: Biohazard e intentaron seguir con sus vidas tres años después del incidente en Dulvey. Durante los eventos del juego, la hija de los Winters, Rosemary, es secuestrada por unos individuos, lo que obliga a Ethan a viajar al pueblo, un lugar donde ocurren extraños sucesos por la región con la aparición de extrañas criaturas y el control del castillo por la familia Dimitrescu quienes tienen extrañas habilidades, viéndose también las caras con un viejo amigo del incidente de Dulvey, Chris Redfield.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711794426/segundo%20spring/residentevil/trailers/videoGames/Resident_Evil_Village_-_Trailer_oficial_en_espa%C3%B1ol_RESHOWCASE_1080p_60fps_H264-128kbit_AAC_nlyisr.mp4"
    }
]

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allVideoGamesresidentEvil = await VideoGameresidentEvil.find();
        if (allVideoGamesresidentEvil.length > 0) {
            await VideoGameresidentEvil.collection.drop();
            console.log('Videojuegos borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Videojuegos', err);
    })
    .then(async() => {
        const VideoGamesresidentEvilMap = arrayVideoGamesresidentEvil.map((VideoGame) => new VideoGameresidentEvil(VideoGame));
        await VideoGameresidentEvil.insertMany(VideoGamesresidentEvilMap);
        console.log('Videojuegos insertados');
    })
    .catch((err) => {
        console.log('error insertando los Videojuegos', err);
    })
    .finally(() => mongoose.disconnect());