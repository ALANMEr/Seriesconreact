import React, { useState } from 'react'

export const Piramide = () => {
    const [nume, setNume] = useState();
    return (
        <div className='container testimonial-section" input-group mb-3 .container-sm container text-center w-50 p-3  '>
            <div className="row align-self-end">

                <input
                    type="number" class="form-control"
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

    for (let i = 1; i <= nume; i++) {

        for (let j = 1; j <= nume; j++) {
            if (j < i) {
                // return <h3> </h3>
                console.log(" ")
            } else {
                // return <h3>*</h3>
                console.log("*")
            }


        }

        console.log()
    }


    return (
        <div className='text-sm-left text-nowrap font-weight-bold'>
            <div className='text-sm-left text-nowrap font-weight-bold form-control-lg'>
                {nume} Piramide serie:
            </div>
        </div>
    );
}
