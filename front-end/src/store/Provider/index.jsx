import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../Context';

const MainProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabledLogin, setIsDisabledLogin] = useState(true);
  const [statusCode, setStatusCode] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const validateLogin = () => {
    const minLength = 6;
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const boolValid = emailValidate.test(email) && password.length + 1 >= minLength;
    if (boolValid) {
      setIsDisabledLogin(false);
    } else {
      setIsDisabledLogin(true);
    }
  };

  const contextValues = {
    email,
    setEmail,
    password,
    setPassword,
    validateLogin,
    isDisabledLogin,
    setIsDisabledLogin,
    statusCode,
    setStatusCode,
    totalValue,
    setTotalValue,
  };

  return (
    <MainContext.Provider value={ contextValues }>
      { children }
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainProvider;
