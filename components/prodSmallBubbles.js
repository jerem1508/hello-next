import { ResponsiveBubble } from '@nivo/circle-packing'

// generate small bubbles
const childrenGenerator = (number, color) => {
  const children = [];
  for (let i = 0; i < number; i++) {
    children.push({
      "name": i.toString(),
      "color": color,
      "loc": 1
    })
  }
  return children;
}

// big bubble
const mainChildren1 = childrenGenerator(1256, "blue")
mainChildren1[0].children = childrenGenerator(12, "white") // use to have a white circle inside

const mainChildren2 = childrenGenerator(178, "#fc9550")
mainChildren2[0].children = childrenGenerator(1, "white")

const mainChildren3 = childrenGenerator(1251, "#f96d85")
mainChildren3[0].children = childrenGenerator(12, "white")

const data = {
  "children": [
    {
      "name": "Bubble1",
      "children": mainChildren1,
    },
    {
      "name": "Bubble2",
      "children": mainChildren2,
    },
    {
      "name": "Bubble3",
      "children": mainChildren3,
    },
  ]
  }

const prodSmallBubbles = () => (
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
        colors="nivo" // overriden by colorBy
        colorBy={node => node.color}
        enableLabel={true}
        isInteractive={true}
        isZoomable={false}
        padding={6}
        leavesOnly={true}
        labelTextColor="inherit:darker(0.8)"
        borderWidth={2}
        animate={true}
        motionStiffness={90}
        motionDamping={12}
    />);

export default prodSmallBubbles;
