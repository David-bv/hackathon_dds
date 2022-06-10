import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../helpers/url'

const RenderProducts = () => {

    const [data, setData] = useState([])

    const showData = () => {
        axios.get(url)
            .then(response => {
                console.log(response.data.results);
                setData(response.data.results);
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        showData()
    }, [])

  return (
    <div>
        {
            data.map((item) => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.vote_average}</p>
                    </div>
                ))
        }
    </div>
  )
}

export default RenderProducts