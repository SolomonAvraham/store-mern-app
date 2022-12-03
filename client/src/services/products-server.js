export const products = async () => {
  const response = await fetch("http://localhost:8080/products").then((res) =>
    res.json()
  );
  return response;
};
