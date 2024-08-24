'use client';
import { IconButton, Link, NavBar } from '@elcid-monorepo/widgets';

import { RiMenuLine, RiShoppingBag3Line } from '@remixicon/react';
import { Drawer } from '@elcid-monorepo/widgets';
import { useState } from 'react';

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <NavBar className="border-b border-primary border-solid gap-[103px]">
      <Link className="flex items-center h-8" href="/">
        <img className="w-8 h-8" alt="logo" src="/logo.svg" />
        <span className="font-bold text-base text-primary">StyleNest</span>
      </Link>
      <ul role="navigation" className="gap-8 hidden desktop:flex">
        <li>
          <Link>Shop all</Link>
        </li>
        <li>
          <Link>Latest arrivals</Link>
        </li>
      </ul>
      <div className="ml-auto flex gap-4">
        <Link className="inline-block">
          <RiShoppingBag3Line />
        </Link>
        <Link className="inline-block desktop:hidden">
          <RiMenuLine />
        </Link>
      </div>
    </NavBar>
  );
};

export default Navigation;
