import { ResponsiveBubble } from '@nivo/circle-packing'

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
const childrenGenerator = (number) => {
  const children = [];
  for (let i = 0; i < number; i++) {
    children.push({
      "name": i.toString(),
      "loc": 1
    })
  }
  return children;
}

const mainChildren = childrenGenerator(1200)
mainChildren[0].children = childrenGenerator(12)

const data = {
  "children": mainChildren,
  }

const smallBubbles = () => (
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
        colors={['white', 'blue']}
        colorBy="depth"
        enableLabel={false}
        isInteractive={false}
        isZoomable={false}
        padding={6}
        leavesOnly={true}
        labelTextColor="inherit:darker(0.8)"
        borderWidth={2}
        animate={true}
        motionStiffness={90}
        motionDamping={12}
    />);

export default smallBubbles;
