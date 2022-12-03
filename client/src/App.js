import "./App.css";
import { useEffect, useState } from "react";
import { products } from "./server/products-server";
function App() {
  const [test, setTest] = useState([]);


console.log(test);
  return (
    <div className="App">
      <h1>{test}</h1>
    </div>
  );
}

export default App;
