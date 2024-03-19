const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MovieStarsWars = require('../../api/models/models.StarWars/movies.StarWars.model');

const arrayMoviesStarsWars = [{
        title: 'Star Wars: Episodio I - La amenaza fantasma',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c7270fd8e909225ed92a15e163ca773000/asset/9bf5ee2060dbdf33b572c36307e7c4fc/manage?view_mode=mosaic&context=manage',
        director: 'George Lucas',
        year: 1999,
        duration: '136 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG (Parental Guidance Suggested)',
        resume: 'La República Galáctica está sumida en el caos. Los impuestos de las rutas comerciales a los sistemas estelares exteriores están en disputa. Esperando resolver el asunto con un bloqueo de poderosas naves de guerra, la codiciosa Federación de Comercio ha detenido todos los envíos al pequeño planeta de Naboo. Mientras el Congreso de la República debate interminablemente esta alarmante cadena de acontecimientos, el Canciller Supremo ha enviado en secreto a dos Caballeros Jedi guardianes de la paz y la justicia en la galaxia, para resolver el conflicto....'
    },
    {
        title: 'Star Wars: Episodio II - El ataque de los clones',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c7270fd8e909225ed92a15e163ca773000/asset/4790ed5c6aaece8b113eb49a55e20d63/manage?view_mode=mosaic&context=manage',
        director: 'George Lucas',
        year: 2002,
        duration: '142 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG (Parental Guidance Suggested)',
        resume: 'En el Senado Galáctico reina la inquietud. Varios miles de sistemas solares han declarado su intención de abandonar la República. Este movimiento separatista, liderado por el misterioso Conde Dooku, ha provocado que al limitado número de Caballeros Jedi les resulte difícil mantener la paz y el orden en la galaxia. La senadora Amidala, la antigua reina de Naboo, regresa al Senado Galáctico para dar su voto en la crítica cuestión de crear un EJÉRCITO DE LA REPÚBLICA que ayude a los desbordados Jedi…'
    },
    {
        title: 'Star Wars: Episodio III - La venganza de los Sith',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c7270fd8e909225ed92a15e163ca773000/asset/c27aba0443d946e7ebffc77f0daa4967/manage?view_mode=mosaic&context=manage',
        director: 'George Lucas',
        year: 2005,
        duration: '140 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG-13 (Parents Strongly Cautioned)',
        resume: '¡Guerra! La República se desmorona bajo los ataques del despiadado Lord Sith, el Conde Dooku. Hay héroes en ambos bandos. El mal está por doquier. En una contundente jugada, el diabólico líder droide, el General Grievous, ha irrumpido en la capital de la República y ha secuestrado al Canciller Palpatine, líder del Senado Galáctico. Mientras el ejército droide separatista trata de huir de la capital sitiada con su valioso rehén, dos Caballeros Jedi lideran una misión desesperada para rescatar al Canciller cautivo....'
    },
    {
        title: 'Star Wars: Episodio IV - Una nueva esperanza',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c7270fd8e909225ed92a15e163ca773000/asset/b555b7f67dd55580f6d4510dc79be0db/manage?view_mode=mosaic&context=manage',
        director: 'George Lucas',
        year: 1977,
        duration: '121 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG (Parental Guidance Suggested)',
        resume: 'Nos encontramos en un periodo de guerra civil. Las naves espaciales rebeldes, atacando desde una base oculta, han logrado su primera victoria contra el malvado Imperio Galáctico. Durante la batalla, los espías rebeldes han conseguido apoderarse de los planos secretos del arma total y definitiva del Imperio, la ESTRELLA DE LA MUERTE, una estación espacial acorazada, llevando en sí potencia suficiente para destruir a un planeta entero. Perseguida por los siniestros agentes del Imperio, la Princesa Leia vuela hacia su patria, a bordo de su nave espacial, llevando consigo los planos robados, quepueden salvar a su pueblo y devolver la libertad a la galaxia…'
    },
    {
        title: 'Star Wars: Episodio V - El imperio contraataca',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c7270fd8e909225ed92a15e163ca773000/asset/48cf53fcbcd7f1c3d7bd2352f4c05e75/manage?view_mode=mosaic&context=manage',
        director: 'Irvin Kershner',
        year: 1980,
        duration: '124 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG (Parental Guidance Suggested)',
        resume: 'Son tiempos adversos para la rebelión. Aunque la Estrella de la Muerte ha sido destruida, las tropas imperiales han hecho salir a las fuerzas rebeldes de sus bases ocultas y las han perseguido a través de la galaxia. Tras escapar de la terrible Flota Imperial, un grupo de guerreros de la libertad, encabezados por Luke Skywalker, ha establecido una nueva base secreta en el remoto mundo helado de Hoth. El malvado Lord Darth Vader, obsesionado por encontrar al joven skywalker, ha eviado miles de sondas espaciales hacia las infinitas distancias del espacio....'
    },
    {
        title: 'Star Wars: Episodio VI - El retorno del Jedi',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c7270fd8e909225ed92a15e163ca773000/asset/56173840a08e003b097a92afba2ad211/manage?view_mode=mosaic&context=manage',
        director: 'Richard Marquand',
        year: 1983,
        duration: '131 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG (Parental Guidance Suggested)',
        resume: 'Luke Skywalker ha regresado a Tatooine, su planeta de origen, para intentar rescatar a su amigo Han Solo de las garras del malvado Jabba, el Hutt. Pero Luke ignora que el IMPERIO GALÁCTICO ha comenzado en secreto la construcción de una nueva estación espacial armada, más poderosa que la temida Estrella de la Muerte. Una vez terminada, este arma suprema significará la aniquilación del pequeño grupo de rebeldes que lucha para restaurar la libertad en la galaxia....'
    },
    {
        title: 'Star Wars: Episodio VII - El despertar de la fuerza',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c7270fd8e909225ed92a15e163ca773000/asset/4ddb0cf530525eecf941ba3e505dde56/manage?view_mode=mosaic&context=manage',
        director: 'J.J. Abrams',
        year: 2015,
        duration: '138 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG-13 (Parents Strongly Cautioned)',
        resume: 'Luke Skywalker ha desaparecido. En su ausencia, la siniestra PRIMERA ORDEN ha surgido de las cenizas del Imperio y no descansará hasta que Skywalker, el último Jedi, haya sido destruido. Con el apoyo de la REPÚBLICA, la General Leia Organa dirige una valiente RESISTENCIA. Desesperadamente busca a su hermano Luke con el fin de obtener su ayuda para restaurar la paz y la justicia en la galaxia. Leia ha enviado a su piloto más audaz en una misión secreta a Jakku, donde un viejo aliado ha descubierto una pista del paradero de Luke....'
    },
    {
        title: 'Star Wars: Episodio VIII - Los últimos Jedi',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c7270fd8e909225ed92a15e163ca773000/asset/eb34d325e5e625b8dfc10f679369387e/manage?view_mode=mosaic&context=manage',
        director: 'Rian Johnson',
        year: 2017,
        duration: '152 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG-13 (Parents Strongly Cautioned)',
        resume: 'La PRIMERA ORDEN impera. Luego de diezmar a la pacífica República, el Líder Supremo Snoke ahora envía a sus despiadadas legiones a asumir el control militar de la galaxia. Solo la General Leia Organa y su grupo de combatientes de la RESISTENCIA se oponen a la creciente tiranía, convencidos de que el Maestro Jedi Luke Skywalker regresará y restaurará la chispa de esperanza en la lucha. Pero la Resistencia ha sido expuesta. Mientras la Primera Orden se dirige  hacia la base rebelde, los valientes héroes organizan un desesperado escape....'
    },
    {
        title: 'Star Wars: Episodio IX - El ascenso de Skywalker',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c7270fd8e909225ed92a15e163ca773000/asset/b3fa1a4151a17f5a3edabdd0efc29a56/manage?view_mode=mosaic&context=manage',
        director: 'J.J. Abrams',
        year: 2019,
        duration: '142 minutos',
        country: 'Estados Unidos',
        genre: 'Ciencia ficción, Aventura, Fantasía',
        clasification: 'PG-13 (Parents Strongly Cautioned)',
        resume: '¡Los muertos hablan! La galaxia ha escuchado una transmisión misteriosa, una amenaza de VENGANZA en la siniestra voz del fallecido EMPERADOR PALPATINE. LA GENERAL LEIA ORGANA envía agentes secretos a obtener información, mientras que REY, la última esperanza de los Jedi, entrena para luchar en contra de la diabólica PRIMERA ORDEN. Mientras tanto, el Líder Supremo KYLO REN busca furiosamente al Emperador fantasma, dispuesto a destruir cualquier amenaza a su poder....'
    },
];

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allMoviesStarsWars = await MovieStarsWars.find();
        if (allMoviesStarsWars.length > 0) {
            await MovieStarsWars.collection.drop();
            console.log('Películas borradas');
        }
    })
    .catch((err) => {
        console.log('error borrando las películas', err);
    })
    .then(async() => {
        const moviesStarsWarsMap = arrayMoviesStarsWars.map((movie) => new MovieStarsWars(movie));
        await MovieStarsWars.insertMany(moviesStarsWarsMap);
        console.log('películas insertadas');
    })
    .catch((err) => {
        console.log('error insertando las películas', err);
    })
    .finally(() => mongoose.disconnect());