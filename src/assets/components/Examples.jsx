import mockup1 from '../CoastalCrete-Mockup.png'

function Examples() {
    return (
        <section className="examples-wrapper">
            <div className="example">
                <div className="example-top">
                    <img src={mockup1} alt="" />
                </div>
                <div className="example-bottom">
                    <p className="business">Coastal Crete</p>
                    <h2 className="business">Website Development</h2>
                </div>
            </div>
            <div className="example">
                <div className="example-top"></div>
                <div className="example-bottom"></div>
            </div>
            <div className="example">
                <div className="example-top">
                    <h1>hey</h1>
                </div>
                <div className="example-bottom">
                    <h2>yo</h2>
                </div>
            </div>
        </section>
    )
}

export default Examples