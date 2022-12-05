export const sections = async () => {
  const response = await fetch(
    "https://us-west-2.aws.data.mongodb-api.com/app/store-mern-hznxv/endpoint/sections"
  ).then((res) => res.json());
  return response;
};
