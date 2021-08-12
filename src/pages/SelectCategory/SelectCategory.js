import React from 'react';
import Categories from '../../components/Categories/Categories';
import './SelectCategory.scss';

const SelectCategory = ({categories}) => {
  return (
    <div className="selectCategory_section">
      <p className="title">Select a category</p>
      <Categories categories={categories} />
    </div>
  );
};

export default SelectCategory;
