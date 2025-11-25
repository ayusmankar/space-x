import React  from "react";
import Navbar from "./Navbar"
import Image from "./Image"
import Videocontainer from "./Videocontainer";
import Footer from "./Footer"
import "./style.css"
const Home=()=>{
    const item = [
        {
            image : <img src="https://spacex1-clone.netlify.app/assets/rocket-fire-D5D81tSi.jpg" alt="" width={1980} height={1000} />,
             tittle : "RECENT LAUNCH",
            name : "SXM-9 MISSION",
            btntext : "WATCH"
        },
        {
            image : <img src="https://spacex1-clone.netlify.app/assets/stars-DYuU5mOz.jpg" alt="" width={1980} height={1000} />,
             tittle : "RECENT LAUNCH",
            name : "STARLINK MISSION",
            btntext : "REWATCH"
        },
        {
            image : <img src="https://spacex1-clone.netlify.app/assets/Starlink-Bruuxwb4.jpg" alt="" width={1980} height={1000}/>,
             tittle : "RECENT LAUNCH",
            name : "STARLINK MISSION",
            btntext : "REWATCH"
        },
        {
            image : <img src="https://spacex1-clone.netlify.app/assets/astronaut-PR2OUO69.jpg" alt="" width={1980} height={1000} />,
             tittle : "RECENT LAUNCH",
            name : "ADVANCING HUMAN SPACEFLIGHT",
            btntext : "LEARN MORE"
        },
        {
            image : <img src="https://spacex1-clone.netlify.app/assets/launch-CIKREtYa.jpg" alt="" width={1980} height={1000} />,
             tittle : "RECENT LAUNCH",
            name : "TO MAKE LIFE MULTIPLANETARY ",
            btntext : "LEARN MORE"
        }
    ]
    return(
        
        <div className="home">  
            
            <Videocontainer/>
            <Navbar/>
            {
                item.map((item,index)=>{
                    return(
                        <div key={index}>
                            <Image data={item}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Home
