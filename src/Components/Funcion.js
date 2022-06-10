// Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

// Listeners

cargarEventListeners();
function cargarEventListeners() {
  //cuando se agrega un curso por medio del botón "agregar al carrito"
  listaCursos.addEventListener("click", agregarCurso);

  //Cuando se da click en eliminar al curso del carrito
  carrito.addEventListener("click", eliminarCurso);

  //Mostrar lo del storage
  document.addEventListener('DOMContentLoaded', () => {
    articulosCarrito = JSON.parse(localStorage.getItem('carrito') || [])
    carritoHTML()
  })

  //click en "vaciar carrito"
  vaciarCarritoBtn.addEventListener('click', () => {
      articulosCarrito = [];
      carritoHTML();
  });

  //Guardar en localStorage
  document.addEventListener('DOMContentLoad', () => {
      if (localStorage.getItem('carrito')){
          carrito = JSON.parse(localStorage.getItem('carrito'))
          articulosCarrito();
      }
  })
}

// Funciones
function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;

    leerDatosCurso(cursoSeleccionado);
  }
}

function eliminarCurso(e) {
  // console.log(e.target.classList)
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");
    //Eliminar del arreglo
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);

    //Volver a pintar el carrito HTML sin el elemento eliminado

    carritoHTML();
  }
}

//Leer el contenido del HTML y extraer info del curso
function leerDatosCurso(curso) {
  // console.log(curso);

  //Creo un objeto con la información recibida
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    title: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  // console.log(infoCurso);

  //Revisar si el elemento está en el carrito
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    //Actualizar la cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
    articulosCarrito = [...cursos];
  } else {
    //Agregar los cursos a un arreglo del carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

//   console.log(articulosCarrito);

  carritoHTML();
}

//Mostrar lo seleccionado en el carrito de compras HTML
function carritoHTML() {
  //Limpiar el carrito del HTML de forma lenta
  //    function  limpiarHTML() {
  //     contenedorCarrito.innerHTML = " "
  // }
  //     limpiarHTML();

  // Limpiar el carrito de forma más eficiente
  function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
      contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
  }
  limpiarHTML();

  //Recorre el carrito y crea el HTML
  articulosCarrito.forEach((element) => {
    const { imagen, title, precio, cantidad, id } = element;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td> <img src="${imagen}" width="100" > </td>
        <td> ${title} </td>
        <td> ${precio} </td>
        <td> ${cantidad} </td>
        <td> 
            <a href="#" class="borrar-curso" data-id="${id}" > X </a>
        </td>
        `;

    //Agregar el HTML del carrito en el t-body

    contenedorCarrito.appendChild(row);

    sincronizarStorage();

  });
}

function sincronizarStorage() {
  localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

