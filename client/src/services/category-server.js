export const category = async () => {
  const response = await fetch("http://localhost:8080/category").then((res) =>
    res.json()
  );
  return response;
};
