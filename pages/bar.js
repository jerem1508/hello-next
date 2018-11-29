import Layout from '../components/MyLayout.js'
import HorizontalBubbles from '../components/horizontalBubbles';
import SectorBar from '../components/sectorBar';

const Bar = (props) => (
  <Layout>
    <h1>Bar</h1>
    <h2>Secteurs</h2>
    <div style={{height: '500px'}}>
        <SectorBar />
    </div>
    <strong> Remarques : </strong>
    <ul>
      <li>Je ne sais pas comment trier dans l'ordre inverse (celui de la maquette)</li>
      <li>Possibilité de personnaliser les tooltips assez finement</li>
      <li>En revanche pas possible (en tout cas je n'ai pas réussi) de personnaliser les labels</li>
    </ul>
    <div style={{height: '500px'}}>
    <h2>Domaines / Tutelles</h2>
      <HorizontalBubbles />
    </div>
    <strong> Remarques : </strong>
    <ul>
      <li>ici on a généré le même composant bulles plusieurs fois côte à côte.
      Sauf que comme les bulles sont responsives, elles faisaient toute la même taille.
      Trick : générer une autre bulle blanche (invisible) étalon de valeur fixe.
      On voit ainsi un tooltip vide quand on survole la bulle blanche.
      Autrement dit, le composant n'est pas très adapté à l'utilisation qu'on veut en faire.</li>
    </ul>
  </Layout>
)

export default Bar
