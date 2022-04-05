import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux";

function HooksIceCreamContainer() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of IceCreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
