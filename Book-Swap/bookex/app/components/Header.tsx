import React from 'react';
import { MagnifyingGlassIcon, UserIcon, ShoppingCartIcon, HeartIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import {UserButton} from '@clerk/nextjs';
function Header() {
  return (
    <div>
      {/* left */}
      <div className="flex text-gray-400 items-center justify-center bg-black justify-between px-5 py-2 sm:px-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, aliquid.
      </div>

      <div className="flex bg-white justify-between shadow-md">
        <div className="flex bg-white justify-between mx-5">
          {/* Home */}
          <div className="p-4 cursor-pointer hover:text-violet-600 active:text-violet-700 hover:pb-1 hover:underline font-bold ">Home</div>

          {/* Catalog, Shop, Pages, Blog (hidden on small screens) */}
          <div className="hidden sm:flex">
            <div className="p-4 cursor-pointer hover:text-violet-600 active:text-violet-700 pb-1 hover:underline font-bold ">Catalog</div>
            <div className="p-4 cursor-pointer hover:text-violet-600 active:text-violet-700 pb-1 hover:underline font-bold ">Shop</div>
            <div className="p-4 cursor-pointer hover:text-violet-600 active:text-violet-700 pb-1 hover:underline font-bold ">Pages</div>
            <div className="p-4 cursor-pointer hover:text-violet-600 active:text-violet-700 pb-1 hover:underline font-bold ">Blog</div>
          </div>
        </div>

        <div className="flex bg-white justify-center my-3 mx-5">
          {/* Country (hidden on small screens) */}
          <div className="hidden sm:flex px-2">
            <div className="px-1 py-2 cursor-pointer font-bold">United States</div>
            <ChevronDownIcon className="h-8 w-8 text-gray-500 px-1 my-1.5" />
          </div>

          {/* Currency (hidden on small screens) */}
          <div className="hidden sm:flex px-2">
            <div className="px-1 py-2 cursor-pointer font-bold">USD</div>
            <ChevronDownIcon className="h-8 w-8 text-gray-500 px-1 my-1.5" />
          </div>

          {/* Language */}
          <div className="flex px-2">
            <div className="px-1 py-2 cursor-pointer font-bold">EN</div>
            <ChevronDownIcon className="h-8 w-8 text-gray-500 px-1 my-1.5" />
          </div>

          {/* Icons */}
          <MagnifyingGlassIcon className="h-10 w-10 text-gray-500 hover:text-violet-600 active:text-violet-700 px-2 cursor-pointer" />
          <UserIcon className="h-10 w-10 text-gray-500 px-2 cursor-pointer hover:text-violet-600 active:text-violet-700" />
          <HeartIcon className="h-10 w-10 px-2 text-gray-500 cursor-pointer hover:text-violet-600 active:text-violet-700" />
          <ShoppingCartIcon className="h-10 w-10 px-2 text-gray-500 cursor-pointer hover:text-violet-600 active:text-violet-700" />
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </div>
  );
}

export default Header;
