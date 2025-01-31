// import { Link } from "react-router-dom";
// import { useCart } from "../Context/cartProvider";
// import { ShortenText } from "../helpers/helper";

// import NOTFOUND from "../Assets/not-found.gif";

// import { RiDeleteBin6Line } from "react-icons/ri";
// import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

// const CheckoutPage = () => {
//   const [state, dispatch] = useCart();
//   const { selectedItems, itemCounter, total, checkout } = state;
//   const clickHandler = (type, payload) => {
//     dispatch({ type, payload });
//   };
//   if (!itemCounter) {
//     return (
//       <>
//         <div className="h-[70vh]">
//           <div className="flex gap-6 mt-28 mb-10 font-bold text-indigo-700 ">
//             <Link to="/products">محصولات </Link>
//             <span>{" >"}</span>
//             <Link to="#">سبد خرید</Link>
//           </div>
//           <img className="w-80 h-64 m-auto" src={NOTFOUND} alt="پیدا نشد" />
//           <p className="text-center my-10">سبد خرید شما خالی است !</p>
//           <Link
//             className="mt-4 block text-center text-white  bg-indigo-500 duration-300 p-3 rounded-md font-bold hover:bg-indigo-700"
//             to="/products"
//           >
//             بازگشت به صفحه اصلی
//           </Link>
//         </div>
//       </>
//     );
//   }
//   return (
//     <>
//       <div className="h-[70vh]">
//         <div className="flex gap-6 mt-28 font-bold text-indigo-700 ">
//           <Link to="/products">محصولات </Link>
//           <span>{" >"}</span>
//           <Link to="#">سبد خرید</Link>
//         </div>
//         <div className="flex">
//           <div className="flex flex-col mt-5">
//             {selectedItems.map((p) => (
//               <ul
//                 key={p.id}
//                 className="flex justify-between  text-center items-center my-3 gap-3 bg-white p-4 rounded-lg"
//               >
//                 <li>
//                   <img className="h-16 object-cover " src={p.image} />
//                 </li>
//                 <li>{ShortenText(p.title)}</li>
//                 <li>{p.quantity}</li>
//                 <li>{p.price} تومان</li>
//                 <li>
//                   <div className=" flex mx-3 gap-6">
//                     <button
//                       className="bg-slate-200 text-green-600 duration-300 py-1 px-3 rounded-lg hover:text-green-700"
//                       onClick={() => clickHandler("INCREASE", p)}
//                     >
//                       <FaCirclePlus />
//                     </button>
//                     {p.quantity}
//                     {p.quantity === 1 && (
//                       <button
//                         className="bg-slate-200 text-red-500 py-1 px-3 duration-300 rounded-lg hover:text-red-600"
//                         onClick={() => clickHandler("REMOVE_ITEM", p)}
//                       >
//                         <RiDeleteBin6Line />
//                       </button>
//                     )}
//                     {p.quantity > 1 && (
//                       <button
//                         className="bg-slate-200 text-red-500 py-1 px-3 duration-300 rounded-lg hover:text-red-600"
//                         onClick={() => clickHandler("DECREASE", p)}
//                       >
//                         <FaCircleMinus />
//                       </button>
//                     )}
//                   </div>
//                 </li>
//               </ul>
//             ))}
//           </div>
//           <div className="bg-white rounded-lg p-4">
//             <p>تعداد اقلام سبد : {itemCounter}</p>
//             <p>قیمت نهایی: {total} تومان</p>
//             <p>وضعیت: {checkout ? "پرداخت شده" : "در انتظار پرداخت"}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CheckoutPage;
import { Link } from "react-router-dom";
import { useCart } from "../Context/cartProvider";
import { ShortenText } from "../helpers/helper";

import NOTFOUND from "../Assets/not-found.gif";

import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

const CheckoutPage = () => {
  const [state, dispatch] = useCart();
  const { selectedItems, itemCounter, total, checkout } = state;
  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };
  if (!itemCounter) {
    return (
      <>
        <nav className="flex gap-6 mt-28 mb-10 font-bold text-indigo-700">
          <Link to="/products">محصولات </Link>
          <span>{">"}</span>
          <Link to="#">سبد خرید</Link>
        </nav>
        <div className="h-[70vh] flex flex-col justify-center items-center">
          <img className="w-80 h-64 m-auto" src={NOTFOUND} alt="پیدا نشد" />
          <p className="text-center my-10">سبد خرید شما خالی است !</p>
          <Link
            className="my-16  text-white bg-indigo-500 duration-300 p-3 rounded-md font-bold hover:bg-indigo-700"
            to="/products"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </>
    );
  }
  return (
    <div className="min-h-screen pb-12">
      <nav className="container mx-auto flex gap-6 mt-28 font-bold text-indigo-700">
        <Link to="/products">محصولات </Link>
        <span>{">"}</span>
        <Link to="#">سبد خرید</Link>
      </nav>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row gap-8 px-4 max-w-5xl">
        <div className="flex-1 flex flex-col gap-4">
          {selectedItems.map((p) => (
            <ul
              key={p.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md gap-3 text-center"
            >
              <li>
                <img
                  className="h-16 object-cover"
                  src={p.image}
                  alt={p.title}
                />
              </li>
              <li className="flex-1 text-gray-800 font-medium">
                {ShortenText(p.title)}
              </li>
              <li className="text-gray-600">{p.quantity}</li>
              <li className="text-indigo-700 font-semibold">{p.price} تومان</li>
              <li>
                <div className="flex items-center gap-3">
                  <button
                    className="bg-slate-200 text-green-600 duration-300 py-1 px-3 rounded-lg hover:text-green-700"
                    onClick={() => clickHandler("INCREASE", p)}
                  >
                    <FaCirclePlus />
                  </button>
                  {p.quantity}
                  {p.quantity === 1 ? (
                    <button
                      className="bg-slate-200 text-red-500 py-1 px-3 duration-300 rounded-lg hover:text-red-600"
                      onClick={() => clickHandler("REMOVE_ITEM", p)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  ) : (
                    <button
                      className="bg-slate-200 text-red-500 py-1 px-3 duration-300 rounded-lg hover:text-red-600"
                      onClick={() => clickHandler("DECREASE", p)}
                    >
                      <FaCircleMinus />
                    </button>
                  )}
                </div>
              </li>
            </ul>
          ))}
        </div>
        <aside className="w-full h-fit md:w-1/3 bg-white rounded-lg p-6 shadow-lg">
          <p className="text-lg font-semibold text-gray-800">
            تعداد اقلام سبد:{" "}
            <span className="text-indigo-700">{itemCounter}</span>
          </p>
          <p className="text-lg font-semibold text-gray-800">
            قیمت نهایی: <span className="text-indigo-700">{total} تومان</span>
          </p>
          <p className="text-lg font-semibold text-gray-800">
            وضعیت:{" "}
            <span className={checkout ? "text-green-600" : "text-orange-500"}>
              {checkout ? "پرداخت شده" : "در انتظار پرداخت"}
            </span>
          </p>
          <button
            className="p-3 bg-green-400 rounded-xl my-5"
            onClick={() => clickHandler("CHECKOUTE", selectedItems)}
          >
            تسویه حساب
          </button>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
