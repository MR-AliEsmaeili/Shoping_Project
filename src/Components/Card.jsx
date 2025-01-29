import { BsBasket } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import { ShortenText } from "../helpers/helper";

const Card = ({ data }) => {
  const { id, title, image, price } = data;
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
        <button
          className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600"
          title="اضافه به سبد خرید"
        >
          <BsBasket />
        </button>
      </div>
    </div>
  );
};

export default Card;
