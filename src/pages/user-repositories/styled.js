import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex:1;
    width:100vw;
    height:100vh;
    justify-content:center;
    align-items:center;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    @media (max-width: 800px) {
    } 

    div.right { 
      top:1rem;
    }

div.repo-info {
    width: 45rem;
    padding: 30px 40px;
    margin:20px 30px;
    background:#ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 8px; }

  div.info{
    display: flex;
    flex-direction: row;
    height: 1rem;
    left:3rem;
    margin-top:2rem;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    color:var(--grey);
}

div.user-info {
    width: 20rem;
    padding: 20px 40px;
    margin:0px 30px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
  @media (max-width: 800px) {
    left: 10rem; 
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
    @media (max-width: 800px) {
    left: 10rem; 
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
    left: 10rem; 
  }}` 

export const Avatar = styled.img`
  &.avatar  {
    justify-content:center;
    align-items:center;
    width:100px;
    height:100px;
    border-radius:50%;
    
}` 

export const Name = styled.h1`
`
export const Namedescription = styled.h2`
    flex-direction:column;
    padding: 20px 0px;
    height:1vh;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 27px;
    color: var(--black);
`
  export const Namelanguage = styled.text``
  export const Numbwatchers = styled.text``
  export const Numbstargazers = styled.text``
  export const Updated = styled.text``
  export const Jobstyle = styled.img``
  export const Localstyle = styled.img``
  export const Linkstyle = styled.img``
  export const Worldstyle = styled.img``
  export const Timestyle = styled.img``
  export const Starstyle = styled.img``
  export const Personstyle = styled.img``
  export const Flagstyle = styled.img``
  export const Following = styled.h3``   
  export const NameUser = styled.h1`` 
  export const Namelogin = styled.h2`` 
  export const Followers = styled.h3`` 
  export const Starred = styled.h3``     

   
