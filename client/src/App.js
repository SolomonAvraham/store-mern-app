import "./App.css";
import DataProvider from "./componnents/useContext/dataContext";
import FirstSection from "./componnents/pages/firstSection/firstSection";
import Header from "./componnents/features/header";
import ChartSection from "./componnents/pages/chartSection/chartSection";
import ThirdSection from "./componnents/pages/thirdSection/thirdSection";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />
        <FirstSection />
        <div className=" text-center font-light mt-12  ">
          <p className=" mb-1  ">
            Orders in the past <span className=" font-medium">7</span> days
          </p>
        </div>
        <div className="secSection  container h-96  mx-auto shadow ">
          <div className=" w-full h-96 container flex justify-center">
            <ChartSection />
          </div>
        </div>
        <div className=" mt-12 mb-12 container  mx-auto  ">
          <ThirdSection />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
