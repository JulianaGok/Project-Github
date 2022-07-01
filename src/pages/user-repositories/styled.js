import styled from "styled-components"

export const Container = styled.div`
position: relative;
width: 70%;
height:200px;
left: 25rem;
top: 120px;
padding: 30px 40px;
margin:20px 30px;
background:#ffffff;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
border-radius: 8px; 
@media (max-width: 800px) {
  top: 55rem;
  left: 2rem; 
  width: 80%;

  }` 

export const Name = styled.h1`
width: 213px;
height: 46px;
left: 478px;
top: 200px;

font-family: 'Mulish';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 20px;
color: #000000;
`
export const Namedescription = styled.h2`
width: 484px;
height: 20px;
left: 478px;
top: 220px;

font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 34px;
color: #000000;
`
export const Namelanguage = styled.text`
width: 72px;
height: 15px;
left: 498px;
top: 100px;

font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #7E7E7E;
`
export const Numbwatchers = styled.text`
width: 8px;
height: 15px;
left: 801px;
top: 309px;

font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #7E7E7E;
`
export const Numbstargazers = styled.text`
width: 8px;
height: 15px;
left: 765px;
top: 497px;

font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

color: #7E7E7E;
`
export const Updated = styled.text`
width: 139px;
height: 15px;
left: 598px;
top: 309px;
font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

color: #7E7E7E;
`

export const ContainerUser = styled.div`
position: absolute;
width: 324px;
height: 361px;
left: 58px;
top: 112px;

background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
border-radius: 8px;
@media (max-width: 800px) {
  left: 10rem; 
  }`     


export const Avatar = styled.img`
  &.avatar  {
    width:100px;
    height:100px;
    border-radius:50%;
}`    

export const ContainerAbout = styled.div`
position: absolute;
width: 324px;
height: 298px;
left: 58px;
top: 481px;

background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
border-radius: 8px;   
@media (max-width: 800px) {
  left: 10rem; 
  }`  

export const ContainerEmphasis = styled.div`
position: absolute;
width: 324px;
height: 125px;
left: 58px;
top: 787px;

background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
border-radius: 8px;
@media (max-width: 800px) {
  left: 10rem; 
  }`    
