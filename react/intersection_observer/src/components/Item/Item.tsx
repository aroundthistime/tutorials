import React from 'react';
import {ItemType} from '../../@types/ItemType';
import './item.scss';

type Props = {
  item: ItemType;
};

function Item({item}: Props) {
  return <li className="item">{item.num}</li>;
}

export default React.memo(Item);
