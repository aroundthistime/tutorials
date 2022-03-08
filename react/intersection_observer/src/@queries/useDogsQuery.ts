/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {useInfiniteQuery} from 'react-query';
import {DogType} from '../@types/DogType';

const getRandomDogImages = async (): Promise<DogType[] | undefined> => {
  const FETCH_UNIT = 10;
  const {
    data: {message},
  } = await axios.get(`https://dog.ceo/api/breeds/image/random/${FETCH_UNIT}`);
  const result = message?.map((image: string) => {
    return {
      image,
      id: Math.random(),
    };
  });
  return result;
};

export const useDogsQuery = () => {
  return useInfiniteQuery('dogs', getRandomDogImages, {
    getNextPageParam: lastPage => {
      return lastPage;
    },
  });
};
