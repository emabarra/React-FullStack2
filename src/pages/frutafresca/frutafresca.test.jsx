import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Frutafresca from './frutafresca';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
    it('validar componente <a> de Instagram en el footer', () => {
        render(
            <MemoryRouter>
                <Frutafresca />
            </MemoryRouter>
        );
        const instagramLink = screen.getByRole('link', { name: /Instagram/i });

        expect(instagramLink).toBeInTheDocument();

        expect(instagramLink).toHaveAttribute('href', '#');
    });
});