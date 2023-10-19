import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    padding: 10rem 9% 2rem;
    @media (max-width: 1240px) {
        padding: 8rem 2% 2rem;
    }
    @media (max-width: 768px) {
        padding: 7rem 2% 2rem;
    }
`
export const FooterContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    text-align: center;
    gap: 2rem;
`
export const Box = styled.div`

`
export const H3 = styled.h3`
    font-size: 1.7rem;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 1.7rem;
`
export const NavBar = styled.nav`

`
export const NavList = styled.ul`

`
export const List = styled.li`
    margin-bottom: 1.7rem;
`
export const NavLink = styled.a`
    display: block;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--other-color);
    text-transform: capitalize;
    transition: transform 0.4s ease;
    &:hover {
        transform: translateX(-0.5rem);
    }
`
export const FooterCopy = styled.div`
    text-align: center;
    padding-top: 9rem;
    @media (max-width: 1240px) {
        padding-top: 8rem;
    }
    @media (max-width: 768px) {
        padding-top: 7rem;
    }
`
export const Copy = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--other-color);
    letter-spacing: 0.1rem;
`