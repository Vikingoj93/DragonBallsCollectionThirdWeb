import React from 'react';
import MyPacks from '../components/MyCards'

const Cards = () => {


  return (
    <section className='flex flex-col w-full'>
      <div className='flex flex-col justify-star items-center'>
        <h1 className='text-lg text-white font-semibold mb-2 p-1 m-1'>MyCards Esferas</h1>
        <MyPacks />
      </div>
    </section>
  );
};

export default Cards;
