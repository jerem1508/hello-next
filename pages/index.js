import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import Sankey from '../components/Sankey';
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <div style={{height: '500px'}}>
      <p> <strong>Projets</strong> les couleurs de base n'ont pas de sens</p>
        <Sankey />
    </div>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
