import React from 'react'
import { useState } from 'react'

function useInput(initialvalue) {
    
    const [formvalue, setFormValue ] = useState(initialvalue)
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({...formvalue, [name] : value})
        
    }
  return {
    formvalue,
    setFormValue,
    handleChange,
  }
}

export default useInput