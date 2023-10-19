import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 9%;
    transition: all 0.4s ease;
    &.sticky {
        background-color: var(--bg-color);
        box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
        padding: 1.6rem 9%;
        @media (max-width: 1240px) {
            padding: 1.6rem 2%;
        }
    }
    @media (max-width: 1240px) {
        padding: 2rem 2%;
    }
`
export const Logo = styled.a`
    img {
        width: 16rem;
        height: auto;
    }
`
export const NavBar = styled.nav`
    @media (max-width: 1040px) {
        position: absolute;
        top: 100%;
        right: -100%;
        width: 28rem;
        height: 100vh;
        background-color: var(--bg-color);
        padding: 15rem 0;
        transition: right 0.4s ease;
        &.open {
            right: 0;
        }
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;
    @media (max-width: 1040px) {
        flex-direction: column;
    }
`
export const List = styled.li`
    margin: 0 1rem;
    @media (max-width: 1040px) {
        margin: 1rem 0;
    }
`
export const NavLink = styled.a`
    font-size: var(--p-font);
    font-weight: 400;
    color: var(--other-color);
    padding: 1rem 2rem;
    transition: all 0.4s ease;
    &:hover,
    &.active {
        background-color: #f7f9fb;
        border-radius: 4rem;
    }
    @media (max-width: 1040px) {
        display: block;
    }
`
export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    div {
        width: 4.5rem;
        height: 4.5rem;
        background-color: #f7f9fb;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 2.4rem;
        color: var(--other-color);
        cursor: pointer;
        transition: transform 0.4s ease;
        &:hover {   
            transform: scale(0.9);
        }
        @media (max-width: 340px) {
            &:not(:last-child) {
                display: none;
            }
        }
    }
    #menu-icon {
        z-index: 1010;
        display: none;
        @media (max-width: 1040px) {
            display: inline-flex;
            align-items: center;
        }
    }
`