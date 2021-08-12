import React from 'react';
import { connect } from 'react-redux';
import Category from '../Category/Category';
import './Categories.scss';

const Categories = ({categories}) => {
  return (
    <div className="categories">
      {categories&&categories.map(({id, name}) => {
        return <Category key={id} id={id} name={name} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({ categories: state.categories.categories });

export default connect(mapStateToProps, null)(Categories);