import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        list-style: none;
        text-decoration: none;
        border: none;
        outline: none;
    }

    :root {
        --bg-color: #fff;
        --text-color: #0f172a;
        --main-color: #6b7280;
        --other-color: #334155;
        --h1-font: 6.8rem;
        --h2-font: 3.5rem;
        --p-font: 1.6rem;
        @media (max-width: 1240px) {
            --h1-font: 5.8rem;
        }
        @media (max-width: 1040px) {
            --h1-font: 4rem;
            --h2-font: 3rem;
        }
    }
    
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        @media (max-width: 1040px) {
            font-size: 55%;
        }
        @media (max-width: 480px) {
            font-size: 50%;
        }
    }

    html::-webkit-scrollbar {
        width: 1rem;
    }
    
    html::-webkit-scrollbar-track {
        background-color: transparent;
    }
    
    html::-webkit-scrollbar-thumb {
        background-color: var(--main-color);
    }
    
    body {
        min-height: 100vh;
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    section {
        width: 100%;
        padding: 10rem 9% 9rem;
        @media (max-width: 1240px) {
            padding: 8rem 2% 7rem;
        }
        @media (max-width: 768px) {
            padding: 7rem 2% 6rem;
        }
    }

    .heading h2 {
        font-size: var(--h2-font);
        font-weight: 700;
    }

    .heading h2 span {
        color: var(--main-color);
        text-transform: capitalize;
    }

    .button {
        display: inline-block;
        padding: 1.6rem 3rem;
        background-color: var(--text-color);
        color: var(--bg-color);
        margin-top: 2.5rem;
        font-size: 1.5rem;
        font-weight: 400;
        border-radius: 4rem;
        letter-spacing: 0.1rem;
        transition: letter-spacing 0.4s ease;
        &:hover {
            letter-spacing: 0.2rem;
        }
    }

`