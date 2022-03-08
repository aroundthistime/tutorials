import React from 'react';
import Item from '../../partials/Item/Item';
import Loader from '../../partials/Loader/Loader';
import './itemsPage.scss';
import {useItemsPage} from './useItemsPage';

function Items() {
  const {loading, items} = useItemsPage();
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
