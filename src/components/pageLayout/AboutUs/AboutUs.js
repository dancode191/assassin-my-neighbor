import ninjaFamily from "../../../images/ninjaFamily.svg"
import ninjaVillage2 from "../../../images/ninjaVillage2.svg"
import "./AboutUs.css"

export default function AboutUs(){


    return (
        <>
        <div className="aboutUsContainer container-fluid">
            <h1>About Us</h1>
            <p>We are the Ikumashi family, we come from a long dynasty of ninjas and we are committed everyday to keep the tradition our ancestors passed to us.
            After our family lived in Israel for 5 years we saw the struggle of the average israeli, and we decided to use our gifts to help you. <br /><br />
            Over time we worked and dealed with different types of requests and now it's safe to say we have vast experience with the israeli problem. We've left many clients highly satisfied. You can read what they say about us <a className="aboutUsClientsLink" href="/ourCustomers">here.</a>
            </p>
        
            <img className="ninjaFamily img-fluid max-width: 100%" src={ninjaFamily} alt="ninja family" />
        
        </div>
        
        </>
    )
}