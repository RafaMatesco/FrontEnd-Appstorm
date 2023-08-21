import styled from "styled-components";
import { Userprops } from "../types/UserType";

export default function Perfil(props:{DadosPerfil: Userprops, DadosRepos: any}){
    var DadosPerfil = props.DadosPerfil;
    var DadosRepos = props.DadosRepos;
    var tamanhoDadosRepos = (props.DadosRepos).length

    const MostraRepos = ()=> {
        return(
                DadosRepos.map((repository:any) => {
                    return(
                        <div>
                            <ul>
                                <h2>{repository.name}</h2>
                                <li>Descrição: {repository.description}</li>
                                <li>Linguagem: <i>{repository.language}</i></li> <br/> <br/>
                                <a href={repository.html_url} target="_blank">Ver no GitHub</a>
                            </ul>
                            
                        </div>
                    )
                })
        )
    }
    const SaveFavoritos = ()=> {
        var names = localStorage.getItem("name")

        if(names != null){
            localStorage.setItem("name", names+ " " +  DadosPerfil.login)
        }else{
            localStorage.setItem("name", DadosPerfil.login)
        }
        alert("favorito salvo!")   
        
    }

    const UserBox = styled.div`
        display: grid;
        grid-column-gap: 10px;
        grid-template-columns: 50% 50%;
        grid-template-rows: repeat(${Math.round(tamanhoDadosRepos/2)+1}, 1fr);
        grid-template-rows: minmax(150px, 320px); 

        min-width: auto;
        min-height: auto;
        max-width: 30vw;

        padding: 2%;
        margin: auto;
        margin-top: 2%;

        border-radius: 5px;
        background-color: #4a4a4a;

        img{
            border-radius: 20px;
            max-height: 60%;
        }
        button, a{
            background-color: white;
            color: black;
        }
    `;

    const MostraPerfil = ()=> {
        return (
                <UserBox>
                    <div>
                        <img src={DadosPerfil.avatar_url} alt="Imagem de perfil"></img> <br />
                        Seguidores: {DadosPerfil.followers} <br />
                        Seguindo: {DadosPerfil.following} <br /> <br />
                        Repos públicos: {DadosPerfil.public_repos}
                    </div>
                    <div>
                        <h3>{DadosPerfil.name}</h3> 
                        Bio: <br />{DadosPerfil.bio} <br/><br/>
                        Localização: <br />{DadosPerfil.location} <br/>
                        <button onClick={()=> SaveFavoritos()}>Favoritar</button> <br/> <br/>
                        <a href={DadosPerfil.html_url} target="_Blank">Perfil No GitHub</a>
                    </div>
                    {MostraRepos()}
                </UserBox>
        )
    }

    return(
        <>
            {MostraPerfil()}
        </>
    )
} 