import { Link } from "react-router-dom"


function AgencyIntro() {
    return (
        <section className="intro-container">
            {/* <h2>Fuel Your Growth with a Website Built to Scale</h2> */}
            <p>
                From clean code to smart design, we build websites that grow with your business.
                Launch faster, convert better, and look legit from day one.
            </p>
            <div className="intro-btn">
                <Link to='/about' className="hero-btn">find out more</Link>
            </div>
        </section>
    )
}

export default AgencyIntro