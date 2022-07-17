import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import {useState} from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";


const Header = ({type}) => {
    // type yang ada di dalam kurung adalah props
    
    // membuat variabel fungsi
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate ] = useState([
        {
            startDate : new Date (),
            endDate : new Date(),
            key : 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    // mendeklarasikan navigate untuk digunakan pada usehanlesearch
    const navigate = useNavigate()

    // javaScript object
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] +1 : options[name] -1,
            }
        })
    }

    const handleSearch = () => {

        // mengambil value yang akan dikirim ke halaman hotels
        navigate("/hotels", {state: {destination,date,options}})
    }
    return (
        <div className="header">
            {/* memberikan kondisi pada header container ada di menit 41:25 */}
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                {/* dibaca jika type adalah list maka menjadi headercontainer lis mode jika tidak (:) hanya akan menambahkan headerContainer */}
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />  
                        <span>Stays</span>  
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />  
                        <span>Penerbangan</span>  
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />  
                        <span>Rental Mobil</span>  
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />  
                        <span>Attractions</span>  
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />  
                        <span>Taxi Bandara</span>  
                    </div>
            </div>
            {/* menggunakan parenting react fraghment */}

            { type !== "list" &&
            // dibaca jika type tidak sama dengan list dan --> argumen di  bawah di jalankan
            <> <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
            <p className="headerDesc">Get rewarded for ypur travels -  unlock instant savings of 10% or more with a free TahidaBooking</p>
            <button className="headerBtn">Sign in / Registrasi</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input
                        type="text"
                        placeholder="Mau pergi ke mana ?"
                        className="headerSearchInput"
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span onClick ={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} 
                        to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    { openDate && (
                    <DateRange 
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                    />)}
                    
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children .${options.room} room`}</span>
                    {openOptions && (
                    <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                            <button disabled = { options.adult <= 1 } className = "optionCounterButton" onClick={() => handleOption ("adult", "d")}>-</button>
                            <span className="optionCounterNumber">{options.adult}</span>
                            <button className="optionCounterButton" onClick={() => handleOption ("adult", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                            <button disabled = { options.children <= 0 } className="optionCounterButton" onClick={() => handleOption ("children", "d")}>-</button>
                            <span className="optionCounterNumber">{options.children}</span>
                            <button className="optionCounterButton" onClick={() => handleOption ("children", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                            <button disabled = { options.room <= 1 } className="optionCounterButton" onClick={() => handleOption ("room", "d")}>-</button>
                            <span className="optionCounterNumber">{options.room}</span>
                            <button className="optionCounterButton" onClick={() => handleOption ("room", "i")}>+</button>
                            </div>
                        </div>
                    </div>
                    )} </div> 
                <div className="headerSearchItem">
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Cari</button>
                    </div>
                </div>
            </div> </> }
        </div>
    </div>   
    )
}

export default Header;