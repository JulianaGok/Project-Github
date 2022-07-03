import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width:90vw;
    height:16vh;
    padding: 30px 40px;
    margin:30px 60px;
    background:var(--white);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 8px;

div.name-login{
    flex-direction:column;
    padding: 10px 20px;
    height:10vh;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: var(--black);
    cursor: pointer;
    @media (max-width: 800px) {
        padding-left:5%;
    }
}
`

export const Avatar  = styled.img`
  &.avatar  {
    width:100px;
    height:100px;
    border-radius:50%;
}`

export const Arrowstyle  = styled.img`
    width:4rem;
    height: 2rem;
    `

export const Newinput = styled.input`
    box-sizing: border-box;
    position: absolute;
    width: 265px;
    height: 60px;
    left: 75%;
    top: 15px;
    padding: 14px 30px;
    border: 1px solid #E5E5E5;
    border-radius: 50px;
    background-color: var(--white);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    @media (max-width:750px) {
        left: 30%;
        padding: 9px 10px;
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
            left: 56%;
            width: 150px;
            font-size: 16px;
    }`

export const Name = styled.h1`
    width: 191px;
    height: 1px;
    left: 190px;
   
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 27px;
    color: var(--black);
    cursor: pointer;
    `

export const Namelogin = styled.h2`
    /* width: 191px;
    height: 30px;
    left: 190px;
   
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 27px;
    color: var(--black); */
    `


export const At = styled.h2`
    width: 124px;
    left: 190px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--black);`

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

