export const sections = async () => {
  const response = await fetch("http://localhost:8080/sections").then((res) =>
    res.json()
  );
  return response;
};
