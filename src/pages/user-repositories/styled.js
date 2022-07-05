import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex:1;
    width:100vw;
    margin-top: 1rem;
    justify-content:center;
    align-items:center;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
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
    background:var(--white);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 8px; 
    p {
      margin-bottom:1rem;
    }   
    @media (max-width: 800px) {
      width: 98%;
    }}

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
      margin-right:10px;}

    @media (max-width: 800px) { 
      display: inline;
      margin-left: 4%;
    } }

div.user-info {
    position:absolute;
    top:7rem;
    width: 20rem;
    padding: 20px 40px;
    margin:0px 30px;
    background:var(--white);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    @media (max-width: 800px) {
      width: 98%;
      margin-left: 2%;
      margin-top:2rem;
      position:none;
      top:none;
    }}

div.user-bio {
    position:absolute;
    top:25rem;
    width: 324px;
    padding: 30px 40px;
    margin:20px 30px;
    background: var(--white);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    p {
      margin-left: 0px;
      margin-right:3px;
    }
    @media (max-width: 800px) {
      width: 98%;
      margin-left: 2%;
      position:none;
      top:27rem;
    } }

div.important {
  width: 324px;
  padding: 30px 40px;
  margin:20px 30px;
  background:var(--white);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  @media (max-width: 800px) {
      width: 98%;
      margin-left: 2%;
    }}`

export const Avatar = styled.img`
  &.avatar  {
    width:100px;
    height:100px;
    border-radius:50%; 
  }` 

export const Searchinput = styled.input`
    display: flex;
    width: 26rem;
    height:4rem;
    padding: 14px 30px;
    border: 1px solid var(--white-200);
    border-radius: 4px;
    background-color:var(--white);
    cursor: pointer;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    @media (max-width: 800px) {
      width: 98%;
      margin-left: 2%;
     margin-top:35rem;
    }`

export const Arrowstyle  = styled.img`
  width:4rem;
  height: 1rem;
  `