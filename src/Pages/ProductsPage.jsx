import { useProducts } from "../Context/ProductProvider";

const ProductsPage = () => {
  const Products = useProducts();
  return (
    <div>
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
