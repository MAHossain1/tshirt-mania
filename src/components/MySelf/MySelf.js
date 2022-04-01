import React from "react";
import Special from "../Special/Special";

const MySelf = ({ house, ornament }) => {
  return (
    <div>
      <h5>My self</h5>
      <p>Home: {house}</p>
      <Special ornament={ornament}></Special>
    </div>
  );
};

export default MySelf;
