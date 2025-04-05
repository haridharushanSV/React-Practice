import img1 from "./assets/img1.jpg";
function Nav1(props) {
    return (
       
          <div className=" card">
            <img src={img1} alt="" />
            <p>name: {props.name}</p>   
            <p>Price:{props.name}</p>                         
        </div>
        
    );}

Nav1.defaultProps={
    name:"haridefa",
}
export default Nav1;


