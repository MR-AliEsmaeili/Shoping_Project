import { Link, useLinkClickHandler, useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductProvider";
import { useCart } from "../Context/cartProvider";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const products = useProducts();
  const [state, dispatch] = useCart();
  const product = products.find((item) => item.id === Number(id));
  const clickHandler = (type) => {
    dispatch({ type, payload: product });
    console.log(state);
  };
  if (!product) {
    return (
      <div className="text-center mt-24 text-red-500">محصول یافت نشد!</div>
    );
  }

  return (
    <>
      <div className="h-[70vh]">
        <div className="flex gap-6 mt-28 font-bold text-indigo-700 ">
          <Link to="/">محصولات </Link>
          <span>{" >"}</span>
          <Link to="#">جزئیات محصول</Link>
        </div>
        <div className="container mx-auto mt-24 p-6 max-w-5xl flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col md:flex-row items-center gap-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md flex flex-col gap-4">
            <p className="text-indigo-700 text-lg font-semibold">
              قیمت: {product.price} تومان
            </p>
            <div className="flex items-center gap-2 text-yellow-500">
              <span className="text-lg">⭐ {product.rating.rate}</span>
              <span className="text-gray-500 text-sm">
                ({product.rating.count} امتیاز)
              </span>
            </div>
            <button
              className="mt-4 block text-center text-indigo-700 duration-300 p-3 rounded-md font-bold hover:bg-indigo-700 hover:text-white"
              onClick={() => clickHandler("ADD_ITEM")}
            >
              افزودن به سبد خرید{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
