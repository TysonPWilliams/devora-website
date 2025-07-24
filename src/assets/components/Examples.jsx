import mockup1 from '../CoastalCrete-Mockup.png'
import mockup2 from '../SatoshiFund-Mockup.png'
import mockup3 from '../portfolio-mockup.mp4'

function Examples() {
    return (
        <section className="examples-wrapper">
            <div className="example">
                <div className="example-top">
                    <img src={mockup1} alt="" />
                </div>
                <div className="example-bottom">
                    <p>Coastal Crete</p>
                    <h2>Website Development</h2>
                </div>
            </div>
            <div className="example">
                <div className="example-top">
                    <img src={mockup2} alt="" />
                </div>
                <div className="example-bottom">
                    <p>SatoshiFund</p>
                    <h2>Web App Development</h2>
                </div>
            </div>
            <div className="example">
                <div className="example-top">
                    <video
                        autoPlay
                        loop
                        playsInline
                        src={mockup3}
                    />
                </div>
                <div className="example-bottom">
                    <p>TysonW</p>
                    <h2>Website Refresh</h2>
                </div>
            </div>
        </section>
    )
}

export default Examples