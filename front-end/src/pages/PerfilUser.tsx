import { useState } from 'react';

import GitHubService from '../services/GitHubService';

import Perfil from '../components/Perfil';

export default function PerfilUser(){
    const [User, setUser] = useState([])

    var Username = localStorage.getItem("username");

    if(Username != null){
        GitHubService.getData(Username)
        .then((dado:any)=>{
          setUser(dado)
        })
    }

    const MostrarPerfil = ()=>{
      return(
            <Perfil dadosPerfil={User}/>
      )
    }

    return(
        <div>
          {
            MostrarPerfil()
          }
        </div>
    )
}

