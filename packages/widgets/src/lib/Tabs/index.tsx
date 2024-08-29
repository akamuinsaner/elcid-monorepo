'use client';
import {
    Children,
    cloneElement,
    forwardRef,
    ReactElement,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { NTATabs } from './types';
import { TabsContext, NTATabsContext } from './context';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import classNames from 'classnames';

const Tabs = ({ children, value, onChange, ...props }: NTATabs) => {
    const [active, setActive] = useState<number>(0);
    const [scrollBefore, setScrollBefore] = useState<boolean>(false);
    const [scrollAfter, setScrollAfter] = useState<boolean>(false);

    const wraperClasses = twMerge(
        styles.wrapper.base,
        classNames({
            [styles.wrapper.after]: scrollAfter,
            [styles.wrapper.before]: scrollBefore,
        }),
        props.className,
    );
    const classes = twMerge(styles.tabs.base);
    const ref = useRef<HTMLUListElement>(null);

    const onTabChange = (active: number) => {
        if (onChange) onChange(active);
        if (value !== undefined) return;
        setActive(active);
    };

    const scrollTo = (childRect: DOMRect) => {
        if (ref.current) {
            const parentRect = ref.current.getBoundingClientRect();
            if (
                childRect.left + childRect.width >
                parentRect.width + parentRect.left
            ) {
                ref.current.scrollTo({
                    left:
                        childRect.left +
                        childRect.width -
                        parentRect.left -
                        parentRect.width +
                        ref.current.scrollLeft +
                        20,
                });
                return;
            }
            if (childRect.left < parentRect.left) {
                ref.current.scrollTo({
                    left:
                        ref.current.scrollLeft -
                        (parentRect.left - childRect.left) -
                        20,
                });
            }
        }
    };

    const context: NTATabsContext = {
        active,
        onTabChange,
        scrollTo,
    };

    const scrollListener = () => {
        if (!ref.current) return;
        const ele = ref.current;
        if (ele.scrollLeft > 0) setScrollBefore(true);
        else setScrollBefore(false);
        if (ele.scrollWidth > ele.scrollLeft + ele.offsetWidth)
            setScrollAfter(true);
        else setScrollAfter(false);
    };

    useEffect(() => {
        let observer = new ResizeObserver(entries => {
            scrollListener();
        });
        ref.current && observer.observe(ref.current);
        return () => ref.current && observer.unobserve(ref.current);
    }, []);

    useEffect(() => {
        scrollListener();
        ref.current && ref.current.addEventListener('scroll', scrollListener);
        return () =>
            ref.current &&
            ref.current.removeEventListener('scroll', scrollListener);
    }, []);

    useEffect(() => {
        if (value !== undefined) setActive(value);
    }, [value]);

    const indexedChildren = useMemo(() => {
        if (Array.isArray(children)) {
            return Children.map(children, (child, index) => {
                return cloneElement(child, {
                    index,
                    ...child.props,
                });
            });
        } else {
            const c = children as ReactElement;
            return cloneElement(c, {
                index: 0,
                ...c.props,
            });
        }
    }, []);
    return (
        <TabsContext.Provider value={context}>
            <div className={wraperClasses}>
                <ul role='tablist' {...props} ref={ref} className={classes}>
                    {indexedChildren}
                </ul>
            </div>
        </TabsContext.Provider>
    );
};

export default Tabs;
