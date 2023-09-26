import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import { useSelector } from 'react-redux';

const Products = () => {
  const [productDetails, setProductDetails] = useState([]);
  const products = useSelector((state) => state.productStore);

  const fetchProductDetails = async () => {
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => setProductDetails(result))
  }

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const showCart = () => {
    console.log("products", products);
  }

  return (
    <>
      <button onClick={showCart}>Show</button> Cart{products.length}
      <div className='row'>
        {
          productDetails.map((el) => (
            <div className='col-md-6 col-lg-4 mb-2'>
              <Cards
                key={el.id}
                title={el.title}
                image={el.image}
                id={el.id}
                description={el.description}
                price={el.price}
              />
            </div>
          ))
        }
      </div>
      <Cards />
    </>
  )
}

export default Products;