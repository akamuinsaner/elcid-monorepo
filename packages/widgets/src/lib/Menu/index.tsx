import { forwardRef } from 'react';
import { NTAMenu } from './types';
import { styles } from './styles';

const Menu = forwardRef<HTMLUListElement, NTAMenu>(({ children }, ref) => {
    return (
        <ul role='menu' className={styles.menu.base} ref={ref}>
            {children}
        </ul>
    );
});

export default Menu;
