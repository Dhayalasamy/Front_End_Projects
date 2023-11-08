import React from "react";
import { Hero } from "../components";
import { customFetch } from "../utils";
import { FeaturedProducts } from "../components";

const url = "/products?featured=true";

// export const loader = async () => {
//   const response = await customFetch(url);
//   const products = response.data.data;
//   // console.log(products);
//   return { products };
//   // console.log(response);
//   // return response.data;
// };
const featuredProductsQuery = {
  queryKey: ['featuredProducts'], // Property 1 [array..]
  queryFn: () => customFetch(url), // Property 2
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);

  const products = response.data.data;
  return { products };
};

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default Landing;
