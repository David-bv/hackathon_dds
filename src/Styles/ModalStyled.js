import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const ModalStyled = styled(Modal)`
  .modal-dialog {
    max-width: 800px;
    margin: 30px auto;
    padding: 0;
    .modal-content {
      background-color: #f5f5f5;
      border-radius: 10px;
      padding: 0;
      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        border-bottom: 1px solid #ccc;
        h4 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
        }
        button {
          background: none;
          border: none;
          color: #333;
          font-size: 1.5rem;
          font-weight: bold;
          cursor: pointer;
        }
      }
      .modal-body {
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        ul{
          width: 100%;
          list-style: none;
          padding: 0;
          margin: 0;
          li{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 0.5rem;
            border-bottom: 1px solid #ccc;
            img{
              height: 50px;
            }
          }
        }
        .container {
          width: 100%;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .container-image {
            width: 100%;
            height: 300px;
            border-radius: 10px;
            background-color: #f5f5f5;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 100%;
              height: 100%;
              border-radius: 10px;
            }
          }
          .container-info {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .container-info-title {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
      .modal-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        border-top: 1px solid #ccc;
        button {
          background: none;
          border: none;
          color: #333;
          font-size: 1.5rem;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
`