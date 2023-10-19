import { Home, HomeText, H3, H1, HomeImage} from "./styled";
import mainImg from "../../assets/hero.png";

export default function home() {
    return(
        <Home>
            <HomeText>
                <H3>In this season, find the best &#x1f525;</H3>
                <H1>Exclusive collection for everyone</H1>
                <a href="#" className="button">Explore now</a>
            </HomeText>
            <HomeImage>
                <img src={mainImg} alt="Main image"/>
            </HomeImage>
        </Home>
    )
}   