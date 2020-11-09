import React, {useState} from "react";
import Myfrontpage from "./Myfrontpage";
import Players from "./players";

import foto1 from './Pictures/BE_logo.png'
import foto2 from './Pictures/Logo_Anderlecht.jpg'
import foto3 from './Pictures/ROMLUK.jpg'
import foto4 from './Pictures/kdb.jpg'
import foto5 from './Pictures/kompany.jpg'
import foto6 from './Pictures/courtois.jpg'
import foto7 from './Pictures/frankrijk.png'
import foto8 from './Pictures/griezman.jpg'
import foto9 from './Pictures/mbappe.jpg'
import foto10 from './Pictures/pogba.jpg'
import foto11 from './Pictures/verschaeren.jpg'



function App(){
//clubs toevoegen
  const[clubs, setClubs] = useState([
    {clubnaam: 'Belgian Red Devels', clubimage: foto1},
    {clubnaam: 'RSCA Anderlecht', clubimage: foto2},
    {clubnaam: 'Les Bleus', clubimage: foto7}
  ]);

  //spelers toevoegen
  const[spelers, setspelers] = useState([
    {spelersnaam: 'Romelu Lukaku', spelersfoto: foto3,clubnaam: 'Belgian Red Devels'},
    {spelersnaam: 'Kevin De Bruyne', spelersfoto: foto4, clubnaam: 'Belgian Red Devels'},
    {spelersnaam: 'Thibaut Courtois', spelersfoto: foto6, clubnaam: 'Belgian Red Devels'},


    {spelersnaam: 'Vincent Kompany' , spelersfoto: foto5, clubnaam: 'RSCA Anderlecht'},
    {spelersnaam: 'Yari Verschaeren' , spelersfoto: foto11, clubnaam: 'RSCA Anderlecht'},


    {spelersnaam: 'Kylian Mbappé' , spelersfoto: foto9, clubnaam: 'Les Bleus'},
    {spelersnaam: 'Paul Pogba' , spelersfoto: foto10, clubnaam: 'Les Bleus'},
    {spelersnaam: 'Antoine Griezmann' , spelersfoto: foto8, clubnaam: 'Les Bleus'},
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
          {spelers.map(player =>(
              <Players spelersnaam={player.spelersnaam} spelersfoto={player.spelersfoto} key={player.spelersnaam} clubnaam={player.clubnaam} page={page}/>
          ))}
        </div>
      )
      case 'RSCA Anderlecht': 
      {console.log(page)}
      return(
        <div>
         {spelers.map(player =>(
             <Players spelersnaam={player.spelersnaam} spelersfoto={player.spelersfoto} key={player.spelersnaam} clubnaam={player.clubnaam} page={page}/>
         ))}
       </div>
     )

     case 'Les Bleus': 
     {console.log(page)}
     return(
       <div>
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