import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Uncle = () => {
  const [ornament, house] = useContext(RingContext);
  return (
    <div>
      <h4>Uncle</h4>
      <p>House: {house}</p>
      <p>Ring: {ornament}</p>
    </div>
  );
};

export default Uncle;
