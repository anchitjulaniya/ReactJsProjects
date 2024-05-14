import React from 'react'
import p1 from "../assets/featuredproduct-1.jpeg"
import p2 from "../assets/featuredproduct-2.jpeg"
import p3 from "../assets/featuredproduct-3.jpeg"


export function ProductTwo() {
  const products = [
    {
      name: 'Avant-Garde Lamp',
      price: '$179.99',
      img: p1,
    },
    {
      name: 'Coffee Table',
      price: '$200',
      img: p2
    },
    {
      name: 'Compy Bed',
      price: '$200',
      img: p3
    },
    {
      name: 'Compy Bed',
      price: '$200',
      img: p3
    },
  ]
  console.log(products);
  return (
    <div>
      <h1 className='text-3xl font-bold px-2 md:px-4 lg:px-24 pt-12 pb-4'>Featured Products</h1>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {products.map((product, i) => (
        <div
          key={i}
          className="relative aspect-[16/9] shadow-xl w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          
          <img
            src={product.img}
            alt="Product Image"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{product.name}</h1>
            <p className="mt-2 text-sm text-gray-300">
              {product.price}
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Shop Now &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
