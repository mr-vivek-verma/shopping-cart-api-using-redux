import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { ProductComponent } from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

export const ProductListing = () => {
  //   here we can say useSelector will fetch the data from redux
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  //   with the help of dispatch we are adding data(getting from server) to our "store".

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log(response.data);
    dispatch(setProducts(response.data));
    // here we passed all products in our Action i.e productAction component and return the objects and that object(in Action) will be taken by reducer(i.e productReducer) and reducer will get type and payload.and type will be "SET_PRODUCTS" and will pass the new state.
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products:", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
