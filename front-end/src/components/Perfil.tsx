export default function Perfil(prop:{dadosPerfil: any}){
    var Dados = prop.dadosPerfil;

    const MostraPerfil = ()=> {
        return (
            Dados.map((item:any) =>(
                <div>{item}</div>
            ))
        )
    }

    return(
        <div>
            <p>{MostraPerfil()}</p>
        </div>
    )
} 