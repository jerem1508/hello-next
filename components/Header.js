import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/pie">
          <a style={linkStyle}>Pie</a>
        </Link>
        <Link href="/bar">
          <a style={linkStyle}>Bar</a>
        </Link>
        <Link href="/bubbles">
          <a style={linkStyle}>Bubbles</a>
        </Link>
        <Link href="/sankey">
          <a style={linkStyle}>Sankey</a>
        </Link>
        <Link href="/treemap">
          <a style={linkStyle}>TreeMap</a>
        </Link>
    </div>
)

export default Header
