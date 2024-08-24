import { ReactNode } from 'react';
import SideBar from '../Sidebar';
import Navigation from '../Navigation';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Navigation />
      <div className="w-full desktop:max-w-8xl flex-1 flex flex-col mx-auto desktop:pl-60">
        <SideBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Wrapper;
