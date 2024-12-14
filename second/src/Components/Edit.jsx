import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Edit = () => {
  const { id } = useParams(); 
  // console.log(id)
  const [store, setStore] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });
  const [change, setChange] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });


  const fetchProductData = () => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStore(data);
        setChange(data); 
      })
      .catch((error) => console.error("Error fetching product:", error));
  };

  useEffect(() => {
    fetchProductData();
  }, [id]); 

  
  const storeSubmit = (e) => {
    e.preventDefault(); 
    fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(change), 
    })
      .then((res) => res.json())
      .then((updatedData) => {
        console.log("Product updated:", updatedData);
        fetchProductData(); 
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={storeSubmit}>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={change.image}
            onChange={(e) => setChange({ ...change, image: e.target.value })}
          />
        </label>
        <br />
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={change.title}
            onChange={(e) => setChange({ ...change, title: e.target.value })}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={change.price}
            onChange={(e) => setChange({ ...change, price: e.target.value })}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={change.description}
            onChange={(e) =>
              setChange({ ...change, description: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={change.category}
            onChange={(e) =>
              setChange({ ...change, category: e.target.value })
            }
          />
        </label>
        <br />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default Edit;
