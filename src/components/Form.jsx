import React from 'react'
import { useState } from 'react'

const Form = ({newLocation}) => {
   
    const [city, setCity] = useState("");

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const onSubmit = (e) => {
      e.preventDefault();
      console.log({city})
      if(city === "" || !city) return;

      newLocation(city)
    }


  return (
    <div className='container'>
        <form onSubmit={onSubmit}>
            <div className='input-group mb-3 mx-auto'>
                <input type="text" className='form-control' placeholder='Ciudad..' onChange={handleChange}/>
                <button className='btn btn-primary input-group-text' type='submit'>Buscar</button>

            </div>
        </form>
    </div>
  )
}

export default Form