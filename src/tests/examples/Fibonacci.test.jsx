
import Fibonacci from '../../components/examples/Fibonacci';
import { render, screen } from "@testing-library/react";

describe('Esta es una prueba de la serie de Fibonacci', () => {

    test('Fibonacci', () => {
        render(<Fibonacci />);
        const input=screen.getByRole("textbox")
        expect(input.value).toBe(1)
    })
});
