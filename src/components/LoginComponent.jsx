import React, { useState } from 'react';
import { setLocalStorageItem } from '../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import {
  LoginContainer,
  Title,
  Input,
  Button,
} from '../styles/LoginStyles'; 

function LoginComponent(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      setLocalStorageItem('isLoggedIn', true);
      alert('Logado');
      navigate('/');
    }
  };

  return (
    <LoginContainer>
      <Title>{props.title}</Title>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </LoginContainer>
  );
}

export default LoginComponent;
