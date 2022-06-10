import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ShopingCartStyled } from "../Styles/ShoppingCardStyled";
import { FaTrashAlt } from "react-icons/fa";
import { ShoppingCart } from "./ModalShoping";
const ShopingCard = ({ setProductos, productos }) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleDelete(e) {
    let id = e.target.id;
    console.log(id);
    let pelicula = [];
    productos.forEach((innerMovie) => {
      if (parseInt(innerMovie.id) === parseInt(id)) {
        pelicula = innerMovie;
      }
    });
    console.log("pelicula", pelicula);
    let newProductos = productos.filter(
      (producto) => producto.id !== pelicula.id
    );
    console.log("newProductos", newProductos);
    setProductos(newProductos);
  }
  function handleEmptyCart() {
    setProductos([]);
  }

  function handleShop(){
    setShow(true)

  }
  return (
    <ShopingCartStyled>
      <div className="shoping-cart closed">
        <h1>Shoping Card</h1>
        <ul>
          {productos?.length > 0
            ? productos.map((producto, idx) => {
                return (
                  <li key={idx}>
                   
                      <FaTrashAlt 
                        id={producto.id} onClick={handleDelete}
                        size={20}
                        style={{
                          cursor: "pointer",

                        }}
                      />
                    
                    <p>{producto.title ?? producto.name}</p>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${producto.poster_path}`}
                      alt={producto.title}
                    />
                 
                  </li>
                );
              })
            : "No hay productos"}
          <li>
            <h2>Total: ${productos?.length * 1000}</h2>
          </li>
          <li>
            <Button
              variant="primary"
              onClick={handleShop}
            >Comprar</Button>
          </li>
          <li>
            <Button variant="danger"
              onClick={handleEmptyCart}
            >Vaciar carrito</Button>
          </li>
        </ul>
      </div>
      <ShoppingCart show={show} setShow={setShow} handleClose={handleClose}  handleShow={ handleShow} productos={productos} />
    </ShopingCartStyled>
  );
};

export default ShopingCard;
