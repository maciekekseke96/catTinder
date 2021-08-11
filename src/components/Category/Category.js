import React, { useState, useEffect } from 'react';
import { getImgDetails } from '../../axios_request';
import './Category.scss';

const Category = ({ id, name }) => {
  const [img, setImg] = useState({});

  const setImgDetails = async () => {
    const data = await getImgDetails(id);
    setImg(data[0])
  };
  useEffect(() => {
    setImgDetails();
  }, []);
  return (
    <div className="category" style={{ backgroundImage: `url('${img.url}')` }}>
      <div className="name">{name}</div>
    </div>
  );
};

export default Category;
