import "./ContactUs.css"


export default function ContactUs(){


    function handleSubmit(event){
        event.preventDefault();

        let formPage = document.querySelector(".formPage")
        let submitCompletePage = document.querySelector(".fromSubmitedComplete")
        formPage.style.opacity = "0"
        submitCompletePage.style.opacity = "1"

        setTimeout(()=>{
            formPage.style.display = "none"
            submitCompletePage.style.display = "block"
        },2000)
    }

    return (
        <>
            <div className="contactUsContainer container-fluid" >
                <div className="contactUsOpeningText">
                    <h1 className="text-center text-sm-3">Contact Us</h1>
                    <p className="text-center">Please feel free to contact us for any questions, we are here to make your choice easier.</p>
                </div>
                <div className="formPage">
                    <div className="formBox d-flex justify-content-center align-items-center">
                        <form className="was-validated" onSubmit={handleSubmit} noValidate>
                            <div className="form-floating">
                                <input type="text" className="firstNameInput form-control mb-3 no-validate" id="floatingInputFirstName" placeholder="First Name"/>
                                <label htmlFor="floatingInputFirstName" className="form-label">First Name:</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="lastNameInput form-control mb-3 no-validate" id="floatingInputLastName" placeholder="Last Name"/>
                                <label htmlFor="floatingInputLastName">Last Name:</label>
                            </div>
                            <div className="form-floating">
                                <input type="email" className="EmailInput form-control mb-3" id="floatingInputEmail" placeholder="Email" required/>
                                <label htmlFor="floatingInputEmail">Email:</label>
                                <div className="valid-feedback"></div>
                                <div className="invalid-feedback mb-3">Please fill out your email.</div>
                            </div>
                            <div className="form-floating">
                                <input type="number" className="PhoneInput form-control mb-3 no-validate" id="floatingInputPhone" placeholder="Phone number"/>
                                <label htmlFor="floatingInputPhone">Phone Number:</label>
                            </div>
                            <select className="form-select mb-3 no-validate">
                                <option defaultValue>Which package are you interested?</option>
                                <option value="Shurikens">Shurikens</option>
                                <option value="sword">Sword</option>
                                <option value="poision">Poison</option>
                                <option value="Sushi">Sushi</option>
                            </select>
                            <div className="col text-center">
                                <button className="submitBtn btn btn-dark text-center" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="fromSubmitedComplete">
                    <h1>Form was submitted Successfully</h1>
                </div>
            </div>
        
        </>
    )
}