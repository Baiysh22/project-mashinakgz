import React, { useEffect } from 'react';
import ProductCard from '../Card/Card';

const Mercedes = ({getProducts,products,deleteProduct}) => {
  useEffect(()=>{
    getProducts();
  },[]);
  return (
    <>
    <div className='brand__back'>
    <div  className='section__brand1'>
      <img width={"250px"} src="https://free-png.ru/wp-content/uploads/2022/02/free-png.ru-675.png" alt="" />
    </div>
    <div className='section__brand'>
    {products.map((item)=> item.brand=="Mercedes Benz"? <ProductCard key={item.id} item={item} deleteProduct={deleteProduct} />: null)}
    </div>
    </div>
   
    </>
  );
};

export default Mercedes;
