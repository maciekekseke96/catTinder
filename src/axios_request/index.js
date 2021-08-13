import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
});

const config = {
  headers: { 'x-api-key': 'd3b8756c-45d8-471b-ba31-64d0422348ba' },
};


const getData = async (path) => {
  const data = await api.get(`/${path}`, config).then((resp) => resp.data);
  return data;
};

export const getCategories = () => getData('categories');

export const getImgDetails = (id) => getData(`images/search?size=small&category_ids=${id}`);

export const get10Images = (id) => getData(`images/search?size=small&limit=10&category_ids=${id}`);
