import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VerdurasOrganica from './verduraorganica';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
    it('renderiza sin errores', () => {
        render(
            <MemoryRouter>
                <VerdurasOrganica />
            </MemoryRouter>
        );
        
        const verdurasH2 = screen.getByRole('heading', { level: 2, name: /Verduras Orgánicas/i });
        expect(verdurasH2).toBeInTheDocument();
    });
});