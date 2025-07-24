import { Link } from "react-router-dom"

function Hero() {

    return (
        <section className="hero">
            <h1 className="hero-text">Built for Results.<br/> Designed to Impress</h1>
            <Link to="/work" className="hero-btn">see our work</Link>
        </section>
    )
}

export default Hero