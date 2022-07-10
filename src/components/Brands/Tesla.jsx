import React, { useEffect } from 'react';
import ProductCard from '../Card/Card';

const Tesla = ({getProducts,products,deleteProduct}) => {

  useEffect(()=>{
    getProducts();
  },[]);
  
  return (
    <>
  <div className='brand__back'>
  <div  className='section__brand1'  >
      <img width={"250px"} src="https://pngroyale.com/wp-content/uploads/2021/11/Download-tesla-logo-png-red-.png" alt="" />
    </div>
    <div  className='section__brand'>
      {products.map((item)=> item.brand== "Tesla" ? <ProductCard key={item.id} item={item} deleteProduct={deleteProduct}  /> : null)}
    </div>
  </div>
  
    </>
  );
};


export default Tesla;
