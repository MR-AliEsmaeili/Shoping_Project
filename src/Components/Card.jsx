import { BsBasket } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import { productsQuantity, ShortenText } from "../helpers/helper";
import { useCart } from "../Context/CartProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const Card = ({ data }) => {
  const { id, title, image, price } = data;
  const [state, dispatch] = useCart();

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };
  const quantity = productsQuantity(state, id);

  return (
    <div className="bg-white  shadow-md rounded-lg overflow-hidden flex flex-col  p-4 duration-500 cursor-pointer transition-transform transform hover:scale-105">
      <img
        className="w-full h-40 object-contain mb-4"
        src={image}
        alt={title}
        loading="lazy"
      />
      <h3 className="text-lg font-semibold  text-gray-800 text-center mb-2">
        {ShortenText(title)}
      </h3>
      <p className="text-gray-600 text-end ml-12 text-sm mb-4">{price} تومان</p>
      <div className="flex justify-around items-center w-full mt-auto">
        <Link
          to={`/products/${id}`}
          className="text-blue-500 hover:text-blue-700 text-lg"
          title="جزئیات محصول"
        >
          <TbListDetails />
        </Link>
        {/* <div> */}

        {quantity === 0 ? (
          <button
            className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600"
            title="اضافه به سبد خرید"
            onClick={() => clickHandler("ADD_ITEM")}
          >
            <BsBasket />
          </button>
        ) : (
          <button
            className="bg-slate-200 text-green-700 py-1 px-3 rounded-lg hover:border border-green-700"
            title="اضافه کردن تعداد سبد خرید"
            onClick={() => clickHandler("INCREASE")}
          >
            <CiCirclePlus />
          </button>
        )}
        {!!quantity && <span>{quantity}</span>}
        {quantity === 1 && (
          <button
            className="bg-slate-200 text-red-700 py-1 px-3 rounded-lg hover:border hover:border-red-700"
            title="حذف از سبد خرید"
            onClick={() => clickHandler("REMOVE_ITEM")}
          >
            <RiDeleteBin6Line />
          </button>
        )}
        {quantity > 1 && (
          <button
            className="bg-slate-200 text-red-700 py-1 px-3 rounded-lg hover:border border-red-700"
            title="کاهش تعداد سبد خرید"
            onClick={() => clickHandler("DECREASE")}
          >
            <CiCircleMinus />
          </button>
        )}
      </div>
    </div>
    // </div>
  );
};

export default Card;
