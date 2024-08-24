import { twMerge } from 'tailwind-merge';
import Logo from './Logo';
import Navs from './Navs';

const SideBar = ({ className }: { className?: string }) => {
  const classes = twMerge(
    'w-0 desktop:w-60 transform-[width] overflow-hidden fixed left-[calc(50%-45rem)] inset-y-0 border-solid border-r border-primary px-4 py-6',
    className
  );
  return (
    <aside className={classes}>
      <div className="py-4 px-1 flex items-center">
        <Logo />
      </div>
      <Navs />
    </aside>
  );
};

export default SideBar;
