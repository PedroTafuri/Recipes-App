import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

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
    <div>
      <h1>Login</h1>
      <form action="">
        <label htmlFor="email">
          <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="email" placeholder="Email" />
        </label>
        <label htmlFor="password">
          <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="password" placeholder="Senha" />
        </label>
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
