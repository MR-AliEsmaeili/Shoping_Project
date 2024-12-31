import { useProducts } from "../Context/ProductProvider";

const ProductsPage = () => {
  const Products = useProducts();
  return (
    <div className="flex justify-between flex-wrap mt-10">
      <div>
        {Products.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
      <div>side bar</div>
    </div>
  );
};

export default ProductsPage;
