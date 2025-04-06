import { useState } from "react";
import img1 from "./assets/img1.jpg";
function Nav1(props) {

   const [Purchase, setPurchase] =useState(false);


    function eve(){
        setPurchase(true);  
        console.log("purchased");
    }

    return (
       
          <div className=" card">
            <img src={img1} alt="" />
            <p>name: {props.name}</p>   
            <p>Price:{props.name}</p>          
            <button onClick={eve}>Buy</button>    
            
            <p>{Purchase ? "Already purchased": "Buy now"}</p>         
        </div>
        
    );
}

        Nav1.defaultProps={
            name:"haridefa",
        }
export default Nav1;


