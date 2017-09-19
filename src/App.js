import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users:[],
      data: []
    };
    
    this.clickButtonHandler = this.clickButtonHandler.bind(this);
  }

  componentDidMount() {
    axios.get('/users')
    .then(users => this.setState({ users: users.data }));
  }

  clickButtonHandler() {
    axios.get('/api')
    .then(res => this.setState({ data: res.data.events }))    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <button onClick={this.clickButtonHandler}> CLick Here! </button>
        </div>
        <div>
          <h1>Users</h1>
          {this.state.users.map(user=> 
            <div key={user.id}>{user.username}</div>
          )}
        </div>
        <div id='eventList'>
          {this.state.data.map(event => 
            <div key={event.id}>{event.id+ ' ' + event.name}</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
