import React, { useEffect } from 'react';
import ProductCard from '../Card/Card';

const Toyota = ({getProducts,products,deleteProduct}) => {

  useEffect(()=>{
    getProducts();
  },[]);
  
  return (
    <>
  <div className='brand__back' >
  <div  className='section__brand1'  >
      <img width={"330"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Toyota_Motor_North_America_logo_%282019%29.svg/2560px-Toyota_Motor_North_America_logo_%282019%29.svg.png" alt="" />
    </div>
    <div  className='section__brand'>
      {products.map((item)=> item.brand== "Toyota" ? <ProductCard key={item.id} item={item} deleteProduct={deleteProduct}  /> : null)}
    </div>
  </div>
    </>
  );
};


export default Toyota;