import logo from '../images/devora-logo2.png'
import logo1 from '../images/devora-pic.png'
import { Link, useLocation } from 'react-router-dom'

function Header() {

    const location = useLocation()
    const currentPath = location.pathname

    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li><Link to="/" className={currentPath === "/" ? "current" : ""}>Home</Link></li>
                    <li><Link to="/about" className={currentPath === "/about" ? "current" : ""}>About</Link></li>
                    <li><Link to="/work" className={currentPath === "/work" ? "current" : ""}>Work</Link></li>
                    <li><Link to="/blog" className={currentPath === "/blog" ? "current" : ""}>Blog</Link></li>
                    <li><Link to="/contact" className={currentPath === "/contact" ? "current" : ""}>Contact</Link></li>
                </ul>
            </nav>
            
            <div className="header-container">

                <div className="logo-banner">
                    <Link to="/">
                        <img src={logo} alt="Devora Logo" />
                    </Link>
                    <img src={logo1} className='symbol'/>
                </div>



            </div>
        </header >

    )
}

export default Header