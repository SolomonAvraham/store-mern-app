export const products = async () => {
  const response = await fetch(
    "https://us-west-2.aws.data.mongodb-api.com/app/store-mern-hznxv/endpoint/products"
  ).then((res) => res.json());
  return response;
};
