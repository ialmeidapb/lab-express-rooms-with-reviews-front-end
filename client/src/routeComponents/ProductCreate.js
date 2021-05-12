import { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../apis/index";

import ProductForm from "./ProductForm";

function ProductCreate() {
  const history = useHistory();

  const [state, setState] = useState({
    name: "",
    description: "",
    imageUrl: "",
 
  });

  function handleChange(event) {
    if (event.target.files) {
      setState({ ...state, [event.target.name]: event.target.files[0] });
    } else {
      setState({ ...state, [event.target.name]: event.target.value });
    }
  }

  

  async function handleSubmit(event) {
    try {
      event.preventDefault();



      const response = await api.post("/rooms", {
        ...state,
        
      });

      // Redireciona programaticamente para a URL '/'
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>New Product </h1>

      <hr />

      <ProductForm
        state={state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default ProductCreate;