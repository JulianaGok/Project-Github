import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    width: 50%;
    flex-direction: column;
    height: 100vh;
    @media (max-width: 800px) {
      width: 120vw;
    }
  }

  div.content-left {
    background-color: var(--white);
    padding-left: 15%;
    justify-content: center;
    @media (max-width: 800px) {
      padding-left: 5%;
    }
  }

  div.content-right {
    background-color: var(--black);
    justify-content: center;
    align-items: center;
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

export const Phrase = styled.h2 `
  display: flex;
  width: 80%;

  font-size: 40px;
  line-height: 55px;
  text-align: center;
  color: var(--white);
  @media (max-width: 800px) {
    color: var(--black);
  }
`;

export const Figure = styled.img `
  width: 80%;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Logo = styled.img `
  width: 20rem;
  height: 20%;
  @media (max-width: 800px) {
    width: 80%;
  }
`;
export const Title = styled.h1 `
  height: 30px;
  font-weight: 700;
  font-size: 24px;
  line-height: 10px;
  color: var(--black);
`;

export const Text = styled.h2 `
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  color: var(--grey);
`;

export const Input = styled.input `
  width: 26rem;
  height: 4rem;
  padding: 14px 30px;
  border: 1px solid var(--white-200);
  border-radius: 4px;
  background-color: var(--white);
  cursor: pointer;

  font-size: 16px;
  @media (max-width: 800px) {
    width: 20rem;
  }
`;

export const Button = styled.button `
  width: 26rem;
  margin-top: 2rem;
  border-radius: 100px;
  background: var(--black);

  font-size: 20px;
  line-height: 50px;
  a {
    color: var(--white);
  }
  @media (max-width: 800px) {
    width: 20rem;
  }
`;