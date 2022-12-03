export const stores = async () => {
  const response = await fetch("http://localhost:8080/stores").then((res) =>
    res.json()
  );
  return response;
};
