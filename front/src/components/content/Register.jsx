import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openRegisterForm = () => {
    setShowRegisterForm(true);
  }

  const closeRegisterForm = () => {
    setShowRegisterForm(false);
  }

  const register = () => {
    console.log('Rekisteröidään käyttäjä', username);
    console.log('Salasanalla', password);

    axios.post('http://localhost:8080/user/register', {
      username: username,
      password: password
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error('Rekisteröintivirhe:', error);
    });
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div>
      <h2>Puuttuuko tunnus?</h2>

      {!showRegisterForm ? (
        <p>
          {' '}
          <a href="#" onClick={openRegisterForm}>Rekisteröidy tästä</a>
        </p>
      ) : (
        <div>
          <p className="info">Täytä molemmat kentät. Nimimerkki on samalla kirjautumistunnuksesi. Se on uniikki, eikä voi olla sama toisella käyttäjällä.</p>

          <p>Nimimerkki: <input className="field" type="text" placeholder="Valitse nimimerkki" onChange={handleUsernameChange}/></p>
          <p>Salasana: <input className="field" type="password" placeholder="Valitse salasana" onChange={handlePasswordChange}/></p>
          <button className="green" onClick={register}>Rekisteröidy</button> 
          <button onClick={closeRegisterForm}>Peruuta</button>

        </div>
      )}
    </div>
  );
};

export default Register;