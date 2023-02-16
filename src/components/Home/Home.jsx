import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect';
export const Home = () => {
  return (
    <div className='container-fluid home'>
      <div className='container home-content'>
 
        <h1>Bienvenidos</h1>
        <h4>
          <Typewriter
            options={{
              strings: [
                "Gracias por su tiempo y amabilidad",  
              ],
              autoStart: true,
              loop: true
            }}
          />
        </h4>
        <span className='view-details-home-button'>View Details</span>
      </div>
    </div>
  )
}
