import {ApiClient} from "../config";

export const questionApi = {
  getListQuestion: () => {
    return ApiClient.get("/question/loadQuestions");
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
