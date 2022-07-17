import  "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/region/square250/50938.webp?k=61fc24194f6d6fdff9623c2e065d21de10c9d775ff7bb91aa8bf84440397572c&o=" alt="" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Bali</h1>
                    <h2>123 Properti</h2>
                </div>
            </div>       
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/square250/688031.webp?k=ff0020c67ed55cc861bf9fc60499dd863f45313459fdb086d85cae1c83a257a9&o=" alt="" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Bandung</h1>
                    <h2>234 Properti</h2>
                </div>
            </div>       
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/square250/671983.webp?k=02b0accffb426dc916b86354595184ed24673aece70c203562981e46d07605a5&o=" alt="" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Nusa Penida</h1>
                    <h2>1337 Properti</h2>
                </div>
            </div>      
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/square250/671983.webp?k=02b0accffb426dc916b86354595184ed24673aece70c203562981e46d07605a5&o=" alt="" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Nusa Penida</h1>
                    <h2>1337 Properti</h2>
                </div>
            </div>            
        </div>
        
    )
}

export default Featured;