import { Link } from 'react-router-dom'
import mockup1 from '../images/CoastalCrete-Mockup.png'
import mockup2 from '../images/SatoshiFund-Mockup.png'
import mockup3 from '../images/tysonw-mockup.png'
import arrow from '../images/arrow.png'

function Examples() {

    const items = [
        {
            img: mockup1,
            title: "Coastal Crete",
            desc: "Website Development",
            website: "https://tysonpwilliams.github.io/coastal-crete-website"
        },
        {
            img: mockup2,
            title: "SatoshiFund",
            desc: "Web App Development",
            website: "https://satoshifund.netlify.app"
        },
        {
            img: mockup3,
            title: "TysonW Website",
            desc: "Website Refresh",
            website: "https://tysonwilliams.dev"
        }
    ]

    const renderExample = (item, index) => (
        <div className="example" key={index}>
            <div className="example-top">
                {item.video ? (
                    <video autoPlay loop playsInline muted src={item.video} />
                ) : (
                    <img src={item.img} alt={item.title} />
                )}
            </div>
            <div className="example-bottom">
                <div className='left-side'>
                    <p>{item.title}</p>
                    <h2>{item.desc}</h2>
                </div>
                <div className='right-side'>
                    <a href={item.website} target='_blank' rel='noopener noreferrer'><img src={arrow} /></a>
                </div>
            </div>
        </div>
    )


    return (
        <section className="examples-wrapper">
            <div className="marquee-track">
                {[...items, ...items].map(renderExample)}
            </div>
        </section>
    )
}

export default Examples