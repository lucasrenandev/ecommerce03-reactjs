import { useEffect } from "react";
import { Cta, CtaContent, CtaText, Image, H2, Paragraph } from "./styled";
import imgLogo from "../../assets/logo.svg";

export default function cta() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "5rem",
            duration: 2500,
            reset: true
        });
        sr.reveal(".cta", {delay: 300, origin: "bottom"});
    }, []);

    return(
        <Cta className="cta">
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