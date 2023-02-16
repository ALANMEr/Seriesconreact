import React, { useState } from 'react'

export const Piramide = () => {
    const [nume, setNume] = useState();
    return (
        <div className='container testimonial-section" input-group mb-3 .container-sm container text-center w-50 p-3  '>
            <div className="row align-self-end">

                <input
                    type="number" className="form-control"
                    placeholder="Escribe número"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    value={nume}
                    onChange={(e) => setNume(e.target.value)}
                />
                <Piramides nume={nume} />
            </div>
        </div>
    )

}
const Piramides = ({ nume }) => {
    let piso = ' ';
    for (let i = 1; i <= nume; i++) {
        piso = ' ';
        for (let j = 1; j <= nume; j++) {
            if (j < i) {
                piso = ' ';
            } else {
                piso = piso + '*';
            }


        }
       console.log(piso)

    }

    return (
        <div className='text-sm-left text-nowrap font-weight-bold'>
            <div className='text-sm-left text-nowrap font-weight-bold form-control-lg'>
                Numeros Primos serie:  {piso}
            </div>
        </div>
    );
}
