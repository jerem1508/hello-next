import Layout from '../components/MyLayout';
import Pie from '../components/Pie';

export default () => (
  <Layout>
    <h1>Pie</h1>
    <h2>Type de structure</h2>
    <div style={{height: '500px'}}>
        <Pie />
    </div>
  </Layout>
)
