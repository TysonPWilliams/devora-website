import { Link } from "react-router-dom"
import devoraLogo from "../images/devora-logo.gif"

function Hero() {

    return (
        <section className="hero-container">
            <div className="hero slide-in-bottom">
                <h1 className="hero-text">Built for Results.<br /> Designed to Impress</h1>
                <Link to="/work" className="hero-btn">see our work</Link>
            </div>
            <div className="hero-logo">
                <img src={devoraLogo} alt="" />
            </div>
        </section>
    )
}

export default Hero