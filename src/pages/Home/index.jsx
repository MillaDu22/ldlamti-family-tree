import FlagSlider from "../../components/FlagSlider/index.jsx";
import Banner from '../../components/Banner/index.jsx';
import './home.css';

function Home() {
    return (
        <div className="home">
            <FlagSlider />
            <Banner />
            <span className="container-about">
                <h3 className="title-about">À propos de moi</h3>
                <h4 className ="subtitle-about">Connaître ses racines, c'est comprendre une partie de soi-même.</h4>
                <p className ="txt-about">
                    Je m'appelle Ludmilla et je suis fiere de mes origines multiculturelles. Mon histoire familiale s'étend à travers la France, l'Espagne, l'Allemagne et l'Italie, créant un riche tissage de cultures, de traditions et de valeurs.

                    Origines Françaises
                    Enracinée dans les charmantes campagnes et les villes historiques de France, j'ai hérité d'une appréciation pour la beauté, la cuisine raffinée et l'art de vivre. Comme le dit le proverbe français, "Les racines du passé nourrissent les fruits du présent." C'est avec gratitude que je me tourne vers mes ancêtres français, qui ont cultivé un amour profond pour la culture et la tradition.

                    Racines Espagnoles
                    De l'Espagne ensoleillée, j'ai reçu la passion et la chaleur qui caractérisent ce peuple. Les fêtes vibrantes, les histoires de bravoure et d'amour, et les valeurs familiales solides sont au cœur de mon héritage espagnol. "Quien no conoce su historia, está condenado a repetirla," dit-on en Espagne - "Celui qui ne connaît pas son histoire est condamné à la revivre." C'est en honorant cette histoire que je construis mon avenir.

                    Héritage Allemand
                    L'Allemagne, avec ses forêts mystiques et ses châteaux majestueux, a façonné une partie de mon être. Mes ancêtres allemands m'ont transmis une éthique de travail rigoureuse et un sens profond de la discipline et de l'organisation. "Die Wurzeln der Vergangenheit nähren die Früchte der Gegenwart," - "Les racines du passé nourrissent les fruits du présent." C'est une leçon de persévérance et de respect pour le passé que je chéris.

                    Descendance Italienne
                    L'Italie, terre de ma descendance, est synonyme de passion, d'art et de famille. Des ruelles romantiques de Rome aux paysages pittoresques de la Toscane, elle a hérité d'une joie de vivre et d'un amour pour la beauté sous toutes ses formes. "Un albero senza radici è un albero senza vita," - "Un arbre sans racines est un arbre sans vie." C'est en célébrant ces racines qu'elle trouveva sa force et son inspiration.

                    Mon Voyage Généalogique
                    Mon parcours généalogique est une aventure en constante évolution, un voyage à travers les siècles et les cultures qui ont façonné mon identité. En explorant les histoires de mes ancêtres, je découvre non seulement d'où je viens, mais aussi les valeurs et les leçons qui guident ma vie aujourd'hui.

                    Merci de rejoindre ce voyage avec moi. Ensemble, célébrons la richesse de nos héritages et honorons ceux qui ont tracé le chemin avant nous.
                </p>
            </span>
        </div>
    );
}

export default Home;