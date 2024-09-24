// import { MdDelete } from "react-icons/md";
// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/CartSlice";
// import toast from "react-hot-toast";



// const CartItem = ({item}) => {

//   const dispatch = useDispatch();

//   function removeItem(){
//     dispatch(remove(item._id))
//     toast.error("Item Removed")
//   }

//   return (
//     <div className="flex gap-4  border-black border border-t-0 border-r-0 border-l-0  mt-5 mb-5 p-6 ">
//       <div>
//         {/* <img src={item.image} alt="prathamimage" className="h-[180px]"></img> */}
//         <img
//               className="rounded-md w-full h-64 object-cover" // Vertically rectangular image
//               src={`http://localhost:3000/files/${item.image}`}
//               alt={item.name}
//             // alt="product image"
//             />
//       </div>
//       <div>
//         <p className="w-80 mb-4 font-bold">{item.name}</p>
//         <p className="w-80 mb-4">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        
//         <div className="flex justify-between items-center">
//           <p className="text-green-700 font-bold">${item.price}</p>
//           <div onClick={removeItem} className=" w-10 h-10 items-center flex rounded-full justify-center bg-red-300">
//             <p><MdDelete /></p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default CartItem;






// import { MdDelete } from "react-icons/md";
// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/CartSlice";
// import toast from "react-hot-toast";

// const CartItem = ({ item }) => {
//   const dispatch = useDispatch();

//   function removeItem() {
//     dispatch(remove(item._id));
//     toast.error("Item Removed");
//   }

//   return (
//     <div className="flex flex-col md:flex-row gap-4 border-b border-gray-300 p-4">
//       <div className="flex-shrink-0">
//         <img
//           className="rounded-md w-full h-40 md:h-48 lg:h-64 object-cover" // Responsive image height
//           src={`http://localhost:3000/files/${item.image}`}
//           alt={item.name}
//         />
//       </div>
//       <div className="flex flex-col justify-between">
//         <p className="text-lg font-bold">{item.name}</p>
//         <p className="text-sm text-gray-600 mb-2">
//           {item.description.split(" ").slice(0, 10).join(" ") + "..."}
//         </p>
//         <div className="flex justify-between items-center">
//           <p className="text-green-700 font-bold text-lg">${item.price}</p>
//           <div
//             onClick={removeItem}
//             className="w-8 h-8 flex items-center justify-center rounded-full bg-red-300 cursor-pointer hover:bg-red-400 transition duration-300"
//           >
//             <MdDelete className="text-xl" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;







// import { MdDelete } from "react-icons/md";
// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/CartSlice";
// import toast from "react-hot-toast";

// const CartItem = ({ item }) => {
//   const dispatch = useDispatch();

//   function removeItem() {
//     dispatch(remove(item._id));
//     toast.error("Item Removed");
//   }

//   return (
//     <div className="flex flex-col md:flex-col  gap-4 border-b border-gray-300 p-4">
//       {/* Product Image */}
//       <div className="flex-shrink-0">
//         <img
//           className="rounded-md w-full h-40 md:h-48 lg:h-64 object-cover" // Responsive image height
//           src={`http://localhost:3000/files/${item.image}`}
//           alt={item.name}
//         />
//       </div>

//       {/* Product Details */}
//       <div className="flex flex-col justify-between">
//         <div className="flex-grow">
//           <p className="text-lg font-bold">{item.name}</p>
//           <p className="text-sm text-gray-600 mb-2">
//             {item.description.split(" ").slice(0, 10).join(" ") + "..."}
//           </p>
//         </div>
//         {/* Price and Remove Button */}
//         <div className="flex justify-between items-center mt-2">
//           <p className="text-green-700 font-bold text-lg">${item.price}</p>
//           <div
//             onClick={removeItem}
//             className="w-8 h-8 flex items-center justify-center rounded-full bg-red-300 cursor-pointer hover:bg-red-400 transition duration-300"
//           >
//             <MdDelete className="text-xl" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;






import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function removeItem() {
    dispatch(remove(item._id));
    toast.error("Item Removed");
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 border-b border-gray-300 p-4">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          className="rounded-md w-full h-40 md:h-48 lg:h-64 object-cover"
          // src={`http://localhost:9000/files/${item.image}`}
          src={`https://e-commerce-website-backend-xfir.onrender.com/files/${item.image}`}
          alt={item.name}
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between flex-grow">
        <div className="flex-grow">
          <p className="text-lg font-bold">{item.name}</p>
          <p className="text-sm text-gray-600 mb-2">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </p>
        </div>
        {/* Price and Remove Button */}
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-900 font-bold text-lg">₹{item.price}</p>
          <div
            onClick={removeItem}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-red-300 cursor-pointer hover:bg-red-400 transition duration-300"
          >
            <MdDelete className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

