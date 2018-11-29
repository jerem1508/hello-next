import Layout from '../components/MyLayout.js'

const Index = (props) => (
  <Layout>
      <h3>Maquettes scanR avec <a href="http://nivo.rocks/">nivo</a> et React</h3>
      <p>
        La librairie permet de recouvrir à peu près tous les types de représentations
        que l'on souhaite faire, sauf le type Carte avec bulles où il faudra trouver une alternative.
        La librairie est très simple à prendre en main, mais sa personnalisation a des limites.
        Pour des développeurs peu expérimentés en D3.js ça peut constituer une bonne approche, pourvu
        qu'on soit flexible sur le rendu final.
      </p>
  </Layout>
)


export default Index
