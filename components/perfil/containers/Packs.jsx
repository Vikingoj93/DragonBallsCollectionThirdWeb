import React from 'react';
import MyCards from '../components/MyPacks'

const Packs = () => {


  return (
    <section className='flex flex-col w-full'>
      <div className='flex flex-col justify-star items-center'>
        <h1 className='text-lg text-white font-semibold mb-2 p-1 m-1'>MyPacks Esferas</h1>
        <MyCards />
      </div>
    </section>
  );
};

export default Packs;
