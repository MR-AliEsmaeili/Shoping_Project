import Card from "../Components/Card";
import { useProducts } from "../Context/ProductProvider";
import Loader from "../Components/Loader";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { BiCategory } from "react-icons/bi";

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const Products = useProducts();

  const categoryHandler = (e) => {
    const category = e.target.dataset.name; // استفاده از ویژگی data-name
    console.log(category);
  };

  return (
    <>
      <div className="mt-16 flex align-baseline">
        <input
          className="p-3 rounded-lg shadow-sm shadow-gray-400 outline-none"
          type="text"
          placeholder="جستجو محصول ..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button className="p-3 mx-3 shadow-sm shadow-gray-400 rounded-lg bg-blue-500">
          <ImSearch color="white" />
        </button>
      </div>
      <div className="flex flex-col md:flex-row mt-10 gap-6">
        {Products.length === 0 ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 flex-1">
            {Products.map((p) => (
              <Card key={p.id} data={p}></Card>
            ))}
          </div>
        )}
        <div className="flex flex-col align-baseline w-full md:w-1/4 h-fit bg-gray-100 p-4 py-10 rounded-lg shadow-md">
          <div className="flex align-baseline place-items-center mb-2">
            <BiCategory size={20} />
            <h2 className="text-lg font-semibold mr-3">دسته بندی ها</h2>
          </div>
          <ul className="mt-4" onClick={categoryHandler}>
            <li
              className="font-normal pb-3 hover:text-blue-600 cursor-pointer"
              data-name="All"
            >
              همه
            </li>
            <li
              className="font-normal pb-3 hover:text-blue-600 cursor-pointer"
              data-name="men's clothing"
            >
              پوشاک مردانه
            </li>
            <li
              className="font-normal pb-3 hover:text-blue-600 cursor-pointer"
              data-name="women's clothing"
            >
              پوشاک زنانه
            </li>
            <li
              className="font-normal pb-3 hover:text-blue-600 cursor-pointer"
              data-name="jewelery"
            >
              جواهرات
            </li>
            <li
              className="font-normal pb-3 hover:text-blue-600 cursor-pointer"
              data-name="electronics"
            >
              لوازم الکترونیکی
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
