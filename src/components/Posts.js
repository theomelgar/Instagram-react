// import Post from "./Post"
export default function Posts() {
    const post = [
        { icone: "assets/img/meowed.svg", usuario: "meowed", conteudo: "assets/img/gato-telefone.svg", likes: "assets/img/respondeai.svg", usuarioLike:"respondeai", numeroLikes: "101.523" },
        { icone: "assets/img/barked.svg", usuario: "barked", conteudo: "assets/img/dog.svg", likes: "assets/img/adorable_animals.svg", usuarioLike:"adorable_animals", numeroLikes: "99.159" }
    ]
    return (
        post.map((item) => <Post icone={item.icone} usuario={item.usuario} conteudo={item.conteudo} likes={item.likes} usuarioLike={item.usuarioLike} numeroLikes={item.numeroLikes} />)
    )
}
function Post(props) {
    return (
        
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.icone} />
                        {props.usuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.conteudo} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.likes} />
                        <div class="texto">
                        Curtido por <strong>{props.usuarioLike}</strong> e <strong>outras {props.numeroLikes} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}