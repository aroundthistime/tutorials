/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {useInfiniteQuery} from 'react-query';

const getRandomDogImages = async (): Promise<string[] | undefined> => {
  const FETCH_UNIT = 10;
  const {
    data: {message},
  } = await axios.get(`https://dog.ceo/api/breeds/image/random/${FETCH_UNIT}`);
  return message;
};

export const useDogsQuery = () => {
  return useInfiniteQuery('dogs', getRandomDogImages);
};
