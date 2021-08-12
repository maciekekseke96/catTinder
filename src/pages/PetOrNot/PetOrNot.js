import React, { Component } from 'react';
import { connect } from 'react-redux';
import RatePet from '../../components/RatePet/RatePet';
import './PetOrNot.scss';

class PetOrNot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="petOrNot">
        <span className="selectedCategory">{`>${
          this.props.selectedCategory && this.props.selectedCategory.name
        }`}</span>
        <p className="title">Would you pet it?</p>
        <RatePet />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCategory: state.selectedCategory.selectedCategory,
});

export default connect(mapStateToProps, null)(PetOrNot);
