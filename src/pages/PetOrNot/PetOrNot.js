import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setImages } from '../../redux/images/images-actions';
import { get10Images } from '../../axios_request';
import RatePet from '../../components/RatePet/RatePet';
import './PetOrNot.scss';

const PetOrNot = ({ selectedCategory, setImages }) => {
  const setImagesToDisplay = async (id) => {
    const data = await get10Images(id);
    setImages(data);
  };

  useEffect(() => {
    setImagesToDisplay(selectedCategory.id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="petOrNot__section">
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

const mapDispatchToProps = (dispatch) => ({
  setImages: (data) => dispatch(setImages(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetOrNot);
