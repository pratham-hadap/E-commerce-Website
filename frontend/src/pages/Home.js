import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { add, remove } from '../redux/Slices/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
 import './Spinner.css'

export const Home = ({ searchParams }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    // const Backend_url = process.env.Backend_url
    const fetchProducts = async () => {
      try {
        // const response = await axios.get('http://localhost:9000/api/v1/getProduct');
        // const response = await axios.get(`${Backend_url}/getProduct`);
        // const response = await axios.get('https://e-commerce-website-backend-xfir.onrender.com/api/v1/getProduct');
        // const response = await axios.get('https://e-commerce-website-backend-xfir.onrender.com');
        // setProducts(response.data.data);


        const response = await axios.get(`https://fakestoreapi.com/products`);
        // return response.data; // Returning product data from API
        setProducts(response.data);


        console.log('images',response.data.image)
        console.log('data',response.data.data)
        setLoading(false);
      } catch (err) {
        console.error('Error while fetching products:', err);
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Apply filters based on searchParams
  const filteredProducts = products.filter((product) => {
    const productBrand = product.name?.toLowerCase() || '';
    const productSize = product.size?.toLowerCase() || '';
    const productPrice = product.price?.toString() || '';

    const matchesBrand = searchParams.brand ? productBrand.includes(searchParams.brand.toLowerCase()) : true;
    const matchesSize = searchParams.size ? productSize.includes(searchParams.size.toLowerCase()) : true;
    const matchesPrice = searchParams.price ? productPrice.includes(searchParams.price) : true;

    return matchesBrand && matchesSize && matchesPrice;
  });

  // if (loading) {
  //   return <p className="text-center flex justify-center items-center spinner"></p>;
  // }
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center">{error}</p>;
  }

  return (
    <div className="flex flex-col justify-center gap-9 text-center mt-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      {/* Check if there are no filtered products */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-red-500 text-xl font-semibold">No products found</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
              <img
                className="rounded-md w-full h-[180px] object-cover"
                // src={`http://localhost:9000/files/${product.image}`}
                loading='lazy'
                // src={`https://e-commerce-website-backend-xfir.onrender.com/files/${product.image}`}
                src={product.image}
                // src={product.image}
                alt={product.name}
              />
               {/* <h2 className="text-lg font-semibold mt-2">{product.name}</h2> */}
              
                <p className="text-lg font-semibold mt-2">{product.title.split(" ").slice(0,5).join(" ") + "..."}</p>
              
              <p className="text-gray-600 mt-1">{product.description.split(" ").slice(0,10).join(" ") + "..."}</p>
              <p className="text-lg font-bold mt-1">Price: ₹{product.price}</p>
              <div>
                {/* {cart.some((p) => p._id === product._id) ? ( */}
                {cart.some((p) => p.id === product.id) ? (
                  <button
                    className="mt-3 bg-gray-900 text-white rounded-md px-4 py-2 hover:bg-gray-800 transition duration-300"
                    onClick={() => {
                      // dispatch(remove(product._id));
                      dispatch(remove(product.id));
                      toast.error('Item removed');
                    }}
                  >
                    Remove Item
                  </button>
                ) : (
                  <button
                    className="mt-3 bg-gray-900 text-white rounded-md px-4 py-2 hover:bg-gray-800 transition duration-300"
                    onClick={() => {
                      dispatch(add(product));
                      toast.success('Item added');
                    }}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};












// import React, { useState } from 'react';
// import axios from 'axios';
// import toast from "react-hot-toast";
// import { add, remove } from '../redux/Slices/CartSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import Footer from '../components/Footer';
// import './Spinner.css';
// import { useQuery } from 'react-query';

// // Function to fetch products
// const fetchProducts = async (page) => {
//   const response = await axios.get(`https://e-commerce-website-backend-xfir.onrender.com/api/v1/getProduct?page=${page}&limit=4`);
//   return response.data.data; // Returning product data from API


//   // const response = await axios.get(`https://fakestoreapi.com/products`);
//   // return response.data; // Returning product data from API
// };

// export const Home = ({ searchParams }) => {
//   const [page, setPage] = useState(1);  // Pagination state
//   const dispatch = useDispatch();
//   const { cart } = useSelector((state) => state);

//   // Using useQuery hook for fetching products with pagination
//   const { data: products = [], error, isLoading } = useQuery(['products', page], () => fetchProducts(page), {
//     keepPreviousData: true,
//   });

//   // Apply filters based on searchParams
//   const filteredProducts = products.filter((product) => {
//     const productBrand = product.name?.toLowerCase() || '';
//     const productSize = product.size?.toLowerCase() || '';
//     const productPrice = product.price?.toString() || '';

//     const matchesBrand = searchParams.brand ? productBrand.includes(searchParams.brand.toLowerCase()) : true;
//     const matchesSize = searchParams.size ? productSize.includes(searchParams.size.toLowerCase()) : true;
//     const matchesPrice = searchParams.price ? productPrice.includes(searchParams.price) : true;

//     return matchesBrand && matchesSize && matchesPrice;
//   });

//   // Handling loading and error states from react-query
//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="spinner"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <p className="text-center">Failed to load products: {error.message}</p>;
//   }

//   return (
//     <div className="flex flex-col justify-center gap-9 text-center mt-4">
//       <h1 className="text-2xl font-bold mb-4">Product List</h1>

//       {/* Check if there are no filtered products */}
//       {filteredProducts.length === 0 ? (
//         <p className="text-center text-red-500 text-xl font-semibold">No products found</p>
//       ) : (
//         <div className="grid grid-cols-2 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4">
//           {filteredProducts.map((product) => (
//             <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
//               <img
//                 className="rounded-md w-full h-64 object-cover"
//                 src={`https://e-commerce-website-backend-xfir.onrender.com/files/${product.image}`}
//                 alt={product.name}
//               />
//               <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//               <p className="text-gray-600 mt-1">{product.description}</p>
//               <p className="text-lg font-bold mt-1">Price: ₹{product.price}</p>
//               <div>
//                 {cart.some((p) => p._id === product._id) ? (
//                   <button
//                     className="mt-3 bg-gray-900 text-white rounded-md px-4 py-2 hover:bg-gray-800 transition duration-300"
//                     onClick={() => {
//                       dispatch(remove(product._id));
//                       toast.error('Item removed');
//                     }}
//                   >
//                     Remove Item
//                   </button>
//                 ) : (
//                   <button
//                     className="mt-3 bg-gray-900 text-white rounded-md px-4 py-2 hover:bg-gray-800 transition duration-300"
//                     onClick={() => {
//                       dispatch(add(product));
//                       toast.success('Item added');
//                     }}
//                   >
//                     Add to Cart
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Pagination buttons */}
//       <div className="flex justify-center gap-4 mt-8">
//         <button
//           onClick={() => setPage((prev) => Math.max(prev - 1, 1))}  // Previous page button
//           className="bg-gray-900 text-white px-4 py-2 rounded-md"
//           disabled={page === 1}
//         >
//           Previous
//         </button>
//         <button
//           onClick={() => setPage((prev) => prev + 1)}  // Next page button
//           className="bg-gray-900 text-white px-4 py-2 rounded-md"
//         >
//           Next
//         </button>
//       </div>

//       <Footer />
//     </div>
//   );
// };
