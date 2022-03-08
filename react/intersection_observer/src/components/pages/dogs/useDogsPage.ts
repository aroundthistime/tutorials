/* eslint-disable import/prefer-default-export */

import {useEffect, useMemo} from 'react';
import {useDogsQuery} from '../../../@queries/useDogsQuery';
import {DogType} from '../../../@types/DogType';
import useInterSectionObserver from '../../../hooks/useIntersectionObserver';

type ReturnType = {
  dogs: DogType[] | undefined;
  isLoading: boolean;
  isFetchingMore: boolean;
};

export const useDogsPage = (): ReturnType => {
  const [observer, setElements, entries] = useInterSectionObserver();
  const {data, isLoading, isFetching, hasNextPage, fetchNextPage} =
    useDogsQuery();

  useEffect(() => {
    if (data) {
      const dogsElements = Array.from(document.querySelectorAll('.dog'));
      setElements(dogsElements);
    }
  }, [data, setElements]);

  useEffect(() => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const item = entry.target;
        observer?.unobserve(item);
        if (entries.length - 1 === index && hasNextPage) {
          fetchNextPage();
        }
      }
    });
  });

  const dogs = useMemo(() => {
    return data?.pages
      .filter((group: string[] | undefined): group is string[] => {
        return group !== undefined;
      })
      .flat()
      .map(imageUrl => {
        return {
          image: imageUrl,
        };
      });
  }, [data]);

  return {
    dogs,
    isLoading,
    isFetchingMore: isFetching,
  };
};
