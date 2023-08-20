import styled from "styled-components";
import { Userprops } from "../types/UserType";

export default function Perfil(props:{DadosPerfil: Userprops, DadosRepos: any}){
    var DadosPerfil = props.DadosPerfil;
    var DadosRepos = props.DadosRepos;
    var tamanhoDadosRepos = (props.DadosRepos).length

    console.log(Math.round(tamanhoDadosRepos/2))

    const MostraRepos = ()=> {
        return(
                DadosRepos.map((repository:any) => {
                    return(
                        <div>
                            <ul>
                                <u><h3>{repository.name}</h3></u>
                                <li>Descrição: {repository.description}</li>
                                <li>Linguagem: <i>{repository.language}</i></li>
                            </ul>
                            
                        </div>
                    )
                })
        )
    }

    const UserBox = styled.div`
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: repeat(${Math.round(tamanhoDadosRepos/2)+1}, 1fr);
        grid-template-rows: minmax(150px, 300px); 

        min-width: auto;
        min-height: auto;
        max-width: 30vw;

        padding: 2%;
        margin: auto;
        margin-top: 2%;

        border-radius: 5px;
        background-color: #4a4a4a;

        img{
            border-radius: 500px;
            max-height: 60%;
        }
    `;

    const MostraPerfil = ()=> {
        return (
                <UserBox>
                    <div>
                        <img src={DadosPerfil.avatar_url} alt="Imagem de perfil"></img> <br />
                        Followers: {DadosPerfil.followers} <br />
                        Following: {DadosPerfil.following} <br /> <br />
                        Repositórios públicos: {DadosPerfil.public_repos}
                    </div>
                    <div>
                        <h3>{DadosPerfil.name}</h3> 
                        Bio: <br />{DadosPerfil.bio} <br/><br/>
                        Localização: <br />{DadosPerfil.location}
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