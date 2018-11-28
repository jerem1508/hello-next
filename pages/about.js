import Layout from '../components/MyLayout';
import Pie from '../components/Pie';
import SmallBubbles from '../components/SmallBubbles';
import LargeBubbles from '../components/LargeBubbles';

export default () => (
  <Layout>
    <div style={{height: '300px'}}>
      <Pie />
    </div>
    <div style={{height: '300px'}}>
    <p> Nombre de productions (publications, brevet, etc) </p>
      <SmallBubbles />
    </div>
    <div style={{height: '300px'}}>
    <p> Ecosystème (que signifie le diamètre de chaque bulle ? ) </p>
      <LargeBubbles />
    </div>
  </Layout>
)
