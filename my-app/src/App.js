import React from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Axios from "axios";


function App() {

  Axios({
    method: "GET",
    url: "http://localhost:3000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (

    <div>
        <Header/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
