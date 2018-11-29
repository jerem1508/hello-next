import { render } from 'react-dom'
import { ResponsivePie } from '@nivo/pie'

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
const data = [
  {
    "id": "recherche",
    "label": "Structure de recherche",
    "value": 40,
  },
  {
    "id": "entreprises",
    "label": "Entreprises",
    "value": 22,
  },
  {
    "id": "public",
    "label": "Secteur public",
    "value": 20,
  },
  {
    "id": "ISBL",
    "label": "Institutions sans but lucratif",
    "value": 10,
  },
  {
    "id": "OI",
    "label": "Organisations internationales",
    "value": 7,
  }
]

const Pie = () => (
    <ResponsivePie
        data={data}
        margin={{
            "top": 40,
            "right": 80,
            "bottom": 80,
            "left": 80
        }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors="nivo"
        colorBy="id"
        borderWidth={1}
        borderColor="inherit:darker(0.2)"
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor="inherit"
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "anchor": "right",
                "direction": "column",
                "translateY": 56,
                "itemWidth": 100,
                "itemHeight": 18,
                "itemTextColor": "#999",
                "symbolSize": 18,
                "symbolShape": "square",
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemTextColor": "#000"
                        }
                    }
                ]
            }
        ]}
    />);

export default Pie;
