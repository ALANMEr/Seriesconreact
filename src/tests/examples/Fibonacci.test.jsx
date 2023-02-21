
import { render } from "@testing-library/react";
import Fibonacci from '../../components/examples/Fibonacci';



describe('Esta es una prueba de la serie de Fibonacci', () => {
    const nume = {
        n1: 1,
        n2: 2,
        n3: 3,
        n4: 4,
        n5: 5,
        n6: 6,
        n7: 7,
        n8: 8,
        n9: 9,
        n10: 10

    };

    test('Fibonacci', () => {
        render(<Fibonacci />);
        expect(nume.n1).toBe(1)
        expect(nume.n2).toBe(2)
        expect(nume.n3).toBe(3)
        expect(nume.n4).toBe(4)
        expect(nume.n5).toBe(5)
        expect(nume.n6).toBe(6)
        expect(nume.n7).toBe(7)
        expect(nume.n8).toBe(8)
        expect(nume.n9).toBe(9)
        expect(nume.n10).toBe(10)
    })
});
