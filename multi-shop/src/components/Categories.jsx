import React, { useEffect, useState } from 'react';

function Categories() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const products = await res.json();
            setData(products);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='mt-20'>
            <h1 className='text-2xl font-bold ml-20 tracking-widest'>CATEGORIES</h1>
            <div className='flex justify-center items-center flex-wrap gap-8  p-6'>
                {data.slice(0,12).map((item) => (
                    <div key={item.id} className='flex justify-center items-center gap-4 bg-white text-black w-80 p-6 h-32'>
                        <div>
                            <img src={item.image} alt={item.title} className='w-14 object-cover' />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h1>{item.title.length > 10 ? item.title.slice(0, 20) + '...' : item.title}</h1>
                            <h1>{item.rating.count} Products</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;