import React, { useState } from 'react'

/**
 * Primo is a function that returns a div that contains an input and a NPrimos component. The input's
 * value is set to the lista state, and when the input changes, the lista state is set to the input's
 * value.
 */
export const Primo = () => {
    /* A React Hook. It is a function that lets you "hook into" React state and lifecycle features from
    function components. */
    const [lista, setLista] = useState();
    return (
        <div className='container testimonial-section" input-group mb-3 .container-sm container text-center w-50 p-3 '>
            <div className="row align-self-end">
                <input
                    type="number" className="form-control"
                    placeholder="Escribe número"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    min={0}
                    value={lista}
                    onChange={(e) => setLista(e.target.value)}
                />
                <NPrimos lista={lista} />
            </div>
        </div>
    )
}

/**
 * It takes a number, and returns a list of prime numbers up to that number.
 */
const NPrimos = ({ lista }) => {

    let ListaP = [];
    let r = 0;

    for (let i = 2; i <= lista; i++) {
        let primo = true;
        for (let j = 2; j < i; j++) {
            // eslint-disable-next-line no-unused-vars
            r++;
            if (i % j === 0) {
                primo = !primo;
                break;
            }
        }
        if (primo) ListaP.push(i);
    }


    return (
        <div className='text-sm-left text-nowrap font-weight-bold'>
            <div className='text-sm-left text-nowrap font-weight-bold form-control-lg'>
                Numeros Primos serie:  {ListaP.join(', ')}
            </div>
        </div>
    )
}
