import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from './logger';

const store = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    logger.error(error);
  }
};

const get = async (key) => {
  try {
    const item = await AsyncStorage.getItem(key);
    return JSON.parse(item);
  } catch (error) {
    logger.error(error);
  }
};

export default { get, store };
