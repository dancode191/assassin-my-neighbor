import "./Statistics.css"

export default function Statistics(){

    function activeBar1(){
        let graph1 = document.getElementById("graph1")
        let barAct1 = document.getElementById("barAct1")
        let bar1 = document.getElementById("bar1")
        
        graph1.style.filter = 'blur(0px)';
        barAct1.textContent = '';
        bar1.classList.add("active1");
    }
    function activeBar2(){
        let graph2 = document.getElementById("graph2")
        let barAct2 = document.getElementById("barAct2")
        let bar2 = document.getElementById("bar2")

        graph2.style.filter = 'blur(0px)';
        barAct2.textContent = '';
        bar2.classList.add("active2");
    }
    function activeBar3(){
        let graph3 = document.getElementById("graph3")
        let barAct3 = document.getElementById("barAct3")
        let bar3 = document.getElementById("bar3")

        graph3.style.filter = 'blur(0px)';
        barAct3.textContent = '';
        bar3.classList.add("active3");
    }

    return(
        <>
        <div className="statisticsContainer container-fluid">
            <div className="statisticsBox row">
                <div className="StatisticsOpeningTextBox col-12 ">
                        <h1>Our Statistics</h1>
                        <p>Our service change lives, our results promise more than just solve your problem but also to give you higher quality of life, longer time with your loved ones and in general to be happier in your life. Look at out statistics and decide yourself. </p>
                </div>
            </div>
            <div className="statisticsGraphsBox row justify-content-around align-items-center">
                <div className="statisticsGraphs col-4 justify-content-center">
                    <div className="graph1Box">
                        <div id="graph1" className="graph1">
                            <div id="bar1" className="bar1"></div>
                        </div>
                    </div>
                    <h1 id="barAct1" className="barActivate1" onClick={activeBar1}>Show Me</h1>
                    <p className="graph1Text">People using our service see improvement of their life quality.</p>

                </div>
                
                <div className="statisticsGraphs col-4 justify-content-center">
                    <div className="graph2Box">
                        <div id="graph2" className="graph2">
                            <div id="bar2" className="bar2"></div>
                        </div>
                    </div>
                    <h1 id="barAct2" className="barActivate2" onClick={activeBar2}>Show Me</h1>
                    <p className="graph2Text">Population statistics show people using our service live longer.</p>
                </div>
                <div className="statisticsGraphs col-4 justify-content-center">
                    <div className="graph3Box">
                        <div id="graph3" className="graph3">
                            <div id="bar3" className="bar3"></div>
                        </div>
                    </div>
                    <h1 id="barAct3" className="barActivate3" onClick={activeBar3}>Show Me</h1>
                    <p className="graph3Text">Most people using our service report they are happier! And they love it!</p>
                </div>
                
            </div>
            <div className="closingTextBox row">
                        <p>So, what are you waiting for? Let us improve your life and choose now one of our <a className="statisticsPackageLink" href="/packages">packages</a>, you won't regret it! </p>
            </div>
        </div>
        </>
    )
}