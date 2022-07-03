import styled from "styled-components"

export const Container = styled.header`
    background: var(--white);
    display: flex; 
    padding: 3rem 0;
    @media (max-width: 800px) {
        padding: 3rem 0;
    }
`
export const Logo = styled.img`
    position: absolute;
    width: 135px;
    height: 4rem;
    left: 58px;
    top: 16px;
    @media (max-width: 800px) {
        left:10px;
        width: 90px;
        height: 65px;
    }` 