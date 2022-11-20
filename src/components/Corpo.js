import Sidebar from "./Sidebar"
import Stories from "./Stories"
import Posts from "./Posts"
export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    <Stories />
                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                <div class="posts">
                    <Posts />
                </div>
            </div>

            <Sidebar />
        </div>
    )
}