import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useData } from "../../useContext/dataContext";
import ReactLoading from "react-loading";

export default function ThirdSection() {
  const { ordersState, sectionsState } = useData();

  return (
    <div className="grid justify-items-center md:flex justify-between  ">
      <div className=" text-center mt-12 font-light ">
        Users in the last <span className=" font-medium">30</span> days
        <div className=" secSection flex items-center h-52 w-80 shadow mt-1 p-16">
          <CircularProgressbarWithChildren
            strokeLinecap={"butt"}
            strokeWidth={2}
            value={15}
          >
            <h1 className=" text-6xl text-font">15</h1>
            <div className=" font-thin text-2xl">out of 32</div>
          </CircularProgressbarWithChildren>
        </div>
      </div>

      <div className=" text-center mt-12 font-light ">
        Order in the last <span className=" font-medium">30</span> days
        <div className=" secSection flex items-center h-52 w-80 shadow mt-1 p-16">
          <CircularProgressbarWithChildren
            strokeLinecap={"butt"}
            strokeWidth={2}
            value={ordersState.length}
          >
            <h1 className=" text-6xl text-font">{ordersState.length}</h1>
            <div className=" font-thin text-2xl">out of 26</div>
          </CircularProgressbarWithChildren>
        </div>
      </div>

      <div className=" text-center mt-12 font-light  ">
        Order in the last <span className=" font-medium">30</span> days
        <div className=" secSection h-52 w-fit shadow mt-1  flex p-5 overflow-y-auto">
          <table>
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

            <tbody className=" font-thin text-sm ">
              {ordersState.map((item, index) => {
                return (
                  <tr className="bg-none even:bg-gray" key={index}>
                    {!sectionsState && (
                      <td className=" w-20 ">
                        <ReactLoading
                          type={"spin"}
                          color={"#1a9da6"}
                          height={"100%"}
                          width={"100%"}
                        />
                      </td>
                    )}
                    <td key={item.id}>{item.numOfOrder}</td>
                    <td key={item.name}>{item.name}</td>
                    <td key={item.address}>{item.address}</td>
                    <td key={item.supplyTime}>{item.supplyTime}</td>
                    <td key={item.numOfProducts}>{item.numOfProducts}</td>
                    <td key={item.price}>
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
