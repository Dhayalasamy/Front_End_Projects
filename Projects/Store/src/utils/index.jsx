import axios from "axios";

// Base URL setup:
const prodURL = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create(
    {
        baseURL: prodURL,
    }
)

// Number format setup:
export const formatPrice = (price) => {
    const dollarsAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format((price / 100).toFixed(2));
    return dollarsAmount;
  };

// No. of items option setup:
  export const generateAmountOptions = (number) => {
    return Array.from({ length: number }, (_, index) => { // length of the array, call back function
      const amount = index + 1;
      return (
        <option key={amount} value={amount}>
          {amount}
        </option>
      );
    });
  };