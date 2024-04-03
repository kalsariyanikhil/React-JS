import React from 'react'
import "./Card.css"

function Card(props) {
    return (

        <div className='card-Box mt-6 mx-4 w-[20rem] rounded-2xl overflow-hidden'>

            <div className='img-Box flex items-center content-center py-9 bg-blue-500'>
                <img src={props.img} className='m-auto block rounded-full w-36' alt={props.Title} />
            </div>
            <div className='cardBody bg-white pb-6'>
                <div className='textData py-4 px-3'>
                    <h1 className='text-center font-semibold text-2xl mb-3'>
                        {props.Name}
                    </h1>
                    <h3 className='text-center mb-4 font-bold text-blue-900'>
                        {props.Course}
                    </h3>
                    <p>
                        {props.Discri}
                    </p>
                </div>
                <div className='button-Box'>
                    <button type='button' className='bg-blue-900 text-white font-bold px-8 py-2 rounded-lg'>
                        View More
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Card
