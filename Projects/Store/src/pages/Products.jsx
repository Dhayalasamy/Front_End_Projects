import React from 'react'
import { Filters, PaginationContainer, ProductsContainer } from '../components'
import { customFetch } from "../utils";


const url = "/products";
// export const loader =   async ({request}) => {  // request tells about the request details only not actual json

//   // URL &  Object.fromEntries & searchParams
//   const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]); // This is a JS method takes a list of key-value pairs and returns a new object
//   console.log(params)

//   const response = await customFetch(url, {params,}); // [url/params] URL appends with params (query parameter) & by default params would be empty 
//   console.log(response)
//   const products = response.data.data;
//   const meta = response.data.meta;
//   // console.log({ products, meta });
//   return { products, meta , params};
// };
const allProductsQuery = (queryParams) => {const { search, category, company, sort, price, shipping, page } =queryParams;

  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch(url, { params: queryParams,}),
  };
};

export const loader =(queryClient) => async ({ request }) => {
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries(),]);
    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta, params };
  };
  
const Products = () => {
  return (
    <>
      <Filters/>
      <ProductsContainer/>
      <PaginationContainer/>
    </>
  )
}

export default Products