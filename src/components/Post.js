import React from "react"
export default function Post(props) {
    const [salvo, setSalvo] = React.useState(<ion-icon onClick={salvar} name="bookmark-outline"></ion-icon>)
    const [like, setLike] = React.useState(false)
    function salvar() {
        setSalvo(<ion-icon onClick={removeSalvar} name="bookmark"></ion-icon>)
    }
    function removeSalvar() {
        setSalvo(<ion-icon onClick={salvar} name="bookmark-outline"></ion-icon>)
    }

    function curtir() {
        setLike(!like);
        if (like === true) {
            SetNumeroLikes(numeroLikes - 1)
        }

        else {
            SetNumeroLikes(numeroLikes + 1)
        }
    }

    function curtirFoto() {
        if (like === false) {
            SetNumeroLikes(numeroLikes + 1)
        }
        setLike(true)
    }


    let [numeroLikes, SetNumeroLikes] = React.useState(Number(props.numeroLikes))


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
                <img data-test="post-image" onDoubleClick={curtirFoto} src={props.conteudo} />

            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <span data-test="like-post" onClick={curtir}>
                            {like ? (<ion-icon id="vermelho" name="heart"></ion-icon>) : (<ion-icon onClick={curtir} name="heart-outline"></ion-icon>)}
                        </span>
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