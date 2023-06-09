import React from 'react';
import Esferas from '../components/subasta/Esferas'

const Subasta = () => {


  return (
    <section className='flex flex-col'>
      <div className='flex flex-col justify-star items-center'>
        <h1 className='text-lg text-white font-semibold mb-2 p-1 m-1'>Esferas del Dragon</h1>
        <Esferas />
      </div>
    </section>
  );
};

export default Subasta;
