import React, { Component } from 'react';
import {ContactList} from './components/ContactList/ContactList';

import './App.scss';

const CONTACTS_API_URL = 'https://candidate-test.herokuapp.com/contacts';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: null,
      filterText: '',
      networkErrorOccured: false
    };

    this.onFilterChanged = this.onFilterChanged.bind(this);
  }

  async componentDidMount() {
    try {
      const contacts = await fetch(CONTACTS_API_URL).then(response => response.json())
      this.setState({contacts});
    } catch (error) {
      this.setState({networkErrorOccured: true});
    }
  }

  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1 className="page-title">Contact List</h1>
          <input 
            type="search" 
            className="filter-input" 
            placeholder="search..." 
            value={this.state.filterText} 
            onChange={this.onFilterChanged} />
        </header>
        <div className="app-content">
          {this.state.contacts && <ContactList contacts={this.state.contacts} filterText={this.state.filterText} />}
          {!this.state.contacts && !this.state.networkErrorOccured && 
            <div className="loader">Loading contacts...</div>}
          {this.state.networkErrorOccured && 
            <div className="error-message">Network error has occured. Please, refresh the page to try again.</div>}
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
