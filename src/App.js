import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({ users }));
  }

  clickButtonHandler() {
    // console.log(this.state.users)
    fetch('/api')
    .then(res => res.json())
    .then(api => this.setState({ data: api.events }))    
    // .then(api => console.log(api.numFound, api.events))
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
