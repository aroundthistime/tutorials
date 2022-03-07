import React from 'react';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import './items.scss';
import {useItems} from './useItems';

function Items() {
  const {loading, items} = useItems();
  return (
    <ul className="items">
      {items.map(item => {
        return <Item item={item} key={item.num} />;
      })}
      {loading && <Loader />}
    </ul>
  );
}

export default Items;
