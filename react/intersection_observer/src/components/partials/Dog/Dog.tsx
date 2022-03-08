import React from 'react';
import {DogType} from '../../../@types/DogType';
import LazyImage from '../LazyImage/LazyImage';
import './dog.scss';

type Props = {
  dog: DogType;
};

function Dog({dog}: Props) {
  return (
    <div className="dog" data-id={`${dog.id}`}>
      <LazyImage className="dog__image" src={dog.image} alt={dog.image} />
    </div>
  );
}

export default React.memo(Dog);
