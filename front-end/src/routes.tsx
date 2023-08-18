import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import PerfilUser from "./pages/PerfilUser";

function Rotas(){
   return(
       <Routes>
           <Route Component = { LandingPage }  path="/" />
           <Route Component = { PerfilUser }  path="/Perfil" />
       </Routes>
   )
}

export default Rotas;