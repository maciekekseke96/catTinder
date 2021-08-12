import React, { Component } from 'react';
import RatePet from '../../components/RatePet/RatePet';
import './PetOrNot.scss';

class PetOrNot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="petOrNot">
        <span className="selectedCategory">{`>${'Space'}`}</span>
        <p className="title">Would you pet it?</p>
        <RatePet />
      </div>
    );
  }
}

export default PetOrNot;
