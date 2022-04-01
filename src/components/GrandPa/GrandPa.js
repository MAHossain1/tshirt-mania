import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./GrandPa.css";

export const RingContext = createContext("ring");

const GrandPa = () => {
  const [house, setHouse] = useState(1);
  const handleBuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };
  const ornament = "Diamond Ring";
  return (
    <RingContext.Provider value={[ornament, house, setHouse]}>
      <div className="grandpa">
        <h2>GrandPa</h2>
        <p>House: {house}</p>
        <button onClick={handleBuyAHouse}>Buy a House</button>
        <section style={{ display: "flex" }}>
          <Father house={house} ornament={ornament}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default GrandPa;
