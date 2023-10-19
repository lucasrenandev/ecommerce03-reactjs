import styled from "styled-components";

export const Discover = styled.section`

`
export const DiscoverContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
    @media (max-width: 400px) {
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    }
`
export const Box = styled.div`
    background-color: #e3ffe6;
    padding: 4rem 3rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    transition: transform 0.4s ease;
    &:nth-child(2) {
        background-color: #fef2f2;
    }
    &:nth-child(3) {
        background-color: #eff6ff;
    }
    &:hover {
        transform: translateY(-0.5rem);
    }
    @media (max-width: 340px) {
        justify-content: center;
        text-align: center;
        gap: 2rem;
    }
`
export const Text = styled.div`
    .button {
        padding: 1.1rem 2rem;
        background-color: var(--bg-color);
        color: var(--text-color);
        transition: all 0.4s ease;
        &:hover {
            background-color: var(--text-color);
            color: var(--bg-color);
        }
    }
`
export const H4 = styled.h4`
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--other-color);
    margin-bottom: 2rem;
`
export const H3 = styled.h3`
    font-size: 2.6rem;
    font-weight: 600;
    line-height: 1.5;
`
export const Image  = styled.figure`
    img {
        width: 15rem;
        height: auto;
    }
`