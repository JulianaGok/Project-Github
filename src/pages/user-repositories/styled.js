import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex:1;
    width:100vw;
    height:73vh;
    justify-content:center;
    align-items:center;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    @media (max-width: 800px) { 
      display: inline; 
    } 
/* informacoes do usuario a direita */
div.repo-info {
    width: 45rem;
    padding: 30px 40px;
    margin:20px 30px;
    margin-left: 4px;
    background:#ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 8px; 
    p {
      margin-bottom:1rem;
    }   
    @media (max-width: 800px) {
      width: 95%;
    }
  }

  div.info{
    display: flex;
    flex-direction: row;
    height: 1rem;
    left:4rem;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    color:var(--grey);
    p {
      margin-left: 4px;
      margin-right:10px;
    }}

div.user-info {
    width: 20rem;
    padding: 20px 40px;
    margin:0px 30px;
    margin-top:1rem;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    @media (max-width: 800px) {
      width: 95%;
    }
  }

div.user-bio {
    width: 324px;
    left: 25rem;
    padding: 30px 40px;
    margin:20px 30px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    p {
      margin-left: 0px;
      margin-right:3px;
    }
    @media (max-width: 800px) {
      width: 95%;
    }
  }

div.important {
  width: 324px;
  padding: 30px 40px;
  margin:20px 30px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  @media (max-width: 800px) {
      width: 95%;
    }
  }`

export const Avatar = styled.img`
  &.avatar  {
    justify-content:center;
    align-items:center;
    width:100px;
    height:100px;
    border-radius:50%; 
  }` 

export const Namedescription = styled.h2`
    flex-direction:column;
    padding: 20px 0px;
    height:1vh;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 27px;
    color: var(--black);`

export const Searchinput = styled.input`
    display: flex;
    width: 26rem;
    height:4rem;
    margin-top:370rem;
    padding: 14px 30px;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    background-color: #ffffff;
    cursor: pointer;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    @media (max-width: 800px) {
      margin-top:0rem;
      width: 97%;
    }`