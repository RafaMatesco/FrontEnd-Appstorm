import {useNavigate } from 'react-router-dom';
import React from 'react';
import { useState} from 'react';

import SearchBar from '../components/SearchBar';

export default function LandingPage(){
    const [UserDigitado, setUserDigitado] = useState({user:""})
    
    const navigate = useNavigate()
    
    function SendData(){
        localStorage.clear()
        localStorage.setItem("username", UserDigitado.user)

        navigate("/Perfil")
    }

    return (
        <SearchBar>
            <label htmlFor="username">Nome do usuário</label> <br/>
            <input type="text" id='username'
                onChange={(event)=> setUserDigitado({...UserDigitado, user: event.target.value})}
            /> <br/>
            <button type='submit' onClick={()=> SendData()}>Pesquisar</button>
        </SearchBar>
    )
}

