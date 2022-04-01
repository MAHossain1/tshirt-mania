import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Special = ({ ornament }) => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h5>Special</h5>
      <p>
        <small>Gift: {ornament}</small>
      </p>
      <p>
        <small>special: {ring}</small>
      </p>
    </div>
  );
};

export default Special;
