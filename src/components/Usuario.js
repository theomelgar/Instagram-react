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
        <div data-test="user" className="usuario">
            <img data-test="profile-image" onClick={inserirFoto} src={foto} />
            <div className="texto">
                <strong>{apelido}</strong>
                <span>
                    <div data-test="name">{user}</div>
                    <ion-icon data-test="edit-name" onClick={inserirUsuario} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}