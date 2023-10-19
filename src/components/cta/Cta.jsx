import { Cta, CtaContent, CtaText, Image, H2, Paragraph } from "./styled";
import imgLogo from "../../assets/logo.svg";

export default function cta() {
    return(
        <Cta>
            <CtaContent>
                <CtaText>
                    <Image>
                        <img src={imgLogo} alt="Logo image" />
                    </Image>
                    <H2>Special offer in kids products</H2>
                    <Paragraph>Fashion is a form of self-expression and autonomy at a particular period and place.</Paragraph>
                    <a href="#" className="button">Discover more</a>
                </CtaText>
            </CtaContent>
        </Cta>
    )
}