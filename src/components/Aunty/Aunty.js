import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Aunty = () => {
  const [ornament, house, setHouse] = useContext(RingContext);
  const handleHouseIncrease = () => {
    const newHouse = house + 1;
    setHouse(newHouse);
  };
  return (
    <div>
      <h4>Aunty</h4>
      <p>House: {house}</p>
      <button onClick={handleHouseIncrease}>Add a Home</button>
    </div>
  );
};

export default Aunty;
