import './Footercss.css'
import {BsArrowUpRight} from "react-icons/bs";
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
export const Footers=()=>{
    return (
        <div className="foot">
            {/* <h1>UHG</h1> */}  
            <h1>UHG</h1> 
            <ul className='unorderedFirst'>
            <li><u>Contact Us</u></li>  
            <li><u>Suppliers</u></li> 
            <li><u>Privacy Policy</u></li> 
            <li><u>Term of Use</u></li> 
            <li><u>Site Map</u></li> 
            <li><u>United Health Foundation</u></li>
            </ul>
            
            <ul className='unorderedSec'> 
            <li><u>Careers</u><BsArrowUpRight/></li> 
            <li><u>Optum</u><BsArrowUpRight/></li> 
            <li><u>UnitedHealthCare</u><BsArrowUpRight/></li> 
            </ul>  

            <span className='copyright'>©2023 UNITEDHEALTH GROUP. ALL RIGHTS RESERVED.</span>   
            <span className='follow'>Follow Us.</span>
            <div className='handles'>
            <FaTwitter style={{borderRadius:"50%",border:"1.5px solid white",height:"6vh",width:"6vh"}}></FaTwitter> &nbsp; &nbsp;
            <FaLinkedin style={{borderRadius:"50%",border:"1.5px solid white",backgroundColor:"white",color:"black",height:"6vh",width:"6vh"}}></FaLinkedin> &nbsp; &nbsp;
            <FaFacebook style={{borderRadius:"50%",border:"1.5px solid white",backgroundColor:"white",color:"black",height:"6vh",width:"6vh"}} ></FaFacebook>
            </div>
            
                      
        </div>
    )
}