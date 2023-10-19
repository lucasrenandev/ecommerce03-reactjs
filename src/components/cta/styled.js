import styled from "styled-components";
import ctaImg from "../../assets/cta.png";

export const Cta = styled.section`

`
export const CtaContent = styled.main`
    width: 100%;
    height: 50rem;
    background: url(${ctaImg})
    no-repeat center center / cover;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    padding: 2rem 8rem;
    border-radius: 2rem;
    @media (max-width: 768px) {
        padding: 2rem;
    }
`
export const CtaText = styled.div`
    max-width: 55rem;
    width: 100%;
    height: auto;
`
export const Image = styled.figure`
    width: 16rem;
    height: auto;
`
export const H2 = styled.h2`
    font-size: 5.2rem;
    font-weight: 700;
    line-height: 1.5;
    margin: 2rem 0;
    @media (max-width: 1240px) {
        font-size: 4rem;
    }
    @media (max-width: 768px) {
        font-size: 3.5rem;
    }
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 500;
    color: var(--other-color);
    line-height: 1.5;
`