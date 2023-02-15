import "./Main.css"
import ninjaRun from "../../../images/ninjaRun.png"
import neighbore from "../../../images/neighbore.png"
import ninjaStand from "../../../images/ninjaStand.png"
import ninjaStar from "../../../images/ninjaStar2.png"


export default function Main(){ 

    const startAnimation = ()=>{
        console.log("neigbore animation on");

        document.getElementById("mainBox").style.setProperty('--animationSqrBefore', 'flashLeft 3s cubic-bezier(1, -0.25, 0, 1.19) 0.3s')
        document.getElementById("mainBox").style.setProperty('--animationSqrAfter', 'flashRight 3s cubic-bezier(1, -0.25, 0, 1.19) 1s')
        document.getElementById("neighbore").classList.add("neighboreActive")
        document.getElementById("ninjaStand").classList.add("ninjaStandActive")
        document.getElementById("ningaRun").classList.add("ningaRunActive")
    }

    return (
        <>
        <div id="mainBox" className="mainBox container-fluid">
            <div className="animationBox">

                <div id="animationSqr" onMouseOver={startAnimation} className="animationSqr">
                    <img id='neighbore' className='neighbore' src={neighbore} alt="ninja run" />

                    <img id="ninjaStand" className='ninjaStand' src={ninjaStand} alt="ninja run" />

                    <img id='ningaRun'  className='ningaRun' src={ninjaRun} alt="ninja run" />
                </div>
                
            </div>

            <div className="WelcomeScreenContainer container-fluid">
                <div className="welcomeScreenBox row align-items-center justify-content-center">
                    <div className="ninjaStarsLeft col-2 align-self-center justify-content-center">
                        <div className="ninjaStars ">
                            <img className="ninjaStar1 img-fluid" src={ninjaStar} alt="ninja star" />
                            <img className="ninjaStar2 img-fluid" src={ninjaStar} alt="ninja star" />
                        </div>
                    </div>
                    <div className="welcomeScreenText  col-8 align-self-start">
                        <h1 className="WelcomeTitle">Welcome</h1>
                        <p>Has your movie night been ruined cause of late karaoke? Did you ever wake up earlier cause of drilling above you? Did your stairway become your neighbor storage room? <span><br/>We Know your pain...</span> and we are here at your service..</p>
                        <h3>Check out our packages</h3>
                        <a href="/packages" className="packagesBtn btn">Packages</a>
                    </div>
                    <div className="ninjaStarsRight col-2 align-self-center justify-content-center">
                        <div className="ninjaStars">
                            <img className="ninjaStar2 img-fluid" src={ninjaStar} alt="ninja star" />
                            <img className="ninjaStar1 img-fluid" src={ninjaStar} alt="ninja star" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    );


}

