import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';

function Main ({setProductos}) {
    
    const [movieList, setMovieList] = useState([]);
    
    function handleClick(e){
        let id = e.target.id
        let movie = movieList.find(movie => movie.id === id)
        console.log('movie', movie)
        console.log(e.target.id)

    
    }
    const [serieList, setSerieList] = useState([]);

    useEffect(() => {
      const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=b9b8f01cf10467bb105fe2dcbc240863&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
      axios.get(endPoint)
      .then(response => {
        const apiData = response.data;
        setMovieList(apiData.results);

        console.log(apiData);
      })

    }, [setMovieList])
    useEffect(() => {
      const endSeriePoint = 'https://api.themoviedb.org/3/tv/top_rated?api_key=b9b8f01cf10467bb105fe2dcbc240863&language=en-US&page=1';
      axios.get(endSeriePoint)
      .then(response => {
        const apiDataSerie = response.data;
        setSerieList(apiDataSerie.results);
        console.log(apiDataSerie)
      })

    }, [setSerieList])

return (
    <>
        <div className='row' >
            <h2>Películas</h2>
        {
            movieList.map((movie, idx) => {
                return(
                    <Card className='col-3' key={idx}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                        {movie.overview.substring(0,50)}...
                        </Card.Text>
                        <Button variant="primary" type='button' id={movie.id} onClick={handleClick} >Añadir al carrito 😀</Button>
                    </Card.Body>
                </Card>
                )
            })
        }
        </div>

        <div>
        <div className='row' >
            <h2>Series de TV</h2>
        {
            serieList.map((serie, idx) => {
                return(
                    <Card className='col-3' key={idx}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{serie.title}</Card.Title>
                        <Card.Text>
                        {serie.overview.substring(0,20)}
                        </Card.Text>
                        <Button variant="primary">Añadir al carrito</Button>
                    </Card.Body>
                </Card>
                )
            })
        }
        </div>

        </div>
    </>
    )
}
export default Main