import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles/>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginComponent title="Login" />} />
        
          <Route path="/" element={<HomeComponent title="Pagina inicial"/>} />
          
        </Routes>
      </Router>
    </>

  );
}

export default App;