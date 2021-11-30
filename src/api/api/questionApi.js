import {ApiClient} from "../config";

export const questionApi = {
  getListQuestion: (payload) => {
    return ApiClient.get("/question/loadQuestions", payload);
  },
  //   getProductById: (payload) => {
  //     return ApiClient.get(`/products/${payload.id}`);
  //   },
  //   createProduct: (payload) => {
  //     return ApiClient.post("/products", payload);
  //   },
  //   updateProduct: (payload) => {
  //     return ApiClient.put(`/products/${payload.id}`, payload);
  //   },
  //   deleteProduct: (payload) => {
  //     return ApiClient.delete(`/products/${payload.id}`);
  //   },
};
