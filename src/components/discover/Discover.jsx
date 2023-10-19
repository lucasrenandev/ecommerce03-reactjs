import { Discover, DiscoverContent, Box, Text, H4, H3, Image } from "./styled";
import img1 from "../../assets/d1.png";
import img2 from "../../assets/d2.png";
import img3 from "../../assets/d3.png";

export default function discover() {
    return(
        <Discover>
            <header className="heading">
                <h2>Discover more <span>good things</span></h2>
            </header>
            <DiscoverContent>
                <Box>
                    <Text>
                        <H4>Explore new arrivals</H4>
                        <H3>Give the gift of <br /> choice</H3>
                        <a href="#" className="button">Show me all</a>
                    </Text>
                    <Image>
                        <img src={img1} alt="Blouse" />
                    </Image>
                </Box>
                <Box>
                    <Text>
                        <H4>Explore new arrivals</H4>
                        <H3>Give the gift of <br /> choice</H3>
                        <a href="#" className="button">Show me all</a>
                    </Text>
                    <Image>
                        <img src={img2} alt="Basketball" />
                    </Image>
                </Box>
                <Box>
                    <Text>
                        <H4>Explore new arrivals</H4>
                        <H3>Give the gift of <br /> choice</H3>
                        <a href="#" className="button">Show me all</a>
                    </Text>
                    <Image>
                        <img src={img3} alt="Handbag" />
                    </Image>
                </Box>
            </DiscoverContent>
        </Discover>
    )
}