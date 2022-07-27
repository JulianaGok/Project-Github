import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  padding: 30px 40px;
  margin: 20px 60px;
  background: var(--white);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  @media (max-width: 800px) {
    padding: 20px 20px;
    margin: 20px 20px;
    width: 90vw;
    height: 35vh;
  }

  div.name-login {
    flex-direction: column;
    padding: 10px 20px;

    font-weight: 700;
    font-size: 17px;
    line-height: 27px;
    color: var(--black);
    cursor: pointer;
    @media (max-width: 800px) {
      padding-left: 1%;
    }
  }

  div.info {
    display: flex;
    flex-direction: row;
    height: 1rem;
    left: 2rem;
    margin-top: 2rem;

    font-size: 10px;
    line-height: 15px;
    color: var(--grey);
    p {
      margin-left: 4px;
      margin-right: 10px;
    }
  }
  @media (max-width: 800px) {
    height: 20rem;
  }
`;

export const Trashstyle = styled.button`
  display: flex;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  margin-bottom: 4rem;
  margin-left: 40%;
  cursor: pointer;
  @media (max-width: 800px) {
    margin-left: 10%;
  }
`;

export const Avatar = styled.img`
  &.avatar {
    display: flex;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    @media (max-width: 800px) {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const Arrowstyle = styled.img`
  width: 3rem;
  margin-bottom: 4rem;
  height: 2rem;
`;

export const Newbutton = styled.button`
  position: absolute;
  width: 200px;
  height: 60px;
  left: 80%;
  top: 15px;
  background: var(--black);
  border-radius: 100px;
  color: var(--white);

  font-weight: 400;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  a {
    color: var(--white);
  }
  @media (max-width: 750px) {
    left: 56%;
    width: 150px;
    font-size: 16px;
  }
`;

export const Name = styled.h1`
  width: 191px;
  height: 1px;
  left: 190px;

  font-weight: 700;
  font-size: 24px;
  line-height: 27px;
  a {
    color: var(--black);
  }
  @media (max-width: 800px) {
    width: 5rem;
    height: 2rem;
  }
`;
