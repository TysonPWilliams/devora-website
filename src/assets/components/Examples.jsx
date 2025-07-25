import mockup1 from '../images/CoastalCrete-Mockup.png'
import mockup2 from '../images/SatoshiFund-Mockup.png'
import mockup3 from '../images/tysonw-mockup.png'

function Examples() {

    const items = [
        {
            img: mockup1,
            title: "Coastal Crete",
            desc: "Website Development"
        },
        {
            img: mockup2,
            title: "SatoshiFund",
            desc: "Web App Development"
        },
        {
            img: mockup3,
            title: "TysonW Website",
            desc: "Website Refresh"
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
                <p>{item.title}</p>
                <h2>{item.desc}</h2>
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