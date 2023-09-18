import styled from 'styled-components';

export const HomeContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const LoginButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ResponsiveContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;