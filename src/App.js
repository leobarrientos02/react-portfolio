import React from 'react';

// Components
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Routes } from './Components/Routes';

const App = () => {
  return (
    <div>
        <Header />
        <Routes />
        <Footer />
    </div>
  )
}

export default App;