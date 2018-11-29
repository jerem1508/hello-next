import { ResponsiveBubble } from '@nivo/circle-packing'

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
const childrenGenerator = (number, color) => {
  const children = [];
  for (let i = 0; i < number; i++) {
    children.push({
      "name": i.toString(),
      "loc": i,
      "color": i % 3 === 0 ? '#fc9550' : color, // no logic here is just to have different color in same child
    })
  }
  return children;
}

const children1 = childrenGenerator(32, 'blue')
const children2 = childrenGenerator(8, '#ffd100')
const mainChildren = childrenGenerator(1200)
mainChildren[0].children = childrenGenerator(12)

const data = {
  "name":"main",
  "children": [
    {
      "name": "children1",
      "children": children1,
      "colors": "blue",
    },
    {
      "name": "children2",
      "children": children2,
      "color": "yellow",
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
        enableLabel={false}
        isInteractive={true}
        isZoomable={false}
        padding={15}
        leavesOnly={true}
        labelTextColor="inherit:darker(0.8)"
        borderWidth={2}
        animate={true}
        motionStiffness={90}
        motionDamping={12}
    />);

export default largeBubbles;
