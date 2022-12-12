import React from "react";
import In from "../utils/iconLinkedin.png";
import Gram from "../utils/iconInsta.png";


const NavBar = () => {

  const onLinkedin = (e) => {
    window.open('https://www.linkedin.com/in/jose-martin-mi%C3%B1o-b3956523a/', '_blank')
  }

  const onInsta = () => {
    window.open('https://www.instagram.com/josee.mino/', '_blank')
  }


  return (
    <div>
      <nav class="navbar bg-dark text-light mb-5">
        <div class="container-fluid">
          <h3 class="text-light">Prediccion Meteorologica</h3>
          <div>
            <img src={In} alt=".." onClick={onLinkedin} style={{cursor: 'pointer'}}/>
            <img src={Gram} alt=".." onClick={onInsta} style={{cursor: 'pointer'}}/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
