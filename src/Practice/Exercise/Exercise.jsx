import React from 'react'
import Planets from './Planets';
import '../../App.css'

const Exercise = () => {
    const planets = [
        { name: 'mars', isGasPlanet: false},
        { name: 'Earth', isGasPlanet: false},
        { name: 'Jupiter', isGasPlanet: true},
        { name: 'Venus', isGasPlanet: false},
        { name: 'Neptune', isGasPlanet: true},
        { name: 'Uranus', isGasPlanet: true},
    ];

  return (
    <div className='App'>

      {/* Cara tanpa menggunakan component Planets */}
      {/* Dapat dijelaskan bahwa planet.isGasPlanet menggunakan () karena
          ia merupakan suatu kondisi dan planet.name menggunakan{} karena
          ia merupakan object dari array planets */}

      {/* {planets.map((planet,key) => {
       if (planet.isGasPlanet) return  <h1>{planet.name}</h1>
      })} */}

      {/* cara lain */}
      {/* {planets.map(
        (planet,key) => !planet.isGasPlanet && <h1>{planet.name}</h1>
      )} */}

      {/* Cara yang menggunakan component Planets */}
      {/* {planets.map((planet,key) => {
        if (planet.isGasPlanet) return <Planets name={planet.name}/>
      })} */}

      {/* cara lain */}
      {planets.map(
        (planet, key) => !planet.isGasPlanet && <Planets name={planet.name}/>
      )}

    </div>
  )
}

export default Exercise