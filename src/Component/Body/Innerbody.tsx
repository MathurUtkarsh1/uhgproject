import arrowImage from './uhg.jpg';
import './Innerbodycss.css';
import { FaArrowRight } from 'react-icons/fa';
export default function Innerbody() {
    return (
        //   <div style={{backgroundImage:`url(${arrowImage})`}}>
        //       {/* <div style={{backgroundImage:{arrowImage}}}>  */}
        //       {/* <img src={arrowImage} alt="" style={{height:"100%",width:"100%"}}/> */}
        // </div>
        <div className="container">
            <img src={arrowImage} alt="Snow" style={{ width: "100%" }} />
            <div className='writeable' style={{ position: "absolute", top: "22%", left: "10%" }}>
                <h1 >Our 2022 <br /> Sustainability Report</h1> 
                <h3> At UnitedHealth Group, sustainability <br />
                    is a foundation to fulfill our mission <br />
                    and deepen our societal impact
                    by <br /> improving the health and
                    well‑being <br /> of the people we serve.</h3> <br />
                    <button className='button' > <h2> <b>Learn more <FaArrowRight></FaArrowRight></b></h2> </button>
            </div>
            <div className='imgdetail' >
            <h1 >Our 2022 <br /> Sustainability Report</h1> 
                <h3> At UnitedHealth Group, sustainability <br />
                    is a foundation to fulfill our mission <br />
                    and deepen our societal impact
                    by <br /> improving the health and
                    well‑being <br /> of the people we serve.</h3> <br />
                    <button className='button' > <h2> <b>Learn more </b></h2> </button>
            </div>
        </div>
    );
}