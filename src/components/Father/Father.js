import React from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Father = ({ house, ornament }) => {
  //   const house = 7;
  return (
    <div>
      <h4>Father</h4>
      <p>House: {house}</p>
      <div style={{ display: "flex" }}>
        <MySelf house={house} ornament={ornament}></MySelf>
        <Sister house={house}></Sister>
        <Brother house={house}></Brother>
      </div>
    </div>
  );
};

export default Father;
