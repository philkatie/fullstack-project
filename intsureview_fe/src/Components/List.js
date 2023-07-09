import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function List() {

    const [paranormalActivity, setParanormalActivity] = useState([]);

    const getParanormalActivity = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        setParanormalActivity(response.data.results);
    }

    useEffect(() => {
        getParanormalActivity();
    }, [])

  return (
    <div>
      {/* {
        paranormalActivity.map((i) => (
            <div>
                <p>{i.email}</p>
                <p>{i.description}</p>
            </div>
        ))
      } */}
    </div>
  )
}