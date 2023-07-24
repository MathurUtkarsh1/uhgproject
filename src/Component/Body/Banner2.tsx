import './Innerbodycss.css'
export default function Banner2(){
    return (
        <div className="banners" >
           <p><h3>Recommended</h3>
           <h1 style={{fontSize:"2.7rem"}}>Q2 2023 Earnings Report</h1>
           <span style={{fontSize:"1.1rem"}}> Visit our Investor Relations section to hear our leaders discuss the company's results for the second quarter 2023. <br /> You will also find our earnings release and Form 8-K available for download.</span>
            <br /><br />

            <button> Read more</button>
            <a href="#"> <b>View press release</b>  </a>
           </p> 
        </div>
    )
}