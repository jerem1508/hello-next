import Layout from '../components/MyLayout';
import ProdSmallBubbles from '../components/prodSmallBubbles';
import ProdLargeBubbles from '../components/prodLargeBubbles';
import EcosystemeBubble from '../components/ecosystemeBubble';

export default () => (
  <Layout>
    <h1>Bulles</h1>
    <div style={{height: '600px'}}>
    <h2> Nombre de productions </h2>
      <ProdSmallBubbles />
    </div>
    <strong> Remarques : </strong>
    <ul>
      <li>Les cercles ne sont pas parfaits</li>
      <li>Ils sont contenus dans une "bulles" plus grandes et ne peuvent pas être horizontalisé</li>
      <li>Pas sur de pouvoir mettre la légende bien comme il faut</li>
    </ul>
    <div style={{height: '500px'}}>
    <h2> Nombre total de productions </h2>
      <ProdLargeBubbles />
    </div>
    <strong> Remarques : </strong>
    <ul>
      <li>Je ne sais pas comment augmenter la taille des labels</li>
    </ul>
    <div style={{height: '500px'}}>
    <h2>Ecosystème</h2>
      <EcosystemeBubble />
    </div>
    <strong> Remarques : </strong>
    <ul>
      <li>Le diamètre des bulles ne signifie rien ici => quelle est sa signification sur la maquette ?</li>
      <li>
        Le couleur des bulles est ici plus ou moins aléatoire (quand on a un multiple de 3)
        pour un effet visuel mais on peut mettre n'importe quelle fonction pour déterminer la couleur
      </li>
    </ul>
  </Layout>
)
