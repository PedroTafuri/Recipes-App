/* eslint-disable */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import '../CSS/login.css';

function Login({ history }) {
  const [disableButton, setDisableButton] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const loginValidation = () => {
    // const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const email = regex.test(String(userEmail).toLowerCase());
    // const password = userPassword.length >= 6;
    // setDisableButton(!(email && password));
    setDisableButton(false);
  };

  const submitActions = () => {
    localStorage.setItem('mealsToken', '');
    localStorage.setItem('cocktailsToken', '');
    localStorage.setItem('email', userEmail);
    history.push('/explorar');
  };

  useEffect(() => {
    loginValidation();
  }, [userEmail, userPassword]);

  return (
    <div id="login-main-div">
      <h1>Login</h1>
      <form id="user-info" action="">
        <div className="text-field">
          <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="text" />
          <span></span>
          <label htmlFor="email">Email</label>
        </div>
        <div className="text-field">
          <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="password" />
          <span></span>
          <label htmlFor="password">Senha</label>
        </div>
        <button onClick={submitActions} disabled={disableButton} type="button">  Entrar</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func,
  }).isRequired,
};

export default Login;
