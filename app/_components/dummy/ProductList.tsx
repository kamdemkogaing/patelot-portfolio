/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import useFetch from "@/app/hooks/useFetch";

const ProductList = () => {
  /* const {
    data: products,
    loading,
    error,
  } = useFetch("http://localhost:8000/products/");

  if (loading) {
    return <p>Chargement en cours...</p>;
  } */

  return {
    /* <>
      <h2 className="my-4">Liste des Produits</h2>
      <ul className="list-decimal">
        {products &&
          products.map((product) => (
            <li key={product.id} id={`product-${product.id}`}>
              {product.name}
            </li>
          ))}
      </ul>
    </> */
  };
};

export default ProductList;
