import React from 'react';
import { connect } from 'react-redux';
import RatePet from '../../components/RatePet/RatePet';
import './PetOrNot.scss';

const PetOrNot = ({selectedCategory}) => {
  return (
    <div className="petOrNot">
      <span className="selectedCategory">{`>${
        selectedCategory && selectedCategory.name
      }`}</span>
      <p className="title">Would you pet it?</p>
      <RatePet />
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCategory: state.selectedCategory.selectedCategory,
});

export default connect(mapStateToProps, null)(PetOrNot);
