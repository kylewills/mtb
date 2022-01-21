import React from 'react';
// import data from './data';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';

function App() {

  const openSideMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeSideMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
  <BrowserRouter>

  <div className="grid-container">
    <header className="header">
      <div className="shop-name">
        <button onClick={openSideMenu}>
          {/* &#9776; hamburger menu */}
          &#9776;
        </button>
        <Link to="/"> Mountain Bikes for you...</Link>
        {/* <a href="index.html" className="shop-center" >Mountain Bikes for you...</a> */}
      </div>
      <div className="header-links">
        <a href="trolley.html">Shopping Trolley</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeSideMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">29er</a>
        </li>

        <li>
          <a href="index.html">26er</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">

        <Route path="/product/:id" component={ProductPage} />
        <Route path="/" exact={true} component={HomePage} />
      
      </div>

    </main>
    <footer className="footer">
      All right reserved by Kyle.
    </footer>
  </div>
  </BrowserRouter> 
  );
}

export default App;
