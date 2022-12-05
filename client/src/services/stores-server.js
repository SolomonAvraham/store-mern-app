export const stores = async () => {
  const response = await fetch(
    "https://us-west-2.aws.data.mongodb-api.com/app/store-mern-hznxv/endpoint/stores"
  ).then((res) => res.json());
  return response;
};
