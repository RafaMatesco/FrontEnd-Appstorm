import React from 'react';
import { useState} from 'react';

import { Userprops } from '../types/UserType';

import SearchBar from '../components/SearchBar';
import Perfil from '../components/Perfil';

import GitHubService from '../services/GitHubService';

export default function LandingPage(){
    const [UserDigitado, setUserDigitado] = useState({user:""})
    const [User, setUser] = useState<Userprops | null>({name:"", location:"", bio:"", public_repos:"", followers:"", following:"", avatar_url:"", login:""})
    const [Repos, setRepos] = useState()
    const [isVisible, setIsVisible] = useState(false); // Estado para controlar a visibilidade do elemento perfil
    const [error, setError] = useState(false)
    
    async function CarregaDadosUser(username:string){
        return await GitHubService.getUserData(username)
    }
    async function CarregaDadosRepos(username:string){
        return await GitHubService.getReposData(username)
    }

    const LoadDados = async ()=> {
        setError(false)
        setUser(null)

        if(UserDigitado != null){
            try{
                const ReqUser = await CarregaDadosUser(UserDigitado.user)
                const ReqRepos = await CarregaDadosRepos(UserDigitado.user)
                const dadosUser = ReqUser.data
                const dadosRepos = ReqRepos.data

                const {name, location, bio, public_repos, followers, following, avatar_url, login} = dadosUser
                const Userdata: Userprops = {
                    name,
                    location,
                    bio,
                    public_repos,
                    followers,
                    following,
                    avatar_url,
                    login
                }
                setUser(Userdata)
                setRepos(dadosRepos)
            }catch{
                setError(true)
            }

            const toggleVisibility = () => {
                setIsVisible(!isVisible); // Inverte o estado de visibilidade
            };
            if(isVisible === false){
                toggleVisibility()
            }
        }
        
    }

    return (
        <SearchBar>
            <label htmlFor="username">GitRepos</label> <br/>
            <input type="text" id='username' placeholder='username'
                onChange={(event)=> setUserDigitado({...UserDigitado, user: event.target.value})}
            /> <br/>
            <button type='submit' onClick={()=> LoadDados()}>Pesquisar</button>
            {isVisible && User && <Perfil DadosPerfil={User} DadosRepos={Repos}></Perfil>}
            {error && <><br/>Usuário não encontrado!</>}
        </SearchBar>
    )
}

