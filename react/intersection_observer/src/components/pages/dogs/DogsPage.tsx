import React from 'react';
import Dog from '../../partials/Dog/Dog';
import Loader from '../../partials/Loader/Loader';
import './dogsPage.scss';
import {useDogsPage} from './useDogsPage';

function DogsPage() {
  const {dogs, isFetchingMore, isLoading} = useDogsPage();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <ul className="dogs">
      {dogs ? (
        <>
          {dogs.map(dog => {
            return <Dog dog={dog} key={dog.id} />;
          })}
          {isFetchingMore && <Loader />}
        </>
      ) : (
        <h1>데이터가 존재하지 않습니다.</h1>
      )}
    </ul>
  );
}

export default DogsPage;
