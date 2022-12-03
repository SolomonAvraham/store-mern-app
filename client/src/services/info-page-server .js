export const infoPage = async () => {
  const response = await fetch("http://localhost:8080/infoPage").then((res) =>
    res.json()
  );
  return response;
};
