import React, {useState} from "react";
import Myfrontpage from "./Myfrontpage";
import Players from "./players";

import foto1 from './Pictures/BE_logo.png'
import foto2 from './Pictures/Logo_Anderlecht.jpg'
import foto3 from './Pictures/ROMLUK.jpg'
import foto4 from './Pictures/kdb.jpg'
import foto5 from './Pictures/kompany.jpg'

function App(){
//clubs toevoegen
  const[clubs, setClubs] = useState([
    {clubnaam: 'Belgian Red Devels', clubimage: foto1},
    {clubnaam: 'RSCA Anderlecht', clubimage: foto2}
  ]);

  //spelers toevoegen
  const[spelers, setspelers] = useState([
    {spelersnaam: 'Romelu Lukaku', spelersfoto: foto3,clubnaam: 'Belgian Red Devels'},
    {spelersnaam: 'Kevin De Bruyne', spelersfoto: foto4, clubnaam: 'Belgian Red Devels'},
    {spelersnaam: 'Vincent Kompany' , spelersfoto: foto5, clubnaam: 'RSCA Anderlecht'}
  ]);



  //nieuwe pagina aanmake
  const [page, setPage] = useState(null)
  function setNextPage(clubnaam) {
    setPage(clubnaam)
  }




  function switchPage(page){
    switch(page){
      case 'Belgian Red Devels': 
      return(
         <div>
           <h1>hsgfqks</h1>
          {spelers.map(player =>(
              <Players spelersnaam={player.spelersnaam} spelersfoto={player.spelersfoto} key={player.spelersnaam} clubnaam={player.clubnaam} page={page}/>
          ))}
        </div>
      )
      case 'RSCA Anderlecht': 
      {console.log(page)}
      return(
        <div>
          <h1>hsgfqks</h1>
         {spelers.map(player =>(
             <Players spelersnaam={player.spelersnaam} spelersfoto={player.spelersfoto} key={player.spelersnaam} clubnaam={player.clubnaam} page={page}/>
         ))}
       </div>
     )
      
          
      default: break;
    }
  }
  
  

  return (
    <div>
      {!page && (<div>
        {clubs.map(club =>(
          <Myfrontpage selectFunction={e => setNextPage(club.clubnaam)} key={club.clubnaam}
           clubnaam={club.clubnaam} clubimage={club.clubimage} />
      ))} 
      </div>)}

      {page && (<div>
        
      {console.log(page)}
        <div>
            {switchPage(page)}
        </div>






      </div>)}

      
    </div>
  )
}

export default App;