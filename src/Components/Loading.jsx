import React from 'react';
import { RotatingSquare } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div>
        <RotatingSquare color="#1e40af" height={550} width={500} />
    </div>
  )
}
