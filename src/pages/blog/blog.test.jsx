import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Blog from './blog';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
    it('Comprobación de H2', () => {
        render(
            <MemoryRouter>
                <Blog />
            </MemoryRouter>
        );

        const h2 = screen.getByRole('heading', { level: 2, name: /^blog$/i });
        expect(h2).toHaveTextContent('Blog');
    });
});