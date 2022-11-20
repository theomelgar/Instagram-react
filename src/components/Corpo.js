import Sidebar from "./Sidebar"
import Stories from "./Stories"
import Posts from "./Posts"
export default function Corpo() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <div className="stories">
                    <Stories />
                    <div className="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                <div className="posts">
                    <Posts />
                </div>
            </div>

            <Sidebar />
        </div>
    )
}