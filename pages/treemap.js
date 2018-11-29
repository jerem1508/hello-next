import Layout from '../components/MyLayout';
import TreeMap from '../components/TreeMap';

export default () => (
  <Layout>
    <h1>TreeMap</h1>
    <h2>Type de structure</h2>
    <div style={{height: '500px'}}>
        <TreeMap />
    </div>
    <strong>Remarques :</strong>
    <ul>
      <li>Normalement ça devrait être possible de personnaliser les labels</li>
      <li>
        Dans la maquette, la dimension de profondeur propre à la représentation sous forme de treemap
        n'est pas vraiment justifiée donc il y a un seul niveau de profondeur actuellement.
      </li>
      <li>Pas possible d'arrondir les angles </li>
    </ul>
  </Layout>
)
