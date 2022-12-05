import React from "react";
import "./firstSection.css";
import { useData } from "../../useContext/dataContext";
import { BsListTask, BsInfoCircle, BsBasket } from "react-icons/bs";
import { BiStore } from "react-icons/bi";
import ReactLoading from "react-loading";

export default function FirstSection() {
  const {
    categoryState,
    infoPageState,
    productsState,
    sectionsState,
    storesState,
  } = useData();
  return (
    <>
      <div className="container mx-auto">
        <div className=" grid place-items-center space-y-5 md:flex space-x-3   ">
          <div className="card ">
            <div className="cardTitle flex justify-between  items-end w-40 h-11 mb-1  ">
              <div className="font-light ">Sections</div>{" "}
              <span className=" f ">
                <BsListTask />
              </span>
            </div>
            <div className="cardBody text-center p-4 shadow">
              <span className="flex justify-center">
                {!sectionsState && (
                  <ReactLoading
                    type={"spin"}
                    color={"gray"}
                    height={"20%"}
                    width={"20%"}
                  />
                )}
              </span>
              <h1 className="text-font text-5xl mb-2">{sectionsState}</h1>
              <span className=" font-thin ">Total</span>
            </div>
          </div>
          <div className="card">
            <div className="cardTitle flex  mb-1">
              <span className=" columns-2 font-light  "> Category</span>
              <span className=" p-1">
                <BsListTask />
              </span>
            </div>
            <div className="cardBody text-center p-4 shadow">
              <span className="flex justify-center">
                {!categoryState && (
                  <ReactLoading
                    type={"spin"}
                    color={"gray"}
                    height={"20%"}
                    width={"20%"}
                  />
                )}
              </span>
              <h1 className="text-font text-5xl mb-2">{categoryState}</h1>
              <span className=" font-thin ">Total</span>
            </div>
          </div>
          <div className="card w-80 ">
            <div className="cardTitle flex justify-center mb-1">
              <span className=" columns-2 font-light"> Information Pages</span>
              <span className=" p-1">
                <BsInfoCircle />
              </span>
            </div>
            <div className="cardBody  text-center p-4 shadow">
              <span className="flex justify-center">
                {!infoPageState && (
                  <ReactLoading
                    type={"spin"}
                    color={"gray"}
                    height={"20%"}
                    width={"20%"}
                  />
                )}
              </span>
              <h1 className="text-font text-5xl mb-2">{infoPageState}</h1>
              <span className=" font-thin ">Total</span>
            </div>
          </div>
          <div className="card w-80 ">
            <div className="cardTitle flex justify-between mb-1">
              <span className=" columns-2 font-light">Stores</span>
              <span className=" p-1">
                <BiStore />
              </span>
            </div>
            <div className="cardBody text-center p-4 shadow">
              <span className="flex justify-center">
                {!storesState && (
                  <ReactLoading
                    type={"spin"}
                    color={"gray"}
                    height={"20%"}
                    width={"20%"}
                  />
                )}
              </span>
              <h1 className="text-font text-5xl mb-2">{storesState}</h1>
              <span className=" font-thin ">Total</span>
            </div>
          </div>
          <div className="card w-80  ">
            <div className="cardTitle flex justify-between mb-1">
              <span className=" columns-2 font-light">Products</span>
              <span className=" p-1">
                <BsBasket />
              </span>
            </div>
            <div className="cardBody text-center p-4 shadow">
              <span className="flex justify-center">
                {!productsState && (
                  <ReactLoading
                    type={"spin"}
                    color={"gray"}
                    height={"20%"}
                    width={"20%"}
                  />
                )}
              </span>
              <h1 className="text-font text-5xl mb-2">{productsState}</h1>
              <span className="font-thin ">Total</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
