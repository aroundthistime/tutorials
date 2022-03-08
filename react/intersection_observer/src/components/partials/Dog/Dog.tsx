import React from 'react';
import {DogType} from '../../../@types/DogType';
import './dog.scss';

type Props = {
  dog: DogType;
};

function Dog({dog}: Props) {
  return (
    <div className="dog">
      <img alt={dog.image} className="dog__image" />
    </div>
  );
}

export default Dog;
