import one from "../imgs/one.jpg";
import two from "../imgs/two.jpg";
import three from "../imgs/three.jpg";
import four from "../imgs/four.jpg";
import five from "../imgs/five.jpg";
import "../App.css";

export default function Gallery() {
    

    return (
    <div>
        <p style={{textAlign: "center"}}>Welcome to the gallery page</p>
        <div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
                <img src={one} alt="headshot of woman" />
                <img src={two} alt="headshot of a man" />
                <img src={three} alt="woman in tank top" />
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src={four} alt="man in suit" />
                <img src={five} alt="happy woman" />
            </div>
        </div>
    </div>
    )
}


