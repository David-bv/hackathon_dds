import styled from "styled-components";

export const ShopingCartStyled = styled.section`  
  position: absolute;
  top: 50px;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;

  
  .closed{
    display: none;
  }
  .open{
    display: flex;
    flex-direction: column;
    height:fit-content;
    background-color: white;
    ul img{
      height: 50px;
    }
    z-index: 100;
  }
  
`