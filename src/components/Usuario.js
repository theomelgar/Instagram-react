import React from "react"
export default function Usuario() {
    const [apelido, setApelido] = React.useState("catanacomics")
    const [user, setUser] = React.useState("Catana")
    const [foto, setFoto] = React.useState("assets/img/catanacomics.svg")
    function inserirUsuario() {
        let resposta = prompt("Qual o nome do seu usuario?")
        setUser(resposta)
        setApelido(resposta)
    } 
    function inserirFoto() {
        let resposta = prompt("Qual o link da imagem?")
        setFoto(resposta)
    }
    return (
        <div className="usuario">
            <img onClick={inserirFoto} src={foto} />
            <div className="texto">
                <strong>{apelido}</strong>
                <span>
                    {user}
                    <ion-icon onClick={inserirUsuario} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}