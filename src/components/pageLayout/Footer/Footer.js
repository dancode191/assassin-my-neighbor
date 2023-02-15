
import "./Footer.css"
import facebook from "../../../images/facebook.png"
import instagram from "../../../images/instagram.png"
import twitter from "../../../images/twitter.png"
import youtube from "../../../images/youtube.png"

export default function Footer(){

    return(
        <>
        <div className="footerContainerBox">
            <div className="socialMediaBox d-flex gap-5 justify-content-center align-items-center">
                <a href="#" className="linkIcon1 link-item"><img className="facebookIcon" src={facebook} alt="facebook" /></a>
                <a href="#" className="linkIcon2 link-item"><img className="instagramIcon" src={instagram} alt="instagram" /></a>
                <a href="#" className="linkIcon3 link-item"><img className="twitterIcon" src={twitter} alt="twitter" /></a>
                <a href="#" className="linkIcon4 link-item"><img className="youtubeIcon" src={youtube} alt="youtube" /></a>
            </div>
        
        </div>
        </>
    );
}