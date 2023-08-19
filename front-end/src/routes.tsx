import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";

function Rotas(){
   return(
       <Routes>
           <Route Component = { LandingPage }  path="/" />
       </Routes>
   )
}

export default Rotas;