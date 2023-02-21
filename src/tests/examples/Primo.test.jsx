
import { Primo } from '../../components/examples/Primo'
import { render, screen } from "@testing-library/react";

describe('Esta es una prueba de la serie de Primo', () => {

    test('Piramide', () => {
        render(<Primo />);
        const input = screen.getByRole("textbox")
        expect(input.value).toBe()
    })
    
    
});
