import { render } from 'react-dom'
import { ResponsiveTreeMap } from '@nivo/treemap'

const data = {
  "name": "nivo",
  "children": [
    {
      "name": "PME",
      "loc":540,
      "color": "#f64a4a",
    },
    {
      "name": "Institution sans but lucratif",
      "loc":168,
      "color": "#942963",
    },
    {
      "name": "Entreprise de taille intermédiaire",
      "loc":134,
      "color": "#f64a4a",
    },
    {
      "name": "Enseignement supérieur",
      "loc":128,
      "color": "#f68d4a",
    },
    {
      "name": "Grande entreprise",
      "loc":102,
      "color": "#f64a4a",
    },
    {
      "name": "Centre hospitalier",
      "loc": 80,
      "color": "#f68d4a",
    },
    {
      "name": "Autres",
      "loc": 75,
      "color": "#ffd100"
    },
    {
      "name": "Entreprise privée",
      "loc": 70,
      "color": "#f64a4a",
    },
    {
      "name": "Entreprise",
      "loc": 40,
      "color": "#f64a4a",
    },
    {
      "name": "EPIC",
      "loc": 20,
      "color": "#ffd100"
    },
  ]
}

const TreeMap = () => (
    <ResponsiveTreeMap
        root={data}
        identity="name"
        value="loc"
        leavesOnly={true}
        innerPadding={3}
        outerPadding={3}
        margin={{
            "top": 10,
            "right": 10,
            "bottom": 10,
            "left": 10
        }}
        label="loc"
        labelFormat=".0s"
        labelSkipSize={12}
        labelTextColor="inherit:darker(1.2)"
        colors="nivo"
        colorBy={node => node.color}
        borderColor="inherit:darker(0.3)"
        animate={true}
        motionStiffness={90}
        motionDamping={11}
    />
);

export default TreeMap;
