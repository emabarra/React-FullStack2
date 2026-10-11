import { render, screen } from '@testing-library/react';
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
        
        const paragrafo = screen.getByText(/Nuestros productos orgánicos están elaborados/i);

        expect(paragrafo).toBeInTheDocument();
        expect(paragrafo.tagName).toBe('P');
    });
});