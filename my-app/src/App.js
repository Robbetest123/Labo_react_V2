import React, {useState} from "react";
import Myfrontpage from "./Myfrontpage";

import foto1 from './Pictures/BE_logo.png'
import foto2 from './Pictures/Logo_Anderlecht.jpg'

function App(){

  const[clubs, setClubs] = useState([
    {clubnaam: 'Belgian Red Devels', clubimage: foto1},
    {clubnaam: 'RSCA Anderlecht', clubimage: foto2}
  ]);

  //nieuwe pagina aanmake
  const [page, setPage] = useState(null)
  function setNextPage(clubnaam) {
    setNextPage(clubnaam)
  }

  return (
    <div>
      {!page && (<div>
        {clubs.map(club =>(
          <Myfrontpage selectFunction={e => setNextPage(clubs.clubnaam)} key={clubs.clubnaam}
           clubnaam={club.clubnaam} clubimage={club.clubimage} />
      ))} 
      </div>)}

      {page && (<div>
          <h1 >ge zijt er</h1>
      </div>)}

      
    </div>
  )
}

export default App;