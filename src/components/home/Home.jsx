import { useEffect } from "react";
import { Home, HomeText, H3, H1, HomeImage} from "./styled";
import mainImg from "../../assets/hero.png";

export default function home() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "5rem",
            duration: 2500,
            reset: true
        });
        sr.reveal(".home-text", {delay: 200, origin: "top"});
        sr.reveal(".home-image", {delay: 300, origin: "top"});
    }, []);

    return(
        <Home>
            <HomeText className="home-text">
                <H3>In this season, find the best &#x1f525;</H3>
                <H1>Exclusive collection for everyone</H1>
                <a href="#" className="button">Explore now</a>
            </HomeText>
            <HomeImage className="home-image">
                <img src={mainImg} alt="Main image"/>
            </HomeImage>
        </Home>
    )
}   