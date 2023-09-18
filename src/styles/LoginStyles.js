import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 80%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 18px;

  &:hover {
    background-color: #0056b3;
  }
`;

