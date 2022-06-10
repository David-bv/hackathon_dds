import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';

function Main () {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
      const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=b9b8f01cf10467bb105fe2dcbc240863&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
      axios.get(endPoint)
      .then(response => {
        const apiData = response.data;
        setMovieList(apiData.results);
        console.log(apiData)
      })

    }, [setMovieList])

return (
        <div className='row' >
        {
            movieList.map((movie, idx) => {
                return(
                    <Card style={{ width: '18rem' }} key={idx}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                        {movie.overview}
                        </Card.Text>
                        <Button variant="primary">Añadir al carrito</Button>
                    </Card.Body>
                </Card>
                )
            })
        }

        </div>
    )
}
export default Main