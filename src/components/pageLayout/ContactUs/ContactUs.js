import "./ContactUs.css"


export default function ContactUs(){


    return (
        <>
            <div className="contactUsContainer container-fluid" >
                <div className="contactUsOpeningText">
                    <h1 className="text-center text-sm-3">Contact Us</h1>
                    <p className="text-center">Please feel free to contact us for any questions, we are here to make your choice easier.</p>
                </div>
                <div className="formBox d-flex justify-content-center align-items-center">
                    <form className="was-validated" noValidate>
                        <div className="form-floating">
                            <input type="text" className="firstNameInput form-control mb-3 no-validate" id="floatingInputFirstName" placeholder="First Name"/>
                            <label for="floatingInputFirstName" className="form-label">First Name:</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="lastNameInput form-control mb-3 no-validate" id="floatingInputLastName" placeholder="Last Name"/>
                            <label for="floatingInputLastName">Last Name:</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" className="EmailInput form-control mb-3" id="floatingInputEmail" placeholder="Email" required/>
                            <label for="floatingInputEmail">Email:</label>
                            <div class="valid-feedback"></div>
                            <div class="invalid-feedback mb-3">Please fill out your email.</div>
                        </div>
                        <div className="form-floating">
                            <input type="number" className="PhoneInput form-control mb-3 no-validate" id="floatingInputPhone" placeholder="Phone number"/>
                            <label for="floatingInputPhone">Phone Number:</label>
                        </div>
                        <select className="form-select mb-3 no-validate">
                            <option selected>Which package are you interested?</option>
                            <option value="Shurikens">Shurikens</option>
                            <option value="sword">Sword</option>
                            <option value="poision">Poison</option>
                            <option value="Sushi">Sushi</option>
                        </select>
                        <div className="col text-center">
                            <button class="submitBtn btn btn-dark text-center" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        
        </>
    )
}