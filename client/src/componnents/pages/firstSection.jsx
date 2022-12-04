import React from "react";
import "./firstSection.css";
import { useData } from "../useContext/dataContext";
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
      <div className="main flex justify-evenly">
        <div className="card w-44 ">
          <div className="cardTitle flex justify-center mb-1">
            <span className=" columns-2 font-light">Sections</span>
            <span className=" p-1">
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
            <h1 className="text-font text-5xl">{sectionsState}</h1>
            <span className=" font-thin ">Total</span>
          </div>
        </div>
        <div className="card w-44 ">
          <div className="cardTitle flex justify-center mb-1">
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
            <h1 className="text-font text-5xl">{categoryState}</h1>
            <span className=" font-thin ">Total</span>
          </div>
        </div>
        <div className="card w-80">
          <div className="cardTitle flex justify-center mb-1">
            <span className=" columns-2 font-light"> Information Pages</span>
            <span className=" p-1">
              <BsInfoCircle />
            </span>
          </div>
          <div className="cardBody text-center p-4 shadow">
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
            <h1 className="text-font text-5xl">{infoPageState}</h1>
            <span className=" font-thin ">Total</span>
          </div>
        </div>
        <div className="card w-80">
          <div className="cardTitle flex justify-center mb-1">
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
            <h1 className="text-font text-5xl">{storesState}</h1>
            <span className=" font-thin ">Total</span>
          </div>
        </div>
        <div className="card w-80 ">
          <div className="cardTitle flex justify-center mb-1">
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
            <h1 className="text-font text-5xl">{productsState}</h1>
            <span className="font-thin ">Total</span>
          </div>
        </div>
      </div>
    </>
  );
}
