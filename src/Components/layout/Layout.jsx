import { Link } from "react-router-dom";
import { useCart } from "../../Context/cartProvider";
import { SlBasket } from "react-icons/sl";

const Layout = ({ children }) => {
  const [state] = useCart();
  return (
    <>
      <div className="flex fixed right-0 top-0 z-10   w-full  shadow-md shadow-gray-300 ">
        <header className="flex    justify-between  w-full place-items-center  text-indigo-700  px-8 py-3  rounded-b-lg bg-gray-200">
          <Link className="text-xl font-bold" to="./products">
            فروشگاه اینترنتی
          </Link>
          <div
            className={
              "flex text-white bg-indigo-500 p-2 rounded-md font-extrabold hover:bg-indigo-700 "
            }
          >
            <span className="text-white">
              {state.selectedItems.length > 0 && state.itemCounter}
            </span>

            <Link className="font-extrabold" to="./checkout">
              <SlBasket className="text-2xl" />
            </Link>
          </div>
        </header>
      </div>
      {children}
      <footer className="text-center my-10  p-6  rounded-lg text-white  bg-indigo-500">
        طراحی با عشق توسط علی اسماعیلی 💜
      </footer>
    </>
  );
};

export default Layout;
