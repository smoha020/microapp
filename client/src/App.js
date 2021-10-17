import React, { Component } from 'react'
import axios from'axios'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      message: ''
    }
  }

  handleClick1 = () => {
    
    axios.get('/api1')
    .then(res => {
      this.setState({message: res.data})
    })
    .catch(err => {
      console.log('serviceOne did not connect')
    })
  }

  handleClick2 = () => {
    
    axios.get('/api2')
    .then(res => {
      this.setState({message: res.data})
    })
    .catch(err => {
      console.log('serviceTwo did not connect')
    })
  }

  handleClick3 = () => {
    
    axios.get('/api3')
    .then(res => {
      this.setState({message: res.data})
    })
    .catch(err => {
      console.log('serviceThree did not connect')
    })
  }

  render() {
    return(
      <div>
        <h1>Welcome to microapp</h1>
        <button onClick={this.handleClick1}>Service One: </button> <p> {this.state.message? (this.state.message):('waiting')}</p>
        <button onClick={this.handleClick2}>Service Two: </button> <p> {this.state.message? (this.state.message):('waiting')}</p>
        <button onClick={this.handleClick3}>Service Three: </button> <p> {this.state.message? (this.state.message):('waiting')}</p>        
      </div>
    )
  };
}

export default App;
