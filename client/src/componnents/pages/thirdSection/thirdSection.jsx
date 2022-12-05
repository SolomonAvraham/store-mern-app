import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useData } from "../../useContext/dataContext";
import ReactLoading from "react-loading";

export default function ThirdSection() {
  const { ordersState, sectionsState } = useData();

  return (
    <div className="grid justify-items-stretch md:flex justify-between ">
      <div className=" text-center mt-12 font-light ">
        Users in the last <span className=" font-medium">30</span> days
        <div className=" secSection flex items-center h-72 w-80 shadow mt-1 p-10">
          <CircularProgressbarWithChildren
            strokeLinecap={"butt"}
            strokeWidth={2}
            value={ordersState.length}
          >
            <h1 className=" text-6xl text-font">{ordersState.length}</h1>
            <div className=" font-thin text-2xl">out of 50</div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <div className=" text-center mt-12 font-light ">
        Order in the last <span className=" font-medium">30</span> days
        <div className=" secSection flex items-center h-72 w-80 shadow mt-1 p-10">
          <CircularProgressbarWithChildren
            strokeLinecap={"butt"}
            strokeWidth={2}
            value={ordersState.length}
          >
            <h1 className=" text-6xl text-font">{ordersState.length}</h1>
            <div className=" font-thin text-2xl">out of 50</div>
          </CircularProgressbarWithChildren>
        </div>
      </div>

      <div className=" text-center mt-12 font-light ">
        Order in the last <span className=" font-medium">30</span> days
        <div className=" secSection h-72 w-fit shadow mt-1  flex p-5">
          <table className=" overflow-scroll">
            <thead>
              <tr className=" font-light shadow">
                <td>Order no.</td>
                <td>Name</td>
                <td>Address</td>
                <td>Arrival</td>
                <td>Products' amount</td>
                <td>Price</td>
              </tr>
            </thead>

                      <tbody className=" font-thin text-sm">
                          <div className=" flex justify-center align-middle">
                             {!sectionsState && (
                <ReactLoading
                  type={"spin"}
                  color={"gray"}
                  height={"20%"}
                  width={"20%"}
                />
              )}   
                          </div>
            
              {ordersState.map((item, index) => {
                return (
                  <tr className="bg-none even:bg-gray" key={index}>
                    <td key={item.id}>{item.numOfOrder}</td>
                    <td key={item.id}>{item.name}</td>
                    <td key={item.id}>{item.address}</td>
                    <td key={item.id}>{item.supplyTime}</td>
                    <td key={item.id}>{item.numOfProducts}</td>
                    <td key={item.id}>
                      {item.price}
                      {" $"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
