import React from 'react'
import { useState } from 'react'

function App() {

  const [steps, setSteps] = useState(1)

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleStepsInc = () => {
    if(steps >= 3){
      setSteps(3);
    }else{
      setSteps(steps + 1)
    }
  }
  const handleStepsDec = () => {
      if(steps <= 1){
        setSteps(1);
      }else{
        setSteps(steps - 1)
      } 
    }
  

  return (
    <div
      style = {{textAlign: "center",
                height: "100vh",
                width: "20%",
                display:"flex",
                flexDirection: "column",}}
    >
      <h3>{steps} of 3</h3>
      {steps === 1 ? <input
      placeholder="User Name"
      value = {username}
      onChange = {(e) => setUsername(e.target.value)} 
      /> : null}
      { steps === 2 ?<input
      placeholder="Email Id"
      value = {email}
      onChange = {(e) => setEmail(e.target.value)} 
      /> : null}

      { steps === 3 ? 
      <input
      placeholder="Password"
      value = {password}
      onChange = {(e) => setPassword(e.target.value)} 
      />
       : null }
      

      <div >
        <button onClick={()=>handleStepsDec()}>back</button>
        <button onClick={()=>handleStepsInc()}>Next</button>
      {steps ===3 ? <button>Login</button> : null}
        
      </div>

      

    </div>
  )
}

export default App