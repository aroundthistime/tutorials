import React from 'react';
import ReactLoading from 'react-loading';
import './loader.scss';

function Loader() {
  return (
    <div className="loader">
      <ReactLoading type="spin" color="gray" />
    </div>
  );
}

export default React.memo(Loader);
