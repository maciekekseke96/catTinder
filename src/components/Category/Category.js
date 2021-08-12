import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getImgDetails } from '../../axios_request';
import './Category.scss';

const Category = withRouter(({ history, id, name }) => {
  const [img, setImg] = useState({});

  const setImgDetails = async () => {
    const data = await getImgDetails(id);
    setImg(data[0]);
  };

  useEffect(() => {
    setImgDetails();
  }, []);
  return (
    <div
      className="category"
      style={{ backgroundImage: `url('${img.url}')` }}
      onClick={() => history.push('/petOrNot')}
    >
      <div className="name">{name}</div>
    </div>
  );
});

export default Category;
