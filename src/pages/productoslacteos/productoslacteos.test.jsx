import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductosLacteos from './productoslacteos';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
    it('Comprobar el encabezado H2 "Productos Lácteos"', () => {
        render(
            <MemoryRouter>
                <ProductosLacteos />
            </MemoryRouter>
        );
        
        const elementoH2 = screen.getByRole('heading', { level: 2, name: /^Productos Lácteos$/i});

        expect(elementoH2).toBeInTheDocument();
    });
});