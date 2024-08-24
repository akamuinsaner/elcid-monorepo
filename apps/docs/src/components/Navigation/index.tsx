'use client';
import { IconButton, Link, NavBar } from '@elcid-monorepo/widgets';
import Logo from '../Sidebar/Logo';
import { RiMenuLine } from '@remixicon/react';
import { Drawer } from '@elcid-monorepo/widgets';
import { useState } from 'react';
import SideBar from '../Sidebar';

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <NavBar className="desktop:hidden border-b border-primary border-solid">
      <Logo />
      <div className="ml-auto">
        <IconButton
          onClick={() => setDrawerOpen(true)}
          variant="secondary"
          className="p-1 rounded-md shadow-none"
        >
          <RiMenuLine />
        </IconButton>
      </div>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <SideBar className="relative left-0 w-full h-full" />
      </Drawer>
    </NavBar>
  );
};

export default Navigation;
