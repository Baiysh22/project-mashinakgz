import React, { useEffect } from 'react';
import ProductCard from '../Card/Card';

const Bmw = ({getProducts,products,deleteProduct}) => {

  useEffect(()=>{
    getProducts();
  },[]);
  
  return (
    <>
    <div className='brand__back'>
    <div  className='section__brand1'  >
      <img width={"150px"} src="https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png" alt="" />
    </div>
    <div  className='section__brand'>
      {products.map((item)=> item.brand== "BMW" ? <ProductCard key={item.id} item={item} deleteProduct={deleteProduct}  /> : null)}
    </div>
    </div>
   
    </>
  );
};


export default Bmw;