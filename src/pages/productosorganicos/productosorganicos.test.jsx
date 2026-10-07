import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductosOrganicos from './productosorganicos';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
    it('renderiza sin errores', () => {
        render(
            <MemoryRouter>
                <ProductosOrganicos />
            </MemoryRouter>
        );
        expect(document.body).toBeInTheDocument();
    });
});