import React from 'react';
import Category from '../Category/Category';
import './Categories.scss';

const Categories = ({ categories }) => {
  return (
    <div className="categories">
      {categories.map(({id, name}) => {
        return <Category key={id} id={id} name={name} />;
      })}
    </div>
  );
};

export default Categories;
