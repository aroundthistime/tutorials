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
  const {data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage} =
    useDogsQuery();

  useEffect(() => {
    if (data) {
      const dogsElements = Array.from(document.querySelectorAll('.lazy-image'));
      setElements(dogsElements);
    }
  }, [data, setElements]);

  const loadLazyImage = (imageElement: HTMLImageElement) => {
    if (imageElement.dataset.src) {
      // eslint-disable-next-line no-param-reassign
      imageElement.src = imageElement.dataset.src;
    }
    imageElement.classList.remove('lazy-image');
  };

  useEffect(() => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        if (targetElement.tagName === 'IMG') {
          loadLazyImage(targetElement as HTMLImageElement);
        }
        observer?.unobserve(targetElement);
        // console.log(entries.length, index, hasNextPage);
        if (
          entries.length - 1 === index &&
          hasNextPage &&
          !isFetchingNextPage
        ) {
          fetchNextPage();
        }
      }
    });
  });

  const dogs = useMemo(() => {
    return data?.pages
      .filter((group: DogType[] | undefined): group is DogType[] => {
        return group !== undefined;
      })
      .flat();
  }, [data]);

  return {
    dogs,
    isLoading,
    isFetchingMore: isFetchingNextPage,
  };
};
