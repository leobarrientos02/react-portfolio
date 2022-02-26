import React from 'react';
import { Rings } from 'react-loader-spinner';

const loading = () => {
  return (
      <div className='loadingPage'>
          <Rings width={200} height={200} color="#38d39f" />
      </div>
  )
}

export default loading