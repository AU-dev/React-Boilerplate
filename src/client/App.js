import React, { Component } from 'react';
import { Outlet as PageContent} from "react-router-dom";
import './app.css';
import Footer from './components/Footer';
import Header from './components/Header';

// Outlet (PageContent) contains all the subroutes of '/' (aka all the content in whatever page you visit). Header and footer are always the same so theyre seperated out in the app component like this so they dont need to be rerendered when switching pages.
export default class App extends Component {

  render() {
    return (
      <>
      <Header />
      <PageContent />
      <Footer />
      </>
      
    );
  }
}
