import img1 from "./assets/img1.jpg";
function Nav1(props) {
 function eve(){
    console.log("click");
 }
    return (
       
          <div className=" card">
            <img src={img1} alt="" />
            <p>name: {props.name}</p>   
            <p>Price:{props.name}</p>          
            <button onClick={()=>{console.log("click")}}>click</button>               
        </div>
        
    );}

Nav1.defaultProps={
    name:"haridefa",
}
export default Nav1;


