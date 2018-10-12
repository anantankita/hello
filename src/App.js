import React, { Component } from 'react';
import Profile from './components/Profile'

class App extends Component {
  // constructor(){
  //   super();
  //
  //   this.state = {
  //     profile: ['Name:', 'Address:', 'Email:', 'Phone:']
  //   }
  // }

  render() {

    // const {profile} = this.state;

    return (
      <div className="App">
        <Profile />
      </div>
    );
  }
}

export default App;
