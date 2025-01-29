import { Link } from "react-router-dom";
import { useCart } from "../../Context/cartProvider";
import { SlBasket } from "react-icons/sl";

const Layout = ({ children }) => {
  const [state] = useCart();
  return (
    <>
      <header className="flex justify-between w-full place-items-center px-8 py-6 mt-4 rounded-lg text-white  bg-blue-500">
        <Link className="text-xl font-bold" to="./products">
          فروشگاه اینترنتی
        </Link>
        <div
          className={
            "flex text-blue-600 bg-gray-200 p-2 rounded-md font-extrabold"
          }
        >
          <span className="text-indigo-700">
            {state.selectedItems.length > 0 && state.itemCounter}
          </span>

          <Link className="font-extrabold" to="./checkout">
            <SlBasket className="text-2xl" />
          </Link>
        </div>
      </header>
      {children}
      <footer className="text-center my-10  p-6  rounded-lg text-white  bg-blue-500">
        طراحی با عشق توسط علی اسماعیلی 💜
      </footer>
    </>
  );
};

export default Layout;
