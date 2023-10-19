import { Arrival, ArrivalContent, Box, Image, Img,
H3, H4, Price, Button, Stars } from "./styled";
import img1 from "../../assets/p1.webp";
import img2 from "../../assets/p2.webp";
import img3 from "../../assets/p3.webp";
import img4 from "../../assets/p4.webp";
import { BiSolidHeart } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";

export default function arrival() {
    return(
        <Arrival>
            <header className="heading">
                <h2>New arrivals. <span>best selling of the month</span></h2>
            </header>
            <ArrivalContent>
                <Box>
                    <Image>
                        <Img src={img1} alt="Arrival image 1"/>
                        <i><BiSolidHeart/></i>
                    </Image>
                    <H3>Manhattam toy wrt</H3>
                    <H4>New design 2023</H4>
                    <Price>
                        <Button type="button">$42.00</Button>
                        <Stars>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                        </Stars>
                    </Price>
                </Box>
                <Box>
                    <Image>
                        <Img src={img2} alt="Arrival image 2"/>
                        <i><BiSolidHeart/></i>
                    </Image>
                    <H3>Manhattam toy wrt</H3>
                    <H4>New design 2023</H4>
                    <Price>
                        <Button type="button">$42.00</Button>
                        <Stars>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                        </Stars>
                    </Price>
                </Box>
                <Box>
                    <Image>
                        <Img src={img3} alt="Arrival image 3"/>
                        <i><BiSolidHeart/></i>
                    </Image>
                    <H3>Manhattam toy wrt</H3>
                    <H4>New design 2023</H4>
                    <Price>
                        <Button type="button">$42.00</Button>
                        <Stars>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                        </Stars>
                    </Price>
                </Box>
                <Box>
                    <Image>
                        <Img src={img4} alt="Arrival image 4"/>
                        <i><BiSolidHeart/></i>
                    </Image>
                    <H3>Manhattam toy wrt</H3>
                    <H4>New design 2023</H4>
                    <Price>
                        <Button type="button">$42.00</Button>
                        <Stars>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                            <i><BiSolidStar/></i>
                        </Stars>
                    </Price>
                </Box>
            </ArrivalContent>
        </Arrival>
    )
}