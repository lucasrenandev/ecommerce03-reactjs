import styled from "styled-components";

export const Arrival = styled.section`

`
export const ArrivalContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
    @media (max-width: 400px) {
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    }
`
export const Box = styled.div`

`
export const Image = styled.figure`
    position: relative;
    background-color: #fafafa;
    text-align: center;
    border-radius: 2rem;
    i {
        position: absolute;
        top: 2rem;
        right: 2rem;
        width: 4.3rem;
        height: 4.3rem;
        background-color: var(--bg-color);
        border-radius: 50%;
        color: #ef4444;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 2.4rem;
        transition: all 0.4s ease;
        &:hover {
            background-color: #ef4444;
            color: var(--bg-color);
        }
    }
`
export const Img = styled.img`
    width: 33rem;
    height: auto;
`
export const H3 = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;
    text-transform: capitalize;
    margin: 2.5rem 0 1rem;
`
export const H4 = styled.h4`
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--other-color);
    text-transform: capitalize;
`
export const Price = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Button = styled.button`
    padding: 0.4rem 1.5rem;
    background-color: transparent;
    border: 0.2rem solid #ef4444;
    border-radius: 0.8rem;
    color: #ef4444;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: letter-spacing 0.4s ease;
    &:hover {
        letter-spacing: 0.1rem;
    }
`
export const Stars = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    i {
        color: #ef4444;
        font-size: 1.8rem;
    }
`
