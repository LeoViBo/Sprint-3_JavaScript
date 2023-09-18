import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeContainer,
  Title,
  Description,
  LoginButton,
  ResponsiveContainer,
} from '../styles/HomeStyles';

function HomeComponent(props) {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    alert('Seja bem-vindo ao site, clique no botão de login para entrar');
  }, []);

  return (
    <HomeContainer>
      <ResponsiveContainer>
        <Title>{props.title}</Title>
        <Description>
          Seja bem-vindo
        </Description>
        <LoginButton onClick={goToLogin}>Fazer login</LoginButton>
      </ResponsiveContainer>
    </HomeContainer>
  );
}

export default HomeComponent;
