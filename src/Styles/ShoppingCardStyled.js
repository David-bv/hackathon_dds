import styled from "styled-components";

export const ShopingCartStyled = styled.section`  
 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;

  
  .closed{
    display: none;
  }
  .open{
    display: flex;
    flex-direction: column;
    height:fit-content;
    background-color: white;
    position: absolute;
    top: 50px;  
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        border-bottom: 1px solid #ccc;
      }
     img{

      height: 50px;
    }
  }
    z-index: 100;
  }
  
`