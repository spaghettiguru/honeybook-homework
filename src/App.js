import React, { Component } from 'react';
import {ContactList} from './components/ContactList/ContactList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: null
    };
  }

  async componentDidMount() {
    const contacts = await fetch('https://candidate-test.herokuapp.com/contacts').then(response => response.json())
    this.setState({contacts});
  }

  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1>Contact List</h1>
          <input type="search" className="filter-input" placeholder="search..." />
        </header>
        <div className="app-content">
          {this.state.contacts && <ContactList contacts={this.state.contacts} />}
        </div>
      </div>
    );
  }
}

export default App;
