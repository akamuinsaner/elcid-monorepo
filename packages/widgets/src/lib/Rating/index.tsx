'use client';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import classNames from 'classnames';
import {
    cloneElement,
    FC,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { NTARating } from './types';
import { RiStarFill } from '@remixicon/react';

const Rating: FC<NTARating> = ({
    icon = <RiStarFill />,
    precision = 1,
    value,
    onChange,
    defaultValue,
    ...props
}) => {
    const [hovering, setHovering] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [tempScore, setTempScore] = useState<number>(0);
    const wrapperClass = twMerge(
        styles.wrapper.base,
        classNames({
            [styles.wrapper.readOnly]: props.readOnly,
        }),
    );

    const finalScore = useMemo(() => {
        if (hovering) return tempScore;
        return score;
    }, [hovering, tempScore, score]);

    const getIcon = useCallback(
        (type: 'left' | 'right', s: number) => {
            return cloneElement(icon, {
                className: twMerge(
                    styles.icon.base,
                    classNames({
                        [styles.icon.left]: type === 'left',
                        [styles.icon.right]: type === 'right',
                        [styles.icon.hover]: hovering,
                        [styles.icon.active]: finalScore >= s,
                    }),
                ),
            });
        },
        [finalScore, icon, hovering],
    );

    const onHovering = useCallback(
        (value1: number, value2: number) => {
            return () => {
                setTempScore(precision === 1 ? value1 : value2);
            };
        },
        [precision],
    );

    const onSelect = useCallback(
        (value1: number, value2: number) => {
            return () => {
                const newScore = precision === 1 ? value1 : value2;
                if (onChange) onChange(newScore);
                if (value) return;
                setScore(newScore);
            };
        },
        [precision],
    );

    useEffect(() => {
        if (value !== undefined) {
            setScore(value);
            return;
        }
        if (defaultValue !== undefined) setScore(defaultValue);
    }, [value, defaultValue]);

    return (
        <span
            {...props}
            tabIndex={0}
            className={wrapperClass}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            {new Array(5).fill(0).map((_, index) => {
                return (
                    <span className={styles.iconWrapper.base} key={index}>
                        <span
                            className={styles.iconWrapper.left}
                            onMouseEnter={onHovering(index + 1, index + 0.5)}
                            onClick={onSelect(index + 1, index + 0.5)}
                        >
                            {getIcon('left', index + 0.5)}
                        </span>
                        <span
                            className={styles.iconWrapper.right}
                            onMouseEnter={onHovering(index + 1, index + 1)}
                            onClick={onSelect(index + 1, index + 1)}
                        >
                            {getIcon('right', index + 1)}
                        </span>
                    </span>
                );
            })}
        </span>
    );
};

export default Rating;
