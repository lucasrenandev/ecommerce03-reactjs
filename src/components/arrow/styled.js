import styled from "styled-components";

export const Arrow = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background-color: var(--text-color);
    border-radius: 50%;
    text-align: center;
    line-height: 5rem;
    cursor: pointer;
    i {
        color: var(--bg-color);
        font-size: 2.8rem;
    }
`