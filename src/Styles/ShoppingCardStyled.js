import styled from "styled-components";

export const ShopingCartStyled = styled.section`  
  position: absolute;
  top: 50px;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: white;
  .closed{
    display: none;
  }
  .open{
    display: flex;
  }
`