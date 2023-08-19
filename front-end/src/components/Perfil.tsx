import styled from "styled-components";
import { Userprops } from "../types/types";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    max-width: 40vw;

    margin: auto;
    margin-top: 3%;

`;

const UserBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;

    min-width: 30vw;
    min-height: auto;

    padding: 3%;

    border-radius: 5px;
    background-color: #4a4a4a;

    img{
        border-radius: 500px;
        max-height: 50%;
        margin-right: 10%;
    }
`;

export default function Perfil(props:{dadosPerfil: Userprops}){
    var Dados = props.dadosPerfil;

    const detalhesPerfil = ()=> {
        return(
            <>
            <div>
                <h3>{props.dadosPerfil.name}</h3> 
                Bio: <br />{props.dadosPerfil.bio} <br/><br/>
                Localização: <br />{props.dadosPerfil.location}
            </div>
            </>
        )
    }

    const MostraPerfil = ()=> {
        return (
                <UserBox>
                    <div>
                        <img src={props.dadosPerfil.avatar_url} alt="Imagem de perfil"></img>
                        Followers: {props.dadosPerfil.followers} <br />
                        Following: {props.dadosPerfil.following} <br /> <br />
                        Repositórios públicos: {props.dadosPerfil.public_repos}
                    </div>
                    {detalhesPerfil()}
                </UserBox>
        )
    }

    return(
        <Grid>
            {MostraPerfil()}
        </Grid>
    )
} 