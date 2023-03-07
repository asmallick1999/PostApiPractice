import './App.css';
import { useState } from 'react';




function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function clicked(){
    console.log(name, email, mobile);
  }

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <input value={name} type="text" name="name" onChange={(e)=>{setName(e.target.value)}}/> <br />
      <input value={email} type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}}/> <br />
      <input value={mobile} type="text" name="mobile" onChange={(e)=>{setMobile(e.target.value)}}/> <br />
      <button onClick={clicked}>Sign Up</button>
    </div>
  );
}

export default App;
