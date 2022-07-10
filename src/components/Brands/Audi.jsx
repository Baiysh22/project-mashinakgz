import React, { useEffect } from 'react';
import ProductCard from '../Card/Card';

const Audi = ({getProducts,products,deleteProduct}) => {

  useEffect(()=>{
    getProducts();
  },[]);
  
  return (
    <>
    <div className='brand__back'>
    <div  className='section__brand1'  >
      <img width={"250px"}  src="https://www.freepnglogos.com/uploads/audi-logo-5.png" alt="" />
    </div>
    <div  className='section__brand'>
      {products.map((item)=> item.brand== "Audi" ? <ProductCard key={item.id} item={item} deleteProduct={deleteProduct}  /> : null)}
    </div>
    </div>
   
    </>
  );
};


export default Audi;
