import React from 'react';
import Categories from '../../components/Categories/Categories';
import './SelectCategory.scss';

const SelectCategory = () => {
  return (
    <div className="selectCategory__section">
      <p className="title">Select a category</p>
      <Categories />
    </div>
  );
};

export default SelectCategory;
