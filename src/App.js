import React, { Component } from 'react';
import { getCategories } from './axios_request';
import Header from './components/Header/Header';
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
      <div className="app">
        <Header/>
      </div>
    );
  }
}

export default App;
