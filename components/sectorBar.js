import { render } from 'react-dom'
import { ResponsiveBar } from '@nivo/bar'



const data = [
  {
    "secteur": "7219Z Recherche développement",
    "nombre": 121,
  },
  {
    "secteur": "7211Z Recherche développement",
    "nombre": 96,
  },
  {
    "secteur": "8542Z Enseignement supérieur",
    "nombre": 87,
  },
  {
    "secteur": "85424Z Enseignement supérieur",
    "nombre": 80,
  },
  {
    "secteur": "85425Z Enseignement supérieur",
    "nombre": 74,
  },
  {
    "secteur": "85423Z Enseignement supérieur",
    "nombre": 64,
  },
  {
    "secteur": "85042Z Enseignement supérieur",
    "nombre": 60,
  },
  {
    "secteur": "80542Z Enseignement supérieur",
    "nombre": 55,
  },
  {
    "secteur": "81542Z Enseignement supérieur",
    "nombre": 48,
  },
]

const sectorBar = () => (
    <ResponsiveBar
        data={data}
        borderRadius={20}
        keys={["nombre"]}
        indexBy="secteur"
        margin={{
            "top": 50,
            "right": 130,
            "bottom": 50,
            "left": 60
        }}
        padding={0.3}
        colors={['#ffd100']}
        enableGridY={false}
        borderColor="inherit:darker(1.6)"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="inherit:darker(1.6)"
        layout="horizontal"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        tooltip={({ data }) => <span>{`${data.secteur}: ${data.nombre}`}</span>}
    />
)

export default sectorBar
