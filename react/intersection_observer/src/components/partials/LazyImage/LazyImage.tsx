import React from 'react';

type Props = {
  className?: string;
  src: string;
  alt?: string;
};

function LazyImage({className = '', src, alt}: Props) {
  return (
    <img
      className={`lazy-image ${className}`}
      data-src={src}
      alt={alt || src}
    />
  );
}

export default LazyImage;
