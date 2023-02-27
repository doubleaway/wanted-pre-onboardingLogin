import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/style.css';
import Index from './pages';
import Header from './component/header';
import Menu from './component/menu';

const App = () => {
  return (
    <>
      <Header></Header>
      <section className='content_body'>
        <Menu></Menu>
        <Index></Index>
      </section>


    </>

  )
}

export default App;
