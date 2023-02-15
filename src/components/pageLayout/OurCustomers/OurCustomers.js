import profilePic1 from "../../../images/profile1.svg"
import profilePic2 from "../../../images/profile2.svg"
import profilePic3 from "../../../images/profile3.svg"
import arrow from "../../../images/arrow.png"
import "./OurCustomers.css"

export default function OurCustomers(){


    return(
        <>
        <div className="ourCustomersContainer container-fluid">
            <div className="OurCustomersOpeningTextBox row align-items-center">
                <h1>What our Customers say about us</h1>
            </div>
            <div className="OurCustomersReviewBox row align-items-center">
                <div id="carouselReviews" className="carouselContainer carousel slide">
                    
                    <div className="carouselInner carousel-inner container-fluid align-self-center">
                        <div className="carousel-item active    ">
                            <div className="reviewBox    ">
                                <img className="profilePic1" src={profilePic1} alt="profile picture" />
                                <h4>"My life was miserable"</h4>
                                <p>My life was hell on earth. My neighbor who was happening to be my boss too, made my life miserable at work and at home. After I found "Assassin My Neighbor" my life changed! </p>
                            </div>
                        </div>
                        <div className="carouselItem carousel-item">
                            <div className="reviewBox    ">
                                <img className="profilePic2" src={profilePic2} alt="profile picture" />
                                <h4>"tikami ehkit mi levo"</h4>
                                <p>temer ka polo "Assassin mi dolbox" ka am tikami ehkit mi levo, Yi kai yai yai! mi stupid hehtat oes me loco alga yinauk yee alga nokka. "Assassin mi dolbox" app me yee bada nunu ka owe vus midoo</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="reviewBox    ">
                                <img className="profilePic3" src={profilePic3} alt="profile picture" />
                                <h4>"didli-do.."</h4>
                                <p>My neighbor's name is (was) Ned Flanders. All day I heard "didli-do.. dodli-di..", don't let me start about christmas.. thanks to "Assassin My Neighbor" this is over </p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselReviews" data-bs-slide="prev">
                        <img className="arrowPrev" src={arrow} alt="prev" />
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselReviews" data-bs-slide="next">
                        <img className="arrowNext" src={arrow} alt="next" />
                    </button>
                </div>
            </div>
            
        </div>
        </>
    )
}