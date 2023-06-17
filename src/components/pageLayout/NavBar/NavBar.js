import imageLogo from ".././../../images/imageLogo.svg"
import "./NavBar.css"


export default function NavBar(){

//close the navbar dropdown menu when not in focus
    window.onload=function(){
        document.addEventListener("click", function(event){
            if(!event.target.closest("#mainNavbar") && document.getElementById("navbarCollapse").classList.contains('show')){
                console.log("testing: " + event.target.closest("#mainNavbar"));
                document.getElementById('hamburgerMenu').click();
            }
        });
    }



    return(
        <>
        <nav id="mainNavbar" className="navBarContainer navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="navbarBox container-fluid">
                <div className="navbar-brand">
                    <img className="imageLogo" src={imageLogo} alt="imageLogo" />
                    <h3>
                        ssassin My Neighbor
                    </h3>
                </div>
                <button id="hamburgerMenu" type="button" className="menuBtn navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="menuTglBtn navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbarOpen navbar-nav">
                        <a href="/" className="nav-link active">Home</a>
                        <a href="/aboutUs" className="nav-link">About Us</a>
                        <a href="/packages" className="nav-link">Packages</a>
                        <a href="/statistics" className="nav-link">Statistics</a>
                        <a href="/ourCustomers" className="nav-link">Our Customers</a>
                        <a href="/contactUs" className="nav-link">Contact Us</a>
                        
                    </div>
                </div>
                
            </div>
        </nav>
        </>
    );

    
}