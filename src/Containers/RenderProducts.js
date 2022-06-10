import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../helpers/url'

const RenderProducts = () => {

    const [Data, setData] = useState([])

    const showData = () => {
        axios.get(url)
            .then(response => {
                console.log(response.data.results);
                setData(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        showData()
    }, [])

  return (
    <div>RenderProducts</div>
  )
}

export default RenderProducts