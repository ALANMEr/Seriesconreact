import React, { useState } from 'react';

/**
 * The Fibonacci function returns a component that renders an input and a Fibonacchi component, which
 * is passed the value of the input.
 * @returns The Fibonacci function is being returned.
 */
function Fibonacci() {
    const [num, setNum] = useState();

    return (


        <div className='container testimonial-section" input-group mb-3 .container-sm container text-center w-50 p-3 ' id="about">
            <div className="row align-self-end">
                <input
                    type="number" className="form-control"
                    placeholder="Escribe número"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    min={0}
                    value={num || ''}
                    onChange={(e) => setNum(e.target.value)}
                />
                <Fibonacchi num={num} />

            </div>
        </div>

    );
}

/**
 * It takes a number as a prop, creates an array of fibonacci numbers, and returns a div with the
 * number and the array.
 * @returns A React component
 */
const Fibonacchi = ({ num }) => {
    let fib = [1, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return (
        <div className='text-sm-left text-nowrap font-weight-bold'>
            <div className='text-sm-left text-nowrap font-weight-bold form-control-lg'>

                <p> Número agregado:  {num}
                    <br />
                    Fibonacchi serie: {fib.join(', ')}

                </p>
            </div>
        </div>


    );
}

export default Fibonacci;
