import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Tiendas from './tiendas';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
    it('renderiza sin errores', () => {
        render(
            <MemoryRouter>
                <Tiendas />
            </MemoryRouter>
        );
        expect(document.body).toBeInTheDocument();
    });
});