import React from 'react';
import Navbar from '../../Utility/Navbar';
import Footer from '../../Utility/Footer';
import Product from './Product';
import { useEffect,useState } from 'react';
import {  useParams } from 'react-router-dom';

// import {image} from "../../../public/login-image.jpeg"


const SingleProduct = ( props) => {



    const { id } = useParams();

    console.log( "id is ",id);

  const apiUrl = "https://fakestoreapi.com/products"
  
  const [data, setData] = useState([])
  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(apiUrl);
          const newData = await response.json();
          setData(data)
      };
      fetchData();
  }, []);
  console.log( "single product id is ",id);

console.log( "single product data is ",data);
    // props " title , ptice , count ,"
    // const {id} = useParams()  >>>Get by id 

    //  configration with fake store api 

    // https://fakestoreapi.com/products/1 >>single product 



    // count Function
    // const [count, setCount] = useState(0)

    // function submitCount (event){
    //     setCount(event.target.value)
    //     setCount+
    //     console.log(count);
    // }

    return (
           <main class="my-8">
            <Navbar />
        <div class="container mx-auto px-6 pt-20">
{/*  single card  */}
        
         {/* image  */}
            <div class="md:flex md:items-center">
                <div class="w-full h-64 md:w-1/2 lg:h-96">
                    <img class="h-full w-full rounded-md object-cover max-w-lg mx-auto" src= "data:image/jpeg;base64,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"alt="Nike Air" /> 
                    {/* {props.image} */}
                </div>
{/* title and price  */}
                <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 class="text-gray-700 uppercase text-lg">{props.title} title</h3>
                    <span class="text-gray-500 mt-3">{props.price} price </span>
                    <hr class="my-3" />

{/*  Count of product  */}

                    <div class="mt-2">
                        <label class="text-gray-700 text-sm" for="count">{props.count}:</label>
                        <div class="flex items-center mt-1">
                            <button class="text-gray-500 focus:outline-none focus:text-gray-600 " onClick={()=>console.log("plus")}>
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                            <a class="text-gray-700 text-lg mx-2" onChange={()=>count} >0</a>
                            <button class="text-gray-500 focus:outline-none focus:text-gray-600" onClick={()=>console.log("minus")}>
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>

{/* select  Color */}
                    <div class="mt-3">
                        <label class="text-gray-700 text-sm" for="count">Color:</label>
                        <div class="flex items-center mt-1">
                            <button class="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none"></button>
                            <button class="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none"></button>
                            <button class="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none"></button>
                        </div>
                    </div>

{/* Button of Order product  */}
                    <div class="flex items-center mt-6">
                        <button class="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Order Now</button>
                        <button class="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>


          

        </div>
        <Product />
        <Footer />
    </main>
        
    );
}

export default SingleProduct;
