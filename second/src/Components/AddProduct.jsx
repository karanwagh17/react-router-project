import React, { useState } from "react";

const AddProduct = () => {
  let objData = {
    image: "",
    title: "",
    price: "",
    description: " ",
  };
  const [Add, setadd] = useState(objData);
  // console.log(Add)
  const handsubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/products`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Add),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setadd(objData);
      })

      .catch((err) => console.log(err));
  };
  const HandeleChange = (e) => {
    setadd({ ...Add, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form action="" onSubmit={(e) => handsubmit(e)}>
        <input
          type="text"
          name="image"
          value={Add.image}
          placeholder="image url"
          onChange={(e) => HandeleChange(e)}
        />{" "}
        <br />
        <input
          type="text"
          name="title"
          value={Add.title}
          placeholder="title"
          onChange={(e) => HandeleChange(e)}
        />
        <br />
        <input
          type="text"
          name="price"
          value={Add.price}
          placeholder="price"
          onChange={(e) => HandeleChange(e)}
        />
        <br />
        <input
          type="text"
          name="description"
          value={Add.description}
          placeholder="description"
          onChange={(e) => HandeleChange(e)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
