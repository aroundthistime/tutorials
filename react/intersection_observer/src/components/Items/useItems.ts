/* eslint-disable import/prefer-default-export */
import {useEffect, useState} from 'react';
import {ItemType} from '../../@types/ItemType';
import useInterSectionObserver from '../../hooks/useIntersectionObserver';
import {range} from '../../utils/array';

type ReturnType = {
  loading: boolean;
  items: ItemType[];
};

export const useItems = (): ReturnType => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<ItemType[]>([]);
  const [observer, setElements, entries] = useInterSectionObserver();

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      const itemElements = document.querySelectorAll('.item');
      const lastItemElement = itemElements[itemElements.length - 1];
      setElements([lastItemElement]);
    }
  }, [items, setElements]);

  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const item = entry.target;
        observer?.unobserve(item);
        getItems();
      }
    });
  }, [entries, observer]);

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
    }, 2000);
  };

  return {
    loading,
    items,
  };
};
