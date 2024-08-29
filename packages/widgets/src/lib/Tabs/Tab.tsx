'use client';
import {
    forwardRef,
    MouseEventHandler,
    useContext,
    useEffect,
    useRef,
} from 'react';
import { NTATab } from './types';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { TabsContext, NTATabsContext } from './context';
import classNames from 'classnames';

const Tab = ({ children, index, ...props }: NTATab) => {
    const ref = useRef<HTMLLIElement>(null);
    const context = useContext<NTATabsContext>(TabsContext);
    const classes = twMerge(
        styles.tab.base,
        classNames({
            [styles.tab.active]: context.active === index,
        }),
        props.className,
    );

    const onTabClick: MouseEventHandler<HTMLLIElement> = e => {
        context.onTabChange(index);
        if (ref.current) {
            context.scrollTo(ref.current.getBoundingClientRect());
        }
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <li
            role='tab'
            {...props}
            ref={ref}
            className={classes}
            onClick={onTabClick}
        >
            {children}
        </li>
    );
};

export default Tab;
