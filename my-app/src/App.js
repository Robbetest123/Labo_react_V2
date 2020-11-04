import React, {useState} from "react";
import Myfrontpage from "./Myfrontpage";

import foto1 from './Pictures/BE_logo.png'
import foto2 from './Pictures/Logo_Anderlecht.jpg'

function App(){

  const[clubs, setClubs] = useState([
    {clubnaam: 'Belgian Red Devels', clubimage: foto1},
    {clubnaam: 'RSCA Anderlecht', clubimage: foto2}
  ]);

  return (
    <div>
      {clubs.map(club =>(
        <Myfrontpage clubnaam={club.clubnaam} clubimage={club.clubimage} />
      ))}
    </div>
  )
}

export default App;