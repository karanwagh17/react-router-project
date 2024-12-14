
import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    let obj =
    {
        email:email,
        password:password
    }
    console.log(obj);
    
    fetch('https://reqres.in/api/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(data => {var reqtocken=data.token
      localStorage.setItem("token", JSON.stringify(reqtocken));
    })
    .catch(error => console.error('tocken not found'));  

}
 
  return (
    <div>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  </div>
  )
}

export default Login
