import React from 'react'

function FieldInput({placeholder, name, value, errormessage,onChange}) {

  return (
    <div>
        <input
        placeholder = {placeholder}
        name = {name}
        value = {value}
        onChange = {onChange}
        >
        
        </input>
        <p>{errormessage}</p>
    </div>
  )
}

export default FieldInput