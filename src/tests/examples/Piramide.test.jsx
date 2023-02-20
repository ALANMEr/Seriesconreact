
import { Piramide } from '../../components/examples/Piramide'
import { render, screen } from "@testing-library/react";

describe('Esta es una prueba de la serie de Piramide', () => {

    test('Piramide', () => {
        render(<Piramide />);
        const input = screen.getByRole("textbox")
        expect(input.value).toBe(1)

    })
});
