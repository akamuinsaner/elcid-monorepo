import { Link } from '@elcid-monorepo/widgets';

const Logo = () => {
  return (
    <Link className="flex items-center h-8" href="/">
      <img className="w-8 h-8" alt="logo" />
      <span className="font-bold text-base text-primary">NTAdmin</span>
    </Link>
  );
};

export default Logo;
