import React from "react";
import "./firstSection.css";
import { useData } from "../useContext/dataContext";

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
      <div className="firstDiv">
        <div className="card">
          <div className="title">sghsh</div>
          <div className="cardBody">
            <div className="display">
              <h1>{categoryState}</h1>
            <h3>Total</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
