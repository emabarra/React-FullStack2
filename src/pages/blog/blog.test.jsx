import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Blog from './blog';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
    it('renderiza sin errores', () => {
        render(
            <MemoryRouter>
                <Blog />
            </MemoryRouter>
        );
        expect(document.body).toBeInTheDocument();
    });
});