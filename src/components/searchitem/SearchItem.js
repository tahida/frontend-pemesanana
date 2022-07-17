import "./searchitem.css";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/square200/350386484.webp?k=b4edd9f6ed3404c108b537619837ff5804651947aec4a38de435bd6ebdc4c552&o=&s=1" alt="" className="siImg"/>
            <div className="siDesc">
                <h1 className="siTitle">Padma Resort Legian</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free Airport Taxi</span>
                <span className="siSubtitle">
                    Studio Apartement With Air Condiotioning
                </span>
                <span className="siFeatures">
                    Entire Studio * 1 bathroom * 21m 1 full bed
                </span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">
                    You Can Cancel Later, So Lock In This Great Price Today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">Rp.175.000,-</span>
                    <span className="siTaxOp">Include Taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;