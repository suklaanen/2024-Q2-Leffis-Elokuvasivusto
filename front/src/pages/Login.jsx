import React, { useState } from 'react';
import axios from 'axios';
import Register from '@content/Register';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 const navigate = useNavigate()

 //TODO: siirrä tämä järkevämpään paikkaan tai laita falseksi logoutissa
 axios.defaults.withCredentials = true

 const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:8080/auth/login', {
      username: username,
      password: password
    });
  
    if (response.status === 200) {
      props.setUser({ user: username, password: password });
      navigate('/myaccount');
    }
  } catch (error) {
    console.log(response.data);
    console.error('Kirjautumisvirhe:', error);
  }
};

  return (

    <div className="page">

        <h2>Kirjautuminen</h2>

        <p className="info">Älä koskaan jää käyttäjätunnusta ja salasanaasi ulkopuolisille.</p>


        <div id="login-form">
          <form onSubmit={handleLogin}>
            <p>Nimimerkki: <input className="field" value={username} onChange={e => setUsername(e.target.value)}></input></p>
            <p>Salasana: <input className="field" type="password" value={password} onChange={e => setPassword(e.target.value)}></input></p>
            <button>Kirjaudu sisään</button> 
          </form>
        </div>


          <br/> <br/>


        {<Register />}


    </div>

  );
};
