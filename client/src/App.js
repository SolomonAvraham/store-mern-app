import "./App.css";
import DataProvider from "./componnents/useContext/dataContext";
import FirstSection from "./componnents/pages/firstSection";
import Header from "./componnents/features/header";
function App() {
  console.log();
  return (
    <DataProvider>
      <div className="App">
        <Header />
        <FirstSection />
      </div>
    </DataProvider>
  );
}

export default App;
