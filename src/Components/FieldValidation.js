import logo from './logo.svg';
import './App.css';
import useInput from './CustomHooks/useInput';
import FieldInput from './Components/FieldInput';
import { useState } from "react"

function App() {

  const initialvalue = {
    email: "",
    password: "",
  };
  ;
  

  const validate = (fieldValue = formvalue) => {
    let temp = {...error};
    if("email" in fieldValue){
      temp.email = formvalue.email ? "" : "email is required"
    }
    if("password" in fieldValue){
      temp.password = formvalue.password ? "" : "password is required"
    }
    setError({...temp});

    if(fieldValue == formvalue){
    return Object.values(temp).every((e) => e ==="")
  }
  }
  const {formvalue, handleChange, setFormValue, error, setError} = useInput(initialvalue, true, validate)

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValue({...formvalue, [name] : value})
// }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validate()) {
      console.log(formvalue);
    }

    // console.log(formvalue)
  }

  return (
    <div>
      <form 
        style={{
          height: "30px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          padding: "40px"}}
      >
        <FieldInput
        placeholder="Email ID"
        name = "email"
        value = {formvalue.email}
        errormessage = {error.email}
        onChange = {handleChange} />
        <FieldInput
        placeholder="Password"
        name = "password"
        value = {formvalue.password}
        errormessage = {error.password}
        onChange = {handleChange} />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
