
import Nav1 from './Nav1.jsx';

function CardList(){
    const cardlist = [
       { name:"html",
        price:89},
        { name:"css",
          price:80}

    ];
    const clist=cardlist.map((cardlist, Index) =><Nav1 key={Index} name={cardlist.name} price={cardlist.price}/>)
    return(<>
      {clist}
      
    </>);
}

export default CardList;