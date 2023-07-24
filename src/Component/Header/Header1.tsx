import Header2 from "./Header2";
import './Hamburger.css'
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x != null)
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
}
export default function Header1() {
    return (
        // <div>
        //     <div style={{display:"inline-flex"}}>
        //     <img src="https://th.bing.com/th/id/OIP.yf9qtMxB52jNMLr6SGM2oQHaEK?pid=ImgDet&rs=1" alt="UnitedHeathGroup.img" style={{marginLeft:"20px",marginTop:"0px",height:"100px",width:"200px"}} />
        //     <div style={{width:"80%", height:"30px",border:"0.5px solid red",position:"absolute",right:"0%"}}></div>
        //     </div>
        // </div>


        <div>
            <div style={{ display: "flex", alignItems: "center",border: "0.5px solid red", }}>
                <Header2></Header2>
                <img src="https://th.bing.com/th/id/OIP.yf9qtMxB52jNMLr6SGM2oQHaEK?pid=ImgDet&rs=1"
                    alt="UnitedHealthGroup"
                    style={{marginLeft:"20px",marginTop:"0px",height:"100px",width:"200px" }}
                />&nbsp; &nbsp;
                <div
                    style={{
                        flex: "1",
                        height: "30px",
                        border: "0.5px solid red",
                        position: "relative",

                       // width:"100%",
                         //top:"0",
                        // right:"0"
                    }}
                >
                     <body style={{float:"right"}}>
                    <div className="topnav" id="myTopnav">
                        {/* <a href="#" style={{backgroundColor:"#04AA6D"}}>&nbsp;&nbsp;&nbsp;</a> */}
                                              
                        <a href="/" >Home</a> &nbsp;
                        <a href="/about">About</a> &nbsp;
                        <a href="/services">Services</a> &nbsp;
                        <a href="/contact">Contact</a> &nbsp;
                        <a href="/badge">Student</a> &nbsp;
                        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                            {/* <i className="fa fa-bars" aria-hidden="true"></i> */}
                            <div className="menu__line" ></div>
                            <div className="menu__line"></div>
                            <div className="menu__line"></div>
                        </a>
                    </div>
                </body>
                </div>
            </div>
        </div>

        
    );
}   