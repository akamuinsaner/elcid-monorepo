import { render } from '@testing-library/react';

import Apis from './apis';

describe('Apis', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Apis />);
        expect(baseElement).toBeTruthy();
    });
});
