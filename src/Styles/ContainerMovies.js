import styled from 'styled-components'

export const ContainerMovies = styled.div`
  width: 90%;

  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .card{
    width: 15%;
    margin: 0.5rem;
    max-height: 450px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5rem;
    .card-body{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

    }
  }
  img{
    width: 125px;
  }
`