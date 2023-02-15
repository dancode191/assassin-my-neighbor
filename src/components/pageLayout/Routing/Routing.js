import { Routes, Route } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs.js";
import ContactUs from "../ContactUs/ContactUs.js";
import Main from "../Main/Main.js"
import OurCustomers from "../OurCustomers/OurCustomers.js";
import Packages from "../Packages/Packages.js";
import Statistics from "../Statistics/Statistics.js";
import "./Routing.css"


export default function Routing(){
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Main/>}  />
                <Route path="/aboutUs" element={<AboutUs/>}  />
                <Route path="/packages" element={<Packages/>}  />
                <Route path="/statistics" element={<Statistics/>}  />
                <Route path="/ourCustomers" element={<OurCustomers/>}  />
                <Route path="/contactUs" element={<ContactUs/>}  />
            </Routes>
        </div>

    );
}