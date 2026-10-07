import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductosLacteos from './productoslacteos';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
    it('renderiza sin errores', () => {
        render(
            <MemoryRouter>
                <ProductosLacteos />
            </MemoryRouter>
        );
        expect(document.body).toBeInTheDocument();
    });
});