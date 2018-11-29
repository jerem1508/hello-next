import { ResponsiveBubble } from '@nivo/circle-packing'

const data = {
  "name":"main",
  "children": [
    {
      "name": "Publications",
      "loc": 423,
      "color": "#942963",
    },
    {
      "name": "Projets",
      "loc": 398,
      "color": "#30c378",
    },
    {
      "name": "Brevets",
      "loc": 177,
      "color": "#f64a4a",
    },
    {
      "name": "Thèses",
      "loc": 83,
      "color": "#f68d4a",
    },
  ],
};

const largeBubbles = () => (
    <ResponsiveBubble
        root={data}
        margin={{
            "top": 20,
            "right": 20,
            "bottom": 20,
            "left": 20
        }}
        identity="name"
        value="loc"
        colorBy={node => node.color}
        enableLabel={true}
        isInteractive={true}
        isZoomable={false}
        padding={15}
        leavesOnly={true}
        label={node => `${node.id}: ${node.value}`}
        labelTextColor="inherit:darker(1)"
        borderWidth={2}
        animate={true}
        motionStiffness={90}
        motionDamping={12}
    />);

export default largeBubbles;
