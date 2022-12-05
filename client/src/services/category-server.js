export const category = async () => {
  const response = await fetch(
    "https://us-west-2.aws.data.mongodb-api.com/app/store-mern-hznxv/endpoint/categories"
  ).then((res) => res.json());
  return response;
};
