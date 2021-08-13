import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setSelectedCategory } from '../../redux/selectedCategory/selectegCategory-actions';
import { setImages } from '../../redux/images/images-actions';
import { getImgDetails } from '../../axios_request';
import './Category.scss';

const Category = withRouter(({ history, id, name, setSelectedCategory }) => {
  const [img, setImg] = useState({});

  const setImgDetails = async () => {
    const data = await getImgDetails(id);
    setImg(data[0]);
  };

  useEffect(() => {
    setImgDetails();
     // eslint-disable-next-line
  }, []);
  return (
    <div
      className="category"
      style={{ backgroundImage: `url('${img.url}')` }}
      onClick={() => {
        setSelectedCategory({ id, name });
        history.push('/petOrNot');
      }}
    >
      <div className="name">{name}</div>
    </div>
  );
});


const mapDispatchToProps = (dispatch) => ({
  setSelectedCategory: (data) => {
    dispatch(setSelectedCategory(data));
  },
  setImages: (data) => dispatch(setImages(data)),
});
export default connect(null, mapDispatchToProps)(Category);
