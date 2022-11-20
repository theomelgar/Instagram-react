export default function Stories() {
    const stories = [
        { icone: "assets/img/9gag.svg", user: "9gag" },
        { icone: "assets/img/meowed.svg", user: "meowed" },
        { icone: "assets/img/barked.svg", user: "barked" },
        { icone: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" },
        { icone: "assets/img/wawawicomics.svg", user: "wawawicomics" },
        { icone: "assets/img/respondeai.svg", user: "respondeai" },
        { icone: "assets/img/filomoderna.svg", user: "filomoderna" },
        { icone: "assets/img/memeriagourmet.svg", user: "memeriagourmet" }
    ]
    return (
        stories.map((item) => <Story icone={item.icone} user={item.user} />)
    )
}
function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.icone} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    )
}
