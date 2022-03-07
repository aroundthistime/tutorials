/* eslint-disable import/prefer-default-export */
import {useEffect, useState} from 'react';
import {ItemType} from '../../@types/ItemType';
import {range} from '../../utils/math';

type ReturnType = {
  loading: boolean;
  items: ItemType[];
};

export const useItems = (): ReturnType => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    setLoading(true);
    setTimeout(() => {
      // eslint-disable-next-line no-bitwise
      const lastItem = items[items.length - 1]?.num | 0;
      const newItems = range(lastItem + 1, 5).map(num => {
        const newItem: ItemType = {
          num,
        };
        return newItem;
      });
      setItems(prev => {
        return prev.concat(newItems);
      });
      setLoading(false);
    });
  };

  return {
    loading,
    items,
  };
};
