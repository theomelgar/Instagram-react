export default function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.icone} />
            </div>
            <div className="usuario">
                {props.user}
            </div>
        </div>
    )
}