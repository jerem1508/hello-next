import Layout from '../components/MyLayout.js'
import Sankey from '../components/Sankey';

const SankeyPage = (props) => (
  <Layout>
    <h1>Sankey</h1>
    <h2>Projets</h2>
    <div style={{height: '500px'}}>
        <Sankey />
    </div>
    <p>
      Ce type de graphe n'apporte pas une lecture très intéressante car on peut seulement suivre les flux deux à deux.
      Par exemple, impossible de savoir quel projet parmi ceux financés par l'ANR a une durée de 30 à 48 mois et touche 5 structures.
      On peut seulement savoir que parmi les projet de 5 à 10 millions, 100 durent plus de 60 mois.
      Il faudrait n'avoir que deux niveaux et choisir quoi comparer par exemple type de financement vs montant ou alors durée etc.
    </p>
    <strong> Remarques : </strong>
    <ul>
      <li>
        La clé 'color' dans les 'nodes' n'est utilisée que pour les liens.
        Elle n'est pas obligatoire (sinon c'est la props 'colors' qui est appliquée)
      </li>
      <li>
        S'il y a des espaces dans l'id d'un node, le degradé sur les liens (enableLinkGradient={true}) n'est pas possible
      </li>
    </ul>

    <strong>Problématique qui reste à résoudre</strong>
    <ul>
      <li> 1. Gérer l'ordre des nodes (je ne comprends pas l'ordre par défaut) </li>
      <li> 2. Personnalisation des labels </li>
    </ul>
  </Layout>
)

export default SankeyPage
