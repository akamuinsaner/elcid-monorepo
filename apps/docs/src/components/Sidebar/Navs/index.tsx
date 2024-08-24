import { Link } from '@elcid-monorepo/widgets';
import { Children, useCallback } from 'react';

export interface INav {
  key: string;
  name: string;
  children?: INav[];
}

export const NAVSCONFIG: INav[] = [
  {
    key: 'style',
    name: 'Style',
  },
  {
    key: 'widgets',
    name: 'Widgets',
    children: [
      {
        key: 'button',
        name: 'Button',
      },
    ],
  },
];

const Navs = () => {
  const renderNavs = useCallback(
    (navs: INav[] = [], depth: number = 0, pKey: string = '') => {
      if (!navs || !navs.length) return null;
      return (
        <ul>
          {navs.map((nav) => {
            const path = `${pKey}/${nav.key}`;
            return (
              <li key={nav.key}>
                <Link
                  href={path}
                  className="p-1.5 font-medium text-sm flex items-center rounded hover:bg-primary-hover text-primary hover:text-brand focus:bg-primary-hover focus::text-brand"
                >
                  {nav.name}
                </Link>
                {renderNavs(nav.children, depth + 1, path)}
              </li>
            );
          })}
        </ul>
      );
    },
    []
  );

  return <>{renderNavs(NAVSCONFIG)}</>;
};

export default Navs;
