import styled from 'styled-components'
import image from '../Assets/img/header.webp'
export const HeaderStyled = styled.header`

  padding: 0.5rem;  
  background:url(${image});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px auto;
  width: 90%;
  height: 300px;
  border-radius: 10px;
  .container{
    width: 100%;
    padding: 0.5rem;
    ;
       
    opacity: 0.7;
    h1, h3{
      color: white;
      opacity:1;
    }
  }
`
