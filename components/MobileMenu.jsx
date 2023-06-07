import React from 'react';
import Link from 'next/link';

const MenuMobile = ({ menuItems }) => {
  return (
    <nav className="sm:hidden absolute w-full left-0 mt-2">
      <ul className="bg-orange text-white rounded-lg py-2 px-4 space-y-2">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link className="block font-bold" href={menuItem.url}>
              {menuItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuMobile;
