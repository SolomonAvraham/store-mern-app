export const orders = async () => {
  const response = await fetch("http://localhost:8080/orders").then((res) =>
    res.json()
  );
  return response;
};
