'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import MenuMobile from './MobileMenu';
import { ConnectWallet, useAddress, useDisconnect } from '@thirdweb-dev/react';

const Header = () => {

  const address = useAddress();

  const disconnect = useDisconnect();

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  function disconnectedWallet() {
    disconnect();
    setIsProfileOpen(false);
  }

  const logoUrl = 'https://i.postimg.cc/qR098xtC/logo-Dragon-Ball-Collection.jpg';
  
  const menuItems = [
    { label: 'Inicio', url: '/' },
    { label: 'White Paper', url: '/Whitepaper' },
    { label: 'Token', url: '/Token' },
    { label: 'Comunidad', url: '/Comunidad' },
    { label: 'Esferas del Dragón', url: '/Dragonballs' }
  ];
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (

    <header className="bg-orange text-white sticky top-0 z-50 border-white border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
            <img src={logoUrl} alt="Logo" className="h-full w-full" onClick={handleMenuToggle} />
          </div>
          <h1 onClick={handleMenuToggle} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold ml-2">
            Dragon ball NFT
          </h1>
        </div>
        <nav className="flex justify-center flex-1">
          <ul className="hidden sm:flex space-x-4">
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <Link className="hover:text-navy" href={menuItem.url}>
                  {menuItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="box-border">

         { !address ? (
          <div className='m-2'>

          < ConnectWallet 
          btnTitle=''
            className={`!bg-orange !text-white !font-bold !m-2 !py-2 !px-2 !rounded !transition-all !duration-300 !focus:outline-none ${
              !isMobileOrTablet() ? ' hover:scale-110 hover:text-navy' : ''
            }`}
          />
          </div>
         ) : (
          <div onClick={()=>setIsProfileOpen(!isProfileOpen)}
          className=' w-16 rounded-full '>
            <img className=' w-max m-3 rounded-full' 
              src="https://api.dicebear.com/6.x/adventurer-neutral/svg"
              alt="avatar"
            />
          </div>
         )
          }
          {
            isProfileOpen && (
              <div className='absolute top-16 right-5 w-48 bg-orange border border-white p-3 '>
                <Link href={"perfil"}>
                  <p>Perfil</p>
                </Link>
              <button onClick={disconnectedWallet}>
                Logout
              </button>
              </div>
            )
          }

        </div>
      </div>
      {isMenuOpen && <MenuMobile menuItems={menuItems} />}
    </header>
  );
};

export default Header;

// Función para verificar si el dispositivo es móvil o tablet
function isMobileOrTablet() {
  if (typeof navigator !== 'undefined') {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  return false; // Tratar como no móvil o tablet si no se puede acceder a `navigator`
}
