import {useNavigate } from 'react-router-dom';
import React from 'react';
import { useState} from 'react';

import { Userprops } from '../types/types';

import SearchBar from '../components/SearchBar';
import Perfil from '../components/Perfil';

import GitHubService from '../services/GitHubService';

export default function LandingPage(){
    const [UserDigitado, setUserDigitado] = useState({user:""})
    const [User, setUser] = useState<Userprops>({name:"", location:"", bio:"", public_repos:"", followers:"", following:"", avatar_url:""})

    const navigate = useNavigate()
    
    const LoadUser = async ()=> {
        if(UserDigitado != null){
            const res = await GitHubService.getData(UserDigitado.user)
            const data = res.data
            const {name, location, bio, public_repos, followers, following, avatar_url} = data
            const Userdata: Userprops = {
                name,
                location,
                bio,
                public_repos,
                followers,
                following,
                avatar_url
            }
            setUser(Userdata)
        }
        
    }

    return (
        <SearchBar>
            <label htmlFor="username">GitRepos</label> <br/>
            <input type="text" id='username' placeholder='username'
                onChange={(event)=> setUserDigitado({...UserDigitado, user: event.target.value})}
            /> <br/>
            <button type='submit' onClick={()=> LoadUser()}>Pesquisar</button>
            {User &&  <Perfil dadosPerfil={User}></Perfil>}
        </SearchBar>
    )
}

