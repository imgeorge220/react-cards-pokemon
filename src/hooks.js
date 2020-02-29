import { useState } from 'react';
import axios from 'axios';
import uuid from "uuid";

const useFlip = (initialVal = true) => {
  const [value, setValue] = useState(initialVal);
  const toggle = () => {
    setValue(oldValue => !oldValue);
  }

  return [value, toggle];
}

const useAxios = url => {
  const [value, setValue] = useState([]);

  const addElement = async (name = '') => {
    const response = await axios.get(`${url}/${name}`);

    setValue(oldValue => [...oldValue, {...response.data, id: uuid()}]);
  };

  return [value, addElement];
}

export {
  useFlip,
  useAxios
}