import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { getCategories } from './axios_request';
import { setCategories } from './redux/categories/categories-actions';
import Header from './components/Header/Header';
import SelectCategory from './pages/SelectCategory/SelectCategory';
import PetOrNot from './pages/PetOrNot/PetOrNot';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  setCategories = async () => {
    const categories = await getCategories();
    this.props.setCategories(categories)
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
            render={() => <SelectCategory />}
          ></Route>
          <Route path="/petOrNot" render={() => <PetOrNot />}></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCategories: (data) => dispatch(setCategories(data)),
});

export default connect(null, mapDispatchToProps)(App);
