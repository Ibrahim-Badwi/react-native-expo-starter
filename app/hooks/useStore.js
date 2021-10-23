import { useEffect, useState } from 'react';
import storage from '../utility/storage';

const useStore = (key, initState = {}) => {
  const [value, setValue] = useState(initState);

  const getStore = async () => {
    const value = await storage.get(key);
    const obj = value || initState;

    setValue(obj);
  };

  const setStore = async (obj) => {
    await storage.store(obj);
  };

  useEffect(() => {
    getStore();
  }, []);

  return { value, setStore };
};

export default useStore;
