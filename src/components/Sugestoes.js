export default function Sugestoes() {
    const sugestoes = [
        { icone: "assets/img/bad.vibes.memes.svg", user: "bad.vibes.memes" },
        { icone: "assets/img/chibirdart.svg", user: "chibirdart" },
        { icone: "assets/img/razoesparaacreditar.svg", user: "razoesparaacreditar" },
        { icone: "assets/img/adorable_animals.svg", user: "adorable_animals" },
        { icone: "assets/img/smallcutecats.svg", user: "smallcutecats" }
    ]
    return (
        sugestoes.map((item) => <Sugestao icone={item.icone} user={item.user} />)
    )
}
function Sugestao(props) {
    
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.icone} />
                <div class="texto">
                    <div class="nome">{props.user}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}