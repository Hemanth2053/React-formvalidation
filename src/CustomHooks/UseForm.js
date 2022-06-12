import React from 'react'
import { useState } from 'react'

function UseForm(initialvalue) {
    
    const [formvalue, setFormValue ] = useState(initialvalue)

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

export default UseForm