import { Route, useNavigate, Routes } from "react-router-dom";

import Offers from "./Offers";

const About = () => {

    const navigate = useNavigate();

    return ( 
        <div className="content">

            <h2>About us</h2>

            <p>Cult Clothing Company came into existence in the year 1992. Essentially targeted at the domestic retail segment, we moved to Corporate Workwear and Uniforms in the year 1995. We are primarily manufacturers of all categories of casual and formal apparel.
            The best of inputs are used at our state of the art manufacturing facility at Sector 34 in Gurgaon to give you great quality garments and accessories. Our products come with the highest quality standards, which is the most important aspect all our customers expect from us. We are proud of our four-point quality check.
            </p>

            <p>Cult Clothing Company came into existence in the year 1992. Essentially targeted at the domestic retail segment, we moved to Corporate Workwear and Uniforms in the year 1995. We are primarily manufacturers of all categories of casual and formal apparel.
            The best of inputs are used at our state of the art manufacturing facility at Sector 34 in Gurgaon to give you great quality garments and accessories. Our products come with the highest quality standards, which is the most important aspect all our customers expect from us. We are proud of our four-point quality check.
            </p>
  
            <button onClick={() => navigate('/products')}>See our products</button>
            <Routes>
                 {/* http://localhost:3000/about/:id/offers */}
                <Route path="offers" element={<Offers/>}/>
            </Routes>
            
        </div>
            );
        }
 
export default About;