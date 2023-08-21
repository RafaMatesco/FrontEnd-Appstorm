import React from 'react';
import { useState} from 'react';

import { Userprops } from '../types/UserType';

import SearchBar from '../components/SearchBar';
import Perfil from '../components/Perfil';

import GitHubService from '../services/GitHubService';

export default function LandingPage(){
    const [UserDigitado, setUserDigitado] = useState({user:""})
    const [User, setUser] = useState<Userprops | null>({name:"", location:"", bio:"", public_repos:"", followers:"", following:"", avatar_url:"", login:"", html_url:""})
    const [Repos, setRepos] = useState()
    const [isVisible, setIsVisible] = useState(false)
    const [FavsVisible, setFavsVisible] = useState(false)
    const [error, setError] = useState(false)
    
    async function CarregaDadosUser(username:string){
        return await GitHubService.getUserData(username)
    }
    async function CarregaDadosRepos(username:string){
        return await GitHubService.getReposData(username)
    }

    const LoadDados = async ()=> {
        //localStorage.clear()
        setError(false)
        setUser(null)

        if(UserDigitado != null){
            try{
                const ReqUser = await CarregaDadosUser(UserDigitado.user)
                const ReqRepos = await CarregaDadosRepos(UserDigitado.user)
                const dadosUser = ReqUser.data
                const dadosRepos = ReqRepos.data

                const {name, location, bio, public_repos, followers, following, avatar_url, login, html_url} = dadosUser
                const Userdata: Userprops = {
                    name,
                    location,
                    bio,
                    public_repos,
                    followers,
                    following,
                    avatar_url,
                    login,
                    html_url
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

    const LoadFavorito = async (favorito: any)=> {
        setError(false)

        if(UserDigitado != null){
            try{
                const ReqUser = await CarregaDadosUser(favorito)
                const ReqRepos = await CarregaDadosRepos(favorito)
                const dadosUser = ReqUser.data
                const dadosRepos = ReqRepos.data

                const {name, location, bio, public_repos, followers, following, avatar_url, login, html_url} = dadosUser
                const Userdata: Userprops = {
                    name,
                    location,
                    bio,
                    public_repos,
                    followers,
                    following,
                    avatar_url,
                    login,
                    html_url
                }
                setUser(Userdata)
                setRepos(dadosRepos)
            }catch{
                setError(true)
            }
        }
        
    }

    var favoritos = localStorage.getItem("name")
    var newFavoritos: any
    var excluido: boolean = false
    const excluiFavorito = (removido: string)=> {
        if(favoritos != null){
            newFavoritos = favoritos.replace(' '+removido, '')
            newFavoritos = favoritos.replace(removido+' ', '')
            newFavoritos = favoritos.replace(removido, '')
            localStorage.clear()
            localStorage.setItem("name", newFavoritos)
            excluido = true
            setFavsVisible(false)
        }
    }

    
    const MostrarFavoritos = () => {
        if(favoritos != null){
            if(excluido === true){
                favoritosArray = newFavoritos
            }
            var favoritosArray = favoritos.split(" ")
                return(
                    favoritosArray.map(favorito => {
                        if(favorito != ''){
                            return(
                                <>
                                <button onClick={()=> {
                                            LoadFavorito(favorito)
                                        }
                                }>{favorito}</button> <button onClick={()=> {excluiFavorito(favorito)}}>Remover</button> <br/></>
                            )
                        }else{
                            return(
                                <></>
                            )
                        }
                        
                    }) 
                )
        }
    }    

    const controleFavsVisibility = ()=> {
        setFavsVisible(!FavsVisible)
        
    }

    return (
        <SearchBar>
            <label htmlFor="username">GitRepos</label> <br/>
            <input type="text" id='username' placeholder='username'
                onChange={(event)=> setUserDigitado({...UserDigitado, user: event.target.value})}
            /> <br/>
            <button type='submit' onClick={()=> LoadDados()}>Pesquisar</button> <br/> <button onClick={()=> {controleFavsVisibility()}}>Favoritos</button>
            {FavsVisible && <p>{MostrarFavoritos()}</p>}
            {isVisible && User && <Perfil DadosPerfil={User} DadosRepos={Repos}></Perfil>} <br />
            {error && <><br/>Usuário não encontrado!</>}
        </SearchBar>
    )
}

