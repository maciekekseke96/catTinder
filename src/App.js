import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { getCategories } from './axios_request';
import Header from './components/Header/Header';
import SelectCategory from './pages/SelectCategory/SelectCategory';
import PetOrNot from './pages/PetOrNot/PetOrNot';
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
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <SelectCategory categories={this.state.categories} />}
          ></Route>
          <Route path="/petOrNot" render={() => <PetOrNot />}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
