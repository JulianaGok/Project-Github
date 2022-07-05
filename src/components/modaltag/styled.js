import styled from "styled-components"

export const Box = styled.style`
  &.boxstyle {
    display:flex;
    position: absolute;
    justify-content:center;
    align-items:center;
    width: 500px;
    height: 500px;
    left: 40%;
    top:18rem;
    box-sizing:border-box;
    background:var(--white);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.24);
    border-radius: 8px;
    @media (max-width: 800px) {
      width: 90%;
      height: 85%;
      left: 5%;
      top:5%;
    }}`

export const Buttontag = styled.button`
display: flex;
padding: 5px 20px;
background: rgba(0, 23, 255, 0.08);
border-radius: 100px;
border-color: #0017FF;

font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #0017FF;`

export const Input = styled.input`
    display: flex;
    border: 1px solid var(--white-200);
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    background-color: var(--white);
    width: 540px;
    height: 40px;
    left: 440px;
    top: 125px;
    padding: 14px 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding-left:30px;
    cursor: pointer;
    @media (max-width: 800px) {
      width: 80%;
    }`

export const Inputtag = styled.input`
    position: absolute;
    border: 1px solid var(--white-200);
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    background-color: var(--white);
    width: 560px;
    height: 40px;
    left: 995px;
    top: 125px;
    padding: 14px 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: var(--grey);
    cursor: pointer;
    @media (max-width: 800px) {
      width: 80%;
    }`

export const Title = styled.h1`
  position: absolute;
  width: 168px;
  height: 30px;
  left: 40px;
  top: 40px;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: var(--black);
  @media (max-width: 800px) {
      width: 80%;
    }`

export const Inputtagmodal = styled.input`
  position: absolute;
  width: 420px;
  height: 40px;
  left: 40px;
  top: 100px;
  border: 1px solid var(--white-200);
  border-radius: 5px;
  padding: 14px 30px;
  @media (max-width: 800px) {
      width: 80%;
    }`

export const Buttonsaved = styled.button`
  position: absolute;
  width: 420px;
  height: 56px;
  left: 40px;
  top: 350px;
  background: var(--black);
  border-radius: 100px;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: var(--white);
  @media (max-width: 800px) {
      width: 80%;
    }
` 
export const Buttoncancel = styled.button`
  position: absolute;
  width: 420px;
  height: 56px;
  left: 40px;
  top: 420px;
  background: var(--white);
  border-radius: 100px;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: var(--black);
  @media (max-width: 800px) {
      width: 80%;
    }` 

export const Taginput = styled.text`
  position: absolute;
  box-sizing: border-box;
  width: 77px;
  height: 20px;
  left: 50px;
  top: 180px;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #7E7E7E;
  padding: 14px 30px;
  width: 420px;
  height: 170px;
  left: 40px;
  top: 150px;
  background:var(--white);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  @media (max-width: 800px) {
      width: 80%;
    }`
