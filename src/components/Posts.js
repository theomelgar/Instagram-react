// import Post from "./Post"
import React from "react"
export default function Posts() {
    const post = [
        { icone: "assets/img/meowed.svg", usuario: "meowed", conteudo: "assets/img/gato-telefone.svg", likes: "assets/img/respondeai.svg", usuarioLike: "respondeai", numeroLikes: "101.523" },
        { icone: "assets/img/barked.svg", usuario: "barked", conteudo: "assets/img/dog.svg", likes: "assets/img/adorable_animals.svg", usuarioLike: "adorable_animals", numeroLikes: "99.159" }
    ]
    
    return (
        post.map((item) => <Post key={item.conteudo} icone={item.icone} usuario={item.usuario} conteudo={item.conteudo} likes={item.likes} usuarioLike={item.usuarioLike} numeroLikes={item.numeroLikes} />)
    )
}
function Post(props) {
    const [salvo, setSalvo] = React.useState(<ion-icon onClick={salvar} name="bookmark-outline"></ion-icon>)
    function salvar() {
        setSalvo(<ion-icon onClick={removeSalvar} name="bookmark"></ion-icon>)
    }
    function removeSalvar(){
        setSalvo(<ion-icon onClick={salvar} name="bookmark-outline"></ion-icon>)
    }
    return (

        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.icone} />
                    {props.usuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.conteudo} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {salvo}

                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.likes} />
                    <div className="texto">
                        Curtido por <strong>{props.usuarioLike}</strong> e <strong>outras {props.numeroLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    )
}