import React from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';

import GitHubService from './services/GitHubService';

function App() {

  const [User, setUser] = useState([])
  const [UserDigitado, setUserDigitado] = useState({user:""})

  var Pesquisado: boolean = false

  function GetData(){
    GitHubService.getData(UserDigitado.user)
    .then((dado:any)=>{
      Pesquisado = true
      console.log(dado)
      setUser(dado)
    }) 
  }

  const MostrarUserPerfil = ()=>{
    if (Pesquisado) {
      return(
          <p>Pesquisado</p>
        )
    }else{
      return(
        <p>Não pesquisado</p>
      )
    }
      
  }

  return (
    <body>
      <SearchBar>
        <label htmlFor="username">Nome do usuário</label> <br/>
        <input type="text" id='username'
          onChange={(event)=> setUserDigitado({...UserDigitado, user: event.target.value})}
        /> <br/>
        <button type='submit' onClick={()=> GetData()}>Pesquisar</button>
      </SearchBar>

      <div>
        {
          MostrarUserPerfil()
        }
      </div>

    </body>
  );
}

export default App;
