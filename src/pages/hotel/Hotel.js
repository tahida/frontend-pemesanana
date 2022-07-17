import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const photos = [
        {
            src : "https://t-cf.bstatic.com/xdata/images/hotel/square200/353392918.webp?k=d2b6e9dbc8b1b66d566a7ee47bb6978de620fc7bb128e525b3fe6e11918d7eb6&o=&s=1"
        },
        {
            src : "https://t-cf.bstatic.com/xdata/images/hotel/square200/339172922.webp?k=36ad353f3f85837d00bec041875c72f91923baace2754dcfd2698bb644ee6632&o=&s=1"
        },
        {
            src : "https://t-cf.bstatic.com/xdata/images/hotel/square200/87188138.webp?k=52c6b1a1f2e284577fd5397f9a8a378760fc7e8310f4e48af37b50a9a0544c3f&o=&s=1"
        },
        {
            src : "https://t-cf.bstatic.com/xdata/images/hotel/square200/130734852.webp?k=108e4a8f051b0258656ee39dbc39578b103640a9943248204229b581f4824724&o=&s=1"
        },
        {
            src : "https://t-cf.bstatic.com/xdata/images/hotel/square200/152022355.webp?k=bcc20fdec7ff35b08cc11f5e8e68f2a51933b2d07befc6d1bca1974bec31de80&o=&s=1"
        },
        {
            src : "https://t-cf.bstatic.com/xdata/images/hotel/square200/234139921.webp?k=9a42602a2af2f8cfc36ad26145a257ba8219c420eeab124d9eb2ff532d395ab9&o=&s=1"
        },
    ]

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true)
    }

    const handleMove = (direction) => {
        let newSlideNumber;

        if(direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
        }

        setSlideNumber(newSlideNumber)

        // angka di dapat dari indes gambar
    }

    return (
        <div>
            <Navbar />
            <Header type="list"/>
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg"/>
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Pesan atau Booking Sekarang</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                    <FontAwesomeIcon icon = {faLocationDot}/>
                    <span>Ubud, Bali</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over Rp.175.000,- at this property and get a free airport Taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo,i) => (
                            <div className="hotelImgWrapper">
                                <img 
                                onClick={() => handleOpen(i)} 
                                src={photo.src} 
                                alt="" 
                                className="hotelImg"/>
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay In Beautiful Place</h1>
                            <p className="hotelDesc">
                                Cuma berjalan 10 menit dari hotel menuju pantai
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Sempurna Untuk stay 9 malam</h1>
                            <span>
                                Berlokasi di kota ubud Bali, Hotel ini sempurna skor nilai 9.8!
                            </span>
                            <h2>
                                <b>Rp.1.575.000</b> (9 Malam)
                            </h2>
                            <button>Pesan atau Booking Sekarang</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Hotel;