import React from "react"
export default function Posts() {
    const post = [
        { icone: "assets/img/meowed.svg", usuario: "meowed", conteudo: "assets/img/gato-telefone.svg", likes: "assets/img/respondeai.svg", usuarioLike: "respondeai", numeroLikes: "101523" },
        { icone: "assets/img/barked.svg", usuario: "barked", conteudo: "assets/img/dog.svg", likes: "assets/img/adorable_animals.svg", usuarioLike: "adorable_animals", numeroLikes: "99159" }
    ]

    return (
        post.map((item) => <Post key={item.conteudo} icone={item.icone} usuario={item.usuario} conteudo={item.conteudo} likes={item.likes} usuarioLike={item.usuarioLike} numeroLikes={item.numeroLikes} />)
    )
}
var i = 0;
function Post(props) {
    const [salvo, setSalvo] = React.useState(<ion-icon onClick={salvar} name="bookmark-outline"></ion-icon>)

    function salvar() {
        setSalvo(<ion-icon onClick={removeSalvar} name="bookmark"></ion-icon>)
    }
    function removeSalvar() {
        setSalvo(<ion-icon onClick={salvar} name="bookmark-outline"></ion-icon>)
    }

    const [like, setLike] = React.useState(<ion-icon onClick={curtir} name="heart-outline"></ion-icon>)

    function curtir() {
        
        if (i === 0) {
            setLike(<ion-icon id="vermelho" onClick={removeCurtir} name="heart"></ion-icon>)
            SetNumeroLikes(Number(numeroLikes) + 1)
            i++;
        }
    }
    function removeCurtir() {
        setLike(<ion-icon onClick={curtir} name="heart-outline"></ion-icon>)
        if (i === 1) {
            SetNumeroLikes(Number(numeroLikes))
            i--;
        }
    }
    // const [likeFoto, setLikeFoto] = React.useState(<img onDoubleClick={curtirFoto} src={props.conteudo} />)

    // function curtirFoto() {
    //     setLike(<ion-icon id="vermelho" onClick={removeCurtir} name="heart"></ion-icon>)
    //     if (numeroLikes == props.numeroLikes) {
    //         SetNumeroLikes(Number(numeroLikes) + 1)
    //     }
    //     setLikeFoto(<>
    //     <ion-icon id="likeFoto" name="heart"></ion-icon><img onDoubleClick={curtirFoto} src={props.conteudo} />
    //     </>)
    // }
    let [numeroLikes, SetNumeroLikes] = React.useState(Number(props.numeroLikes))

    // const handleClick = event => {
    //     // 👇️ toggle styles on click
    //     if (event.currentTarget.style.backgroundColor) {
    //       event.currentTarget.style.backgroundColor = null;
    //       event.currentTarget.style.color = null;
    //     } else {
    //       event.currentTarget.style.backgroundColor = 'salmon';
    //       event.currentTarget.style.color = 'white';
    //     }
    
    //     // 👇️ toggle class on click
    //     event.currentTarget.classList.toggle('my-class-1', 'my-class-2');
    // }

    return (

        <div data-test="post" className="post">
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
                <img data-test="post-image" onDoubleClick={curtir} src={props.conteudo} />
            {/* <ion-icon id="likeFoto" name="heart"></ion-icon> */}
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <div data-test="like-post">{like}</div>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div data-test="save-post">
                        {salvo}
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.likes} />
                    <div className="texto">
                        Curtido por <strong>{props.usuarioLike}</strong> e <strong>outras <span data-test="likes-number">{numeroLikes}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    )
}