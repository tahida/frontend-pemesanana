import "./mailList.css";

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Save time, save money!</h1>
            <span className="mailDesc">Daftar Dan Kami Akan Mengirimkan Kesepakatan Terbaik Untuk Anda</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Email Anda"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList;