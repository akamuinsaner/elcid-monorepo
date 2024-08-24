import { useCallback, useEffect, useRef, useState } from 'react';

const useScroll = () => {
    const [active, setActive] = useState<boolean>(false);

    if (typeof document === 'undefined') return;

    const scrollEle = useRef(
        document.scrollingElement || document.documentElement || document.body,
    );

    const scrolling = useCallback(() => {
        const scrollTop = scrollEle.current.scrollTop;
        setActive(scrollTop > 0);
    }, []);

    useEffect(() => {
        scrolling();
        scrollEle.current.addEventListener('scroll', scrolling);
        return () => {
            scrollEle.current.removeEventListener('scroll', scrolling);
        };
    }, []);

    return active;
};

export default useScroll;
