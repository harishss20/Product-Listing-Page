import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 sm:p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white text-black p-4 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain mb-4"
          />
          <h2 className="text-base font-semibold mb-2">{product.title}</h2>
          <p className="text-sm font-medium text-gray-700">${product.price}</p>
        </div>
      ))}
      {console.log(products)}
    </div>
  );
}

export default ProductList;
