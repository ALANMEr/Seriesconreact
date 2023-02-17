import React, { useState } from 'react'

export const Piramide = () => {
    const [nume, setNume] = useState();
    return (
        <div className='container testimonial-section" input-group mb-3" .container-sm container text-center w-50 p-3  '>
            <div className="row align-self-end">
                <br />    <br />
                <div className="section_title">
                    <h5>Series</h5>
                    <span className="line"></span>
                </div>
                <input
                    type="number" className="form-control"
                    placeholder="Escribe número"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    min={0}
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

        for (let j = 1; j <= nume; j++) {
            if (j < i) {
                piso += " ";

            } else {
                piso = piso + '*';
            }

        }

    }

    return (
        <div className='text-sm-left text-nowrap font-weight-bold'>
            <div className='text-sm-left text-nowrap font-weight-bold form-control-lg'>


                <p> Número agregado:  {nume}
                    <br />
                    Piramide serie: {piso}

                </p>
            </div>
        </div>
    );

}