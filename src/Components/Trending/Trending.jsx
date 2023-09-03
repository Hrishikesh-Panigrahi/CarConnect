import React from 'react'
import './Trending.css'

import CarContainer from '../CarContainer/CarContainer'

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import AudiA4 from '../../assets/AudiA4.png'
import thar from '../../assets/thar.jpeg'
import honda from '../../assets/honda.jpeg'


const Trending = () => {

    const cars = [
        {
            title: 'Used 2019 Audi A4 Premium',
            miles: '20,000 miles',
            features: 'AWD / 4 Cylinders',
            price: '$25,000',
            seller: 'Best Seller',
            image: AudiA4,
        },

        {
            title: 'Used 2019 Thar Premium',
            miles: '20,000 miles',
            features: 'AWD / 4 Cylinders',
            price: '$20,000',
            seller: 'Best Seller',
            image: thar,
        },

        {
            title: 'Used 2019 Thar Premium',
            miles: '20,000 miles',
            features: 'AWD / 4 Cylinders',
            price: '$20,000',
            seller: 'Best Seller',
            image: honda,
        },
       
    ];

  return (
    <div className='trending'>
        <div className="secContainer container">
            <div className="secHeading flex">
                <h3 className="secTitle">
                    Trending Near You
                </h3>

                <div className="navBtns flex">
                    <BsArrowLeftShort className='icons leftIcon'/>
                    <BsArrowRightShort className='icons rightIcon'/>
                </div>
            </div>

            <div className="carContainer grid">
                {cars.map((car, index) => (
                    <CarContainer car={car} key={index} />
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Trending
