import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export function ShoppingCart({show, setShow, handleClose, handleShow, productos}) {  

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>A difrutar tus peliculas 🎥🍿</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul style={{
                listStyle: "none",
            }}>
          {
          productos.length > 0
          ? productos.map((producto, idx) => {
              return (
                <li key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.5rem",
                    borderBottom: "1px solid #ccc",
                    
                  }}
                
                >
                  <p>{producto.title ?? producto.name}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${producto.poster_path}`}
                    alt={producto.title}
                    style={{
                      height: "50px",
                    }}
                  />
                </li>
              );
            }
          )
          : <p>No hay peliculas en el carrito</p>
          }
          </ul>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

