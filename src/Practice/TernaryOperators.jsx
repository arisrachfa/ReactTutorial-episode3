import React from 'react';
import '../App.css';

const TernaryOperators = () => {
    const age = 16;
    const isGrean = true;

    // Ternary operators merupakan penggatin if else statement yang dimana
    // ? mewakitlkan True : mewakilkan False

  return (
    <div className='App'>
        {age >= 17 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1> }

        <h1 style={{ color: isGrean ? "green" : "blue"}}> THIS HAS COLOR </h1>
    </div>
  )
};

export default TernaryOperators