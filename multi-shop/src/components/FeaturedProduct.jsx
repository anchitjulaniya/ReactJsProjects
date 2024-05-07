import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa6";

function FeaturedProduct() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const products = await res.json();
            setData(products);
            console.log(products);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='mt-20'>
            <h1 className='text-2xl font-bold ml-20 tracking-widest'>FEATURED PRODUCT</h1>
            <div className='flex  justify-center items-center flex-wrap gap-8  p-6'>
                {data.slice(5,20).map((item) => (
                    <div key={item.id} className='flex flex-col gap-3 justify-center items-center bg-white text-black w-80 p-6 h-96'>
                        <div>
                            <img src={item.image} alt={item.title} className='w-28 h-36 object-center' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <h1 className='text-2xl font-semibold mt-4'>{item.title.length > 10 ? item.title.slice(0, 17) + '...' : item.title}</h1>
                            <div className='flex gap-4'>
                            <h1 className='text-xl font-bold'>${item.price}</h1>
                            <h1> <s>${item.price + 50} </s> </h1>
                            </div>
                            <h1 className='flex text-[#FFD333]'><FaStar/> <FaStar/><FaStar/><FaStar/><FaStar/>  </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedProduct;