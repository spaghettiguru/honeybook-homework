import React, { Component } from 'react';
import {Contact} from './components/Contact/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1>Contact List</h1>
          <input type="search" className="filter-input" placeholder="search..." />
        </header>
        <Contact 
          name="Oleg Yuzvik" 
          phoneNumber="+972547317884" 
          jobTitle="Front End Web Developer" 
          companyName="Sizmek"
          email="yuzvik.oleg@gmail.com" />
      </div>
    );
  }
}

export default App;
