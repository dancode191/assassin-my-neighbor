import Shurikens from "../../../images/shurikens.png"
import katanaSword from "../../../images/katanaSword.png"
import poison from "../../../images/poison2.png"
import sushiRolls from "../../../images/sushiRolls2.png"
import sushiSticks from "../../../images/sushiSticks.png"
import "./Packages.css"


export default function Packages(){

    return (
        <>
        <div className="packagesContainer container-fluid">
            <div className="packagesText row">
                <h1>Packages</h1>
                <p>We offer a variety of options to solve your problem in the most clean and efficiently way possible, because we believe our clients need to get the best service, please don't hesitate to <a className="packagesContactUsLink" href="/contactUs">contact us</a> for any question.</p>
            </div>
            <div className="packagesBox row justify-content-center">
                <div className="StarsPackgae col-2">
                    <h3>Shurikens</h3>
                    <div className="packageStarsImage">
                        <img className="shurik1" src={Shurikens} alt="ninja stars" />
                        <img className="shurik2" src={Shurikens} alt="ninja stars" />
                    </div>
                    <div className="packageInfo">
                        Ninja shurikens very hard to master and yet it gives a fast clean death.
                    </div>
                    <p><span>2500$</span></p>
                    <button className="btn-dark btn-lg">Purchase</button>
                </div>
                <div className="swordPackage col-2">
                    <h3>sword</h3>
                    <div className="packageSwordImage">
                        <img className="katana" src={katanaSword} alt="ninja sword" />
                    </div>
                    <div className="packageInfo">
                        The highest honorable way to die is by a ninja sword, it's fast and quiet but it can be very dirty.
                    </div>
                    <p><span>3500$</span></p>
                    <button className="btn-dark btn-lg">Purchase</button>
                </div>
                <div className="poisionPackage col-2">
                    <h3>poison</h3>
                    <div className="packagePoisionImage">
                        <div className="poisionBackground"></div>
                        <img className="poison" src={poison} alt="ninja poison" />
                    </div>
                    <div className="packageInfo">
                        Ninja ability to sneak is vital, the poison will hit your enemy with a surprise and a slowly death.
                    </div>
                    <p><span>3500$</span></p>
                    <button className="btn-dark btn-lg">Purchase</button>
                </div>
                <div className="sushiPackage col-2">
                    <h3>Sushi</h3>
                    <div className="packageSushiImage">
                        
                        <img className="sushiRolls" src={sushiRolls} alt="ninja poison" />
                        <img className="sushiSticks" src={sushiSticks} alt="ninja poison" />
                    </div>
                    <div className="packageInfo">
                        Let us decide the way to go and sit back and enjoy our very nutritious fresh sushi package while we take care the problem.
                    </div>
                    <p><span>3500$</span></p>
                    <button className="btn-dark btn-lg">Purchase</button>
                </div>
            </div>
            
        </div>
        </>
    )
}