import styled from "styled-components"

export const Phrase = styled.h2`
    position: absolute;
    width: 622px;
    height: 100px;
    left: 730px;
    top: 900px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400px;
    font-size: 40px;
    line-height: 55px;
    text-align: center;
    color: #ffffff;
    @media (max-width: 750px) {
        color: #000000;
        width: 80%;
        left: 5%;
        top: 70%;
  }`
export const Figure = styled.img`
    position: absolute;
    width: 860px;
    height:100%;
    left: 630px;
    top: 0px;
    background-color: #000000;
    @media (max-width: 750px) {
    display: none;}`

export const Logo = styled.img`
    position: absolute;
    width: 400px;
    height: 130px;
    left: 40px;
    top: 20%;
    @media (max-width: 650px) {
        width: 70%;
}
`
export const Title = styled.h1`
position: absolute;
    width: 172px;
    height: 30px;
    left: 95px;
    font-style: normal;
    font-family:'Mulish';
    font-weight: 700;
    font-size: 24px;
    line-height: 10px;
    top:352px;
    color:  #000000;
    @media (max-width: 650px) {
        left: 17%;
  }`

export const Text = styled.h2`
position: absolute;
    width: 400px;
    height: 20px;
    left: 97px;
    top: 390px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #7E7E7E;
    @media (max-width: 650px) {
        left: 17%;
  }`
export const Input = styled.input`
box-sizing: border-box;
    position: absolute;
    width: 420px;
    height: 58px;
    left: 97px;
    top: 434px;
    padding: 14px 30px;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    background-color: #ffffff;
    cursor: pointer;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    @media (max-width: 650px) {
        left: 13%;
  }
`
export const Button = styled.button`
    position: absolute;
    width: 420px;
    height: 56px;
    left: 97px;
    top: 532px;
    border-radius: 100px;
    background:  #000000;

    font-family: 'Mulish';
    font-weight: 400;
    font-size: 20px;
    line-height: 50px;
    text-decoration: none;
    @media (max-width: 650px) {
        left: 13%;
  }`