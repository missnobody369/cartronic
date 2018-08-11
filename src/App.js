import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import { 
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        {this.props.children}
        /*<Footer />*/
      </div>

    );
  }
}

export default App;