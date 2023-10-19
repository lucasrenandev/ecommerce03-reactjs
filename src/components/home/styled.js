import styled from "styled-components";
import background from "../../assets/background.svg";

export const Home = styled.section`
    height: 100vh;
    background: #e3ffe6 url(${background}) 
    no-repeat center center / cover;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 2rem;
    @media (max-width: 1040px) {
        grid-template-columns: 1fr;
        text-align: center;
        height: 100%;
    }
`
export const HomeText = styled.main`
    @media (max-width: 1040px) {
        padding-top: 6rem;
    }
`
export const H3 = styled.h3`
    font-size: 2.2rem;
    font-weight: 500;
    color: var(--other-color);
    margin-bottom: 2rem;
`
export const H1 = styled.h1`
    font-size: var(--h1-font);
    font-weight: 700;
    line-height: 1.2;
`
export const HomeImage = styled.figure`
    text-align: center;
    img {
        display: inline-block;
        width: 50rem;
        max-width: 100%;
        height: auto;
    }
`