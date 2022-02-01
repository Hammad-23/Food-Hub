import {
  GET_ALL_PRODUCT_ERROR,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_REQ,
  ALL_PRODUCTS_REQ,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAILURE,
} from "../constants";
import firebase from "firebase";
const db = firebase.firestore();
//   import { db } from '../../config/firebase';
export const getProducts = (data) => {
  return (dispatch) => {
    dispatch({
      type: ALL_PRODUCTS_REQ,
      isLoading: true,
      data: [],
      error: null,
    });
    db.collection("Products")
      .get()
      .then((snapshot) => {
        const allProducts = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          allProducts.push(data);
        });
        console.log("products array in redux--> ", allProducts);
        dispatch({
          type: ALL_PRODUCTS_SUCCESS,
          isLoading: false,
          data: allProducts,
          error: null,
        });
      })
      .catch((e) => {
        console.log("products err in redux--> ", e.message);
        dispatch({
          type: ALL_PRODUCTS_FAILURE,
          isLoading: false,
        //   data: res.data,
          error: e.message,
        });
      });
  };
};
export const getProductSuccess = (data) => {
  return {
    type: GET_ALL_PRODUCT_SUCCESS,
    data,
    isLoading: false,
    error: null,
  };
};

export const getProductError = (error) => {
  return {
    type: GET_ALL_PRODUCT_ERROR,
    error,
    isLoading: false,
  };
};
