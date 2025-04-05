
import Nav1 from './Nav1.jsx';

function CardList(){
    const cardlist = [
       { name:"html",
        price:89}

    ];
    const clist=cardlist.map((cardlist) =><Nav1 name={cardlist.name} price={cardlist.price}/>)
    return(<>
      {clist}
    </>);
}

export default CardList;