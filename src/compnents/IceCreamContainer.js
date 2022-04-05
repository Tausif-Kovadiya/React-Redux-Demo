import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function IceCreamContainer({ numOfIceCreams, buyIceCream }) {
  return (
    <div>
      <h2>Number of Ice creams - {numOfIceCreams}</h2>
      <button onClick={buyIceCream}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
