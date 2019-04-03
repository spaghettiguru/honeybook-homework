import React, { Component } from 'react';
import {ContactList} from './components/ContactList/ContactList';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: null,
      filterText: ''
    };

    this.onFilterChanged = this.onFilterChanged.bind(this);
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
          <input 
            type="search" 
            className="filter-input" 
            placeholder="search..." 
            value={this.state.filterText} 
            onChange={this.onFilterChanged} />
        </header>
        <div className="app-content">
          {this.state.contacts && <ContactList contacts={this.state.contacts} filterText={this.state.filterText} />}
          {!this.state.contacts && <div className="loader">Loading contacts...</div>}
        </div>
      </div>
    );
  }

  onFilterChanged(e) {
    this.setState({
      filterText: e.target.value
    });
  }
}

export default App;
