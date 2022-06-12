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
  const {formvalue, handleChange, setFormValue} = useInput(initialvalue);
  

  const validate = () => {
    let temp = {};
    temp.email = formvalue.email ? "" : "email is required"
    temp.password = formvalue.password ? "" : "password is required"
    setError({...temp});
    return Object.values(temp).every((e) => e ==="")
  }

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
