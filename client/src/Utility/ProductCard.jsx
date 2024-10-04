import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = (props) => {

    // Add to cart functianlity
// let carts =[]

// const setItemToCart=(item)=>{
// let Exist = carts.find(c => c.id ===item.id)
// if(Exist){
//   const qty = Exit.qty+item.qty
//   const newItem= {...item,qty}
//   // push is not recommended to use because it mutates state
//   carts.push(newItem)
// }else{
//   carts.push(item)
// }
// }


	return (

        <div class=" mt-16 ">
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            <div 
            class=" max-w-sm mx-auto rounded-md shadow-md overflow-hidden w-72 p-5 hover:bg-zinc-200	">
                <div >
                <img class="flex items-end justify-end h-56 w-full bg-cover"
                src={props.image}
                 />
                    <button  
                    // onClick={setItemToCart}
                    class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">{props.category}</h3>
                    <span class="text-gray-500 mt-2">{props.price}$</span>
                    <div className="flex p-1 pt-5 m-2 ">
          <Link
            to={`/Products/${props.id}`}
            className=" flex justify-center items-center bg-yellow-500 p-1 text-lg  w-40 h-10 rounded-xl  text-black"
          >
            {" "}
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              aria-hidden="true"
              className=" w-10  pl-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>{" "}
          </Link>
        </div>
                </div>
            </div>
        </div>
        </div>
	);
};

export default ProductCard;


// 	<div>
       

//     <div class="mt-16 flex flex-wrap  ">
//         <p class="text-gray-600 text-2xl font-medium">{props.title}</p>

//         <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 bg-gray-500">
//             <div class="  rounded-md shadow-md overflow-hidden" style={{width:"250px"}}>
//                 <div class="flex items-center justify-center h-64 w-full bg-cover p-10">
//                     <img src={props.image} alt=" image" className='w-64' />

//                     <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
//                         <svg class="h-5 w-5">
//                             <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                         </svg>
//                     </button>
//                 </div>
//                 <div class="px-5 py-3">

//                     {/* using truncut class to split text of description */}

//                     {/* <h3 class="text-gray-700 uppercase">{props.description}</h3> */}
//                     <span class="text-gray-500 mt-2">{props.price} $ </span>
//                 </div>
//                 <button class=" flex justify-center ml-14 m-5 p-2 w-28 rounded-full bg-blue-600 text-white  hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
//                         See more
//                     </button>
//             </div>
//         </div>
//     </div>
    
// </div>	