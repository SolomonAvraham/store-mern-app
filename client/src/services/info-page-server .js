export const infoPage = async () => {
  const response = await fetch(
    "https://us-west-2.aws.data.mongodb-api.com/app/store-mern-hznxv/endpoint/infopages"
  ).then((res) => res.json());
  return response;
};
