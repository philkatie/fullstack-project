import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function List() {

    const [info, setInfo] = useState([]);

    const getInfo = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        setInfo(response.data.results);
    }

    useEffect(() => {
        getInfo();
    }, [])

  return (
    <div>
      {
        info.map((i) => (
            <div>
                <p>{i.name}</p>
                <p>{i.description}</p>
            </div>
        ))
      }
    </div>
  )
}
