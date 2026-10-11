import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Inicio from './inicio';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
    it('comprobar parrafo de la visión "Hacia Donde Vamos"', () => {
        render(
            <MemoryRouter>
                <Inicio />
            </MemoryRouter>
        );
        const parrafo = screen.getByText(/Nuestra visión es ser la tienda online líder/i);

        expect(parrafo).toBeInTheDocument();
        expect(parrafo.tagName).toBe('P');
    });
});