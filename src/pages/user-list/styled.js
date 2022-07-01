import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content:center;
align-items:center;

div.content-users{
    width: 80%;
    height:200px;
    left: 5%;
    padding: 20px 30px;
    margin:20px 30px;
    background:#ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
}`

export const Newinput = styled.input`
    position: absolute;
    width: 265px;
    height: 60px;
    left: 75%;
    top: 15px;
    padding: 14px 30px;
    border: 1px solid #E5E5E5;
    border-radius: 50px;
    background-color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    @media (max-width:750px) {
        left: 33%;
  }`

export const Newbutton = styled.button`
    position: absolute;
    width: 200px;
    height: 60px;
    left: 80%;
    top: 15px;
    background: var(--black);
    border-radius: 100px;
    color: var(--white);
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    @media (max-width: 750px) {
            left: 60%;
            width: 150px;
    }`

export const Avatar  = styled.img`
  &.avatar  {
    width:100px;
    height:100px;
    border-radius:50%;
}`

export const Arrowstyle  = styled.img`
    width:1rem;
    height: 6rem;
    `

export const Name = styled.h1`
    width: 191px;
    height: 30px;
    left: 190px;
   
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 27px;
    color: var(--black);
    @media (max-width: 650px) {
            left: 28%;
    }`

export const Namelogin = styled.h2`
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 27px;
    color: var(--black);
    @media (max-width: 650px) {
            left: 28%;
    }`


export const At = styled.h2`
    width: 124px;
    left: 190px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--black);
    @media (max-width: 650px) {
            left: 28%;
    }`

export const Local = styled.h2`
    width: 94px;
    left: 225px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color:var(--grey);
`
export const Public = styled.h2`
    width: 94px;
    left: 225px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color:var(--grey);
`

