import { useState, useEffect } from "react";
import '../Style/Cards.css';
export function Cards(){
const[Data, setData]=useState([]);
const[Score, setScore]=useState(0);
const[Clicked, setClicked]=useState([]);
const[BestScore, setBestScore]=useState(0);

function IncreaseScore(id){

    if(Clicked.includes(id)){
        setScore(0);
setClicked([]);

return;
    }
    setClicked(prev=>[...prev, id]);    
    
const NewScore=Score+1;
setScore(NewScore); 
  if(Score>BestScore){
  setBestScore(NewScore);
  }
   
       var newArray=[...Data];
       newArray.sort(()=>Math.random()-0.5);
    
    setData(newArray)
   
}

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character").then(resp=>resp.json()).then(d=>setData(d.results.slice(0, 8)))
    }, [])


    return (
   <>
  <div className="Title">
  <h1 className="game-name" > Mind Match:</h1>
  <h4>click every card only once. One repeat = <h3 className="game-over">game over!</h3></h4>
  </div>

  <div className="Score">
  <h3 > Score:{Score}</h3>
    <h3 > Highest Score: {BestScore}</h3>
  </div>
  
   
 
   {Data.map((e)=>{
   return ( 
    <>
   
    <button className="button" onClick={()=>IncreaseScore(e.id)}>  
          <img  className="card-image" src={e.image} alt="Rick and monty image"/>
          <h4 className="name"> {e.name}</h4>
    </button>
  
</>

   )
   })}
   </>
)
}


