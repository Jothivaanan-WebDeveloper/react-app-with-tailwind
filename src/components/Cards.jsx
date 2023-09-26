import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from './store/productSlice';

const Cards = (props) => {
    const { key, title, image, description, price } = props;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(add(props));
    }
    return (
        <>
            {/* <div key={key} className="max-w-sm rounded overflow-hidden shadow-lg"> */}
            <div key={key} className="card h-100">
                <div className='text-center'>
                    <img className="mx-auto px-2" src={image} alt="product pic" style={{ width: '130px', height: '150px' }} />
                </div>
                <div className="text-center px-2 py-2">
                    <div className="font-semibold text-md mb-2">{title}</div>
                    {/* <p className="text-gray-700 text-base">
                        {description}
                    </p> */}
                </div>
                <div className="text-center px-6 pb-2 h-50">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {price}$
                    </span>
                    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
                </div>
                <button
                    onClick={handleAddToCart}
                    className="mx-auto mb-2 bg-blue-500 hover:bg-blue-700 text-white w-40 font-bold py-2 px-4 rounded-full">
                    Add to cart
                </button>
            </div>
        </>
    )
}

export default Cards;