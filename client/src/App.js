import React from 'react';
import Header from './components/Header';
import CarList from './components/CarList';
import Footer from './components/Footer';
import './styles/fleetguide.css';

function App() {
  return (
    <div>
      <Header />
      <CarList />
      <Footer />
    </div>
  );
}

export default App;
