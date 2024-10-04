
import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import ProductCard from '../../Utility/ProductCard';
// import {data} from './data';
import Navbar from '../../Utility/Navbar';
import Footer from '../../Utility/Footer';

const Product = () => {
    const { productCode } = useParams();

    //  configration with fake store api 

    // https://fakestoreapi.com/products/1 >>single product 

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const newData = await response.json();
            setData(newData)
        };
        fetchData();
    }, []);

    console.log("data is ", data);

    return (
        <div>
            <Navbar />
            <div>
                <span className='flex justify-center items-center bg-red text-6xl pt-24 pb-36 bg-zinc-100 ' > <h1> Product</h1></span>
            </div>
            <div >
                <h3 class="text-gray-600 text-2xl font-medium ">More Products : </h3>

                <div class="grid grid-cols-4 gap-4 pl-28 pr-28" style={{ width: "100%" }}>

                    {data?.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
<Footer />
        </div>


    );
}

export default Product;
