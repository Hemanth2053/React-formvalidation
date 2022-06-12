import React from 'react'
import { useState } from 'react'

function useInput(initialvalue, validateOnChange = false, validate)  {
    
    const [formvalue, setFormValue ] = useState(initialvalue)
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({...formvalue, [name] : value})
        
        if (validateOnChange) {
            validate({ [name] : value})
        }
    }
  return {
    formvalue,
    setFormValue,
    handleChange,
    error, 
    setError,
  }
}

export default useInput