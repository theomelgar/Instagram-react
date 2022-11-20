export default function Sugestoes() {
    const sugestoes = [
        { icone: "assets/img/bad.vibes.memes.svg", user: "bad.vibes.memes" },
        { icone: "assets/img/chibirdart.svg", user: "chibirdart" },
        { icone: "assets/img/razoesparaacreditar.svg", user: "razoesparaacreditar" },
        { icone: "assets/img/adorable_animals.svg", user: "adorable_animals" },
        { icone: "assets/img/smallcutecats.svg", user: "smallcutecats" }
    ]
    return (
        sugestoes.map((item) => <Sugestao key={item.user} icone={item.icone} user={item.user} />)
    )
}
function Sugestao(props) {
    
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.icone} />
                <div className="texto">
                    <div className="nome">{props.user}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}