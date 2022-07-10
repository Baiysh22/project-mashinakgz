import React, { useEffect } from 'react';
import ProductCard from '../Card/Card';

const Lexus = ({getProducts,products,deleteProduct}) => {

  useEffect(()=>{
    getProducts();
  },[]);
  
  return (
    <>
    <div className='brand__back'>
    <div  className='section__brand1'  >
      <img width={"200"} src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Lexus_division_emblem.svg/1200px-Lexus_division_emblem.svg.png" alt="" />
    </div>
    <div  className='section__brand'>
      {products.map((item)=> item.brand== "Lexus" ? <ProductCard key={item.id} item={item} deleteProduct={deleteProduct}  /> : null)}
    </div>
    </div>
    
    </>
  );
};


export default Lexus;