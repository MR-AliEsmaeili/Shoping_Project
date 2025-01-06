import Card from "../Components/Card";
import { useProducts } from "../Context/ProductProvider";
import Loader from "../Components/Loader";
import { ImSearch } from "react-icons/im";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  createQueryObject,
  filterProducts,
  searchProducts,
} from "../helpers/helper";
import SideBar from "../Components/SideBar";

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const Products = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(Products);
  }, [Products]);
  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(Products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
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
        <button
          className="p-3 mx-3 shadow-sm shadow-gray-400 rounded-lg bg-blue-500"
          onClick={searchHandler}
        >
          <ImSearch color="white" />
        </button>
      </div>
      <div className="flex flex-col md:flex-row mt-10 gap-6">
        {Products.length === 0 ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 flex-1">
            {displayed.map((p) => (
              <Card key={p.id} data={p}></Card>
            ))}
          </div>
        )}
        <SideBar setQuery={setQuery} query={query} />
      </div>
    </>
  );
};

export default ProductsPage;
