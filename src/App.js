import React, { Component } from 'react';
import { getCategories } from './axios_request';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }
  setCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  };
  componentDidMount() {
    this.setCategories();
  }
  render() {
    return (
      <div className="App">
        <h1>Here will be The Cat Tinder</h1>
      </div>
    );
  }
}

export default App;
