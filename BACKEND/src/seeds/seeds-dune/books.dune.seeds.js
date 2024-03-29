const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookDune = require('../../api/models/models.dune/books.dune.model');


const arrayBooksDune = [
  
  {
    title: 'Dune',
    publication_year: 1965,
    saga: 'Crónicas de Dune',
    saga_index: 1,
    universe: 'Dune',
    author: 'Frank Herbert',
    resume: '"Dune", el periplo de un héroe mítico y con una enorme carga emocional, cuenta la historia de Paul Atreides. Se trata de un joven brillante y de gran talento con un destino grandioso que no comprende todavía y que deberá viajar al planeta más peligroso del universo para asegurar el futuro de su familia y de su pueblo. Mientras las fuerzas del mal se enfrentan por uno de los recursos más excepcionales del planeta que tiene el poder de desbloquear todo el potencial de la humanidad, solo los que logren dominar sus miedos podrán sobrevivir.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710929284/Dune/Books/content_gnq3wn.jpg',
  },
  {
    title: 'Mesias de Dune',
    publication_year: 1969,
    saga: 'Crónicas de Dune',
    saga_index: 2,
    universe: 'Dune',
    author: 'Frank Herbert',
    resume: 'Arrakis, también llamado Dune: un mundo desierto en pos del sueño de convertirse en un paraíso, cuna de mil guerras que se han extendido por todo el universo y de un anhelo mesiánico que intenta alcanzar el sueño más antiguo de la humanidad...                                                                                       Paul Atreides: un personaje mítico, perturbado por la cercana presencia de una sombra dominante: su hermana Alia. Y frente a ellos, los grandes intereses económicos, políticos y religiosos que sacuden los espacios interestelares: la CHOAM, la Cofradía espacial, el Landsraad, la Bene Gesserit...                                                                                                                                                                                        Todo ello, y mucho más, conforma esta segunda entrega de «Dune»: un fresco impresionante y una obra cumbre de la imaginación.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710929317/Dune/Books/el-mesias-de-dune-las-cronicas-de-dune-2_pjl9cv.jpg',
  },
  {
    title: 'Hijos de Dune',
    publication_year: 1976,
    saga: 'Crónicas de Dune',
    saga_index: 3,
    universe: 'Dune',
    author: 'Frank Herbert',
    resume: 'Leto Atreides, el hijo de Paul -el mesías de una religión que arrasó el universo, el mártir que, ciego, se adentró en el desierto para morir-, tiene ahora nueve años. Pero es mucho más que un niño, porque dentro de él laten miles de vidas que lo arrastran a un implacable destino. Él y su hermana gemela, bajo laregencia de su tía Alia, gobiernan un planeta que se ha convertido en el eje de todo el universo. Arrakis, más conocido como Dune.                                                                                             Y en este planeta, centro de las intrigas de una corrupta clase política y sometido a una sofocante burocracia religiosa, aparece de pronto un predicador ciego, procedente del desierto. ¿Es realmente Paul Atreides, que regresa de entre los muertos para advertir a la humanidad del peligro más abominable?',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710929302/Dune/Books/hijosdedune_yyj59d.jpg',
  },
  {
    title: 'Dios Emperador de Dune',
    publication_year: 1981,
    saga: 'Crónicas de Dune',
    saga_index: 4,
    universe: 'Dune',
    author: 'Frank Herbert',
    resume: 'Esta cuarta entrega de la saga «Dune» centra su trama en la figura mesiánica de Leto Atreides II (hijo de Paul Atreides, héroe cuya estirpe hunde sus raíces en la legendaria casa griega de los Atridas) y nos lleva, a través de diversos dilemas éticos, a comprender los mitos que necesita la humanidad y a los héroes que los encarnan. El futuro, en el mundo de Dune, pertenece solo a los que son capaces de pensar por sí mismos.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710929274/Dune/Books/diosemperador_p48zvt.jpg',
  },
  {
    title: 'Herejes de Dune',
    publication_year: 1984,
    saga: 'Crónicas de Dune',
    saga_index: 5,
    universe: 'Dune',
    author: 'Frank Herbert',
    resume: 'Esta quinta entrega de la serie prosigue con las aventuras de la estirpe de los Atreides en el fascinante planeta de arena. Nos hallamos en el futuro respecto a la acción de Dios emperador de Dune.                                                                                          La expansión galáctica que siguió a la muerte de Leto ha terminado. Todos regresan al planeta madre, convertido de nuevo en el mundo inhóspito y seco de sus orígenes. El delicado equilibro entre las antiguas fuerzas está a punto de romperse. En este marco aparece un nuevo personaje: Sheeana, una chica que tiene el poder de invocar, controlar y conducir a Shaihulud, el gigantesco gusano de arena...',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710929321/Dune/Books/herejes_de_dune_htm7nt.jpg',
  },
  {
    title: 'Dune: Casa Capitular',
    publication_year: 1985,
    saga: 'Crónicas de Dune',
    saga_index: 6,
    universe: 'Dune',
    author: 'Frank Herbert',
    resume: 'Las Honorables Madres se enfrentan, con sus terribles poderes, a la secular Bene Gesserit. Las revenidas Madres, ocultas y fortificadas en su planeta Casa Capitular, intentan revivir el viejo orden que les dio su antiguo poder en todo el universo. Un ghola de Miles Teg está siendo adiestrado para superar incluso a su poderoso antecesor.                                                                                        La unión de Duncan Idaho y Murbella, cautivos ambos en la no-nave, puede arrojar luz sobre el traumático fenómeno de la Dispersión.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710929299/Dune/Books/casacapitular_yug2bx.jpg',
  },
  {
    title: 'Dune: Casa Atreides',
    publication_year: 1999,
    saga: 'Preludio a Dune',
    saga_index: 1,
    universe: 'Dune',
    author: 'Frank Herbert',
    resume: 'Viaja a un futuro lejano en un planeta desértico llamado Arrakis, donde Pardot Kynes está llevando a cabo su investigación para descubrir los secretos que ocultan sus dunas. Descubre las intrigas de palacio en Kaitain, donde se está preparando un golpe contra el Emperador Elrood IX. Acompaña a un joven Duncan Idaho en su lucha por sobrevivir en Giedi Prime, el mundo de los Harkonnen. Sé testigo del aprendizaje de Leto en su peligroso camino hasta convertirse en el líder de la casa Atreides.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701982135/APISCIFI/BOOKS/Dune%20la%20Casa%20Atreides.jpg',
  },
  {
    title: 'Dune: Casa Harkonnen',
    publication_year: 2000,
    saga: 'Preludio a Dune',
    saga_index: 2,
    universe: 'Dune',
    author: 'Frank Herbert',
    resume: 'Shaddam ostenta una precaria posición como gobernador del Universo Conocido, la cual depende de que engendre un heredero varón. Su liderazgo es además amenazado por el ambicioso barón Harkonnen, cuyas insaciables ansias de dominio le llevan a conspirar contra algunas de las más poderosas fuerzas del Imperio, con la esperanza de elevar su Casa a un nivel de poder sin precedentes. Sus objetivos principales son la Casa Atreides y la misteriosa hermandad Bene Gesserit. La Hermandad no sospecha esta amenaza, ocupada en culminar el trabajo de siglos y crear un niño-dios que barrerá emperadores, Casas y la propia historia en un terrorífico nuevo orden de tiranía religiosa.                                                                                             El planeta Dune también padece la atroz esclavitud impuesta por los crueles Harkonnen, decididos a explotar sus recursos y en especial la adictiva melange, especia que solo se encuentra en Dune. Héroes inesperados empiezan a surgir ansiosos por vengarse del barón Harkonnen...',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710929277/Dune/Books/casaharkonen_csqvmt.jpg',
  },
  {
    title: 'Dune: Casa Corrino',
    publication_year: 2001,
    saga: 'Preludio a Dune',
    saga_index: 3,
    universe: 'Dune',
    author: 'Frank Herbert',
    resume: 'El emperador Shaddam Corrino anhela lo que aún no posee: el poder absoluto y un heredero varón. En su camino se interponen la Cofradía Espacial, que le impide controlar el comercio de la melange, la especia adictiva que mantiene unido al imperio; las rivalidades entreCasas, especialmente entre el duque Leto Atreides y el barón Harkonnen, y los oscuros planes de la hermandad Bene Gesserit.                                                                                                                                                                                Todos ignoran, sin embargo, que el destino de la civilización está ahora en manos de una mujer decidida, por amor, a desbaratar el plan secular de la Hermandad para crear el todopoderoso Kwisatz Haderach. Si lady Jessica da a luz el hijo varón que tanto ansía el duque Leto, podría alterarse la historia futura del imperio.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701982240/APISCIFI/BOOKS/Dune%20la%20Casa%20Corrino.jpg',
  },
  {
    title: 'Dune: La Yihad Butleriana',
    publication_year: 2002,
    saga: 'Legendas de Dune',
    saga_index: 1,
    universe: 'Dune',
    author: 'Frank Herbert',
    resume: 'Diez mil años antes del nacimiento de Paul Atreides, del derrocamiento de un imperio, los últimos humanos libres se rebelaron contra el dominio de las poderosas máquinas que los habían esclavizado. En Dune, la Yihad Butleriana se revela la historia de Serena Butler, la mujer que prendió la llama de esa rebelión. Se destapa la traición que convertiría en enemigos mortales a la Casa Atreides y la Casa Harkonnen. Se desvelan los orígenes de la hermandad Bene Gesserit, de los doctores Suk, de la Orden de los Mentat y la Cofradía Espacial. Y aparece un planeta olvidado, Arrakis, donde acaba de descubrirse la melange, la especia que puede cambiar el destino de miles de planetas...',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710929268/Dune/Books/yihadbutleriana_lx2nqv.jpg',
  },
  {
    title: 'Dune: La Cruzada de las Maquinas',
    publication_year: 2003,
    saga: 'Legendas de Dune',
    saga_index: 1,
    universe: 'Dune',
    author: 'Frank Herbert',
    resume: 'El libro tiene lugar unos 10 000 años antes de los eventos de la saga original, en el centro de lo que se conocerá como Yihad Butleriana. En la novela se narra la guerra entre las máquinas pensantes creadas por la humanidad, dirigidas por la supermente Omnius junto a los Titanes, y la Liga de los Nobles, una unión de los últimos mundos humanos libres.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710929309/Dune/Books/Cruzadamaquinas_w6jsqa.webp',
  },
  {
    title: 'Dune: La Batalla de Corrino',
    publication_year: 2004,
    saga: 'Legendas de Dune',
    saga_index: 1,
    universe: 'Dune',
    author: 'Frank Herbert',
    resume: 'Los acontecimientos de la novela tienen lugar un siglo después del inicio de la Yihad Butleriana, y están divididos en dos partes. La primera parte se data alrededor del año 108 B.G.2​ y narra la guerra biológica lanzada por las máquinas pensantes contra los humanos. En la segunda parte de la novela, datada en el anterior año 88 B.G. se narran los acontecimientos posteriores a la «Gran Purga», que conducirán a la Batalla de Corrin.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710929306/Dune/Books/batallacorrinos_qgk6tp.jpg',
  },
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksDune = await BookDune.find();
    if (allBooksDune.length > 0) {
      await BookDune.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksDuneMap = arrayBooksDune.map((book) => new BookDune(book));
    await BookDune.insertMany(booksDuneMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
