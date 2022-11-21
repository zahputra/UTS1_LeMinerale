import React from 'react';
import cars from './carsData/Cars.json'
import './App.css';

function Json() {
    return (
        <div className='Parentbox'>
            <h1>Halaman Json</h1>
            <br /> <br />

            {
                cars.map(record => {
                    return (
                        <div className='box'>
                            {record.Id}
                            <span> | </span>
                            {record.Name}
                            <span> | </span>
                            {record.Price}
                        </div>
                    )
                })
            }


        </div>
    );
}

export default Json;
