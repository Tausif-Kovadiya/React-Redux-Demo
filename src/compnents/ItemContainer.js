import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer({ item, buyItem }) {
  return (
    <div>
      <h2>Item - {item}</h2>
      <button onClick={buyItem}>Buy Items</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  //ownProps are props passsed to this component from parent component
  const itemState = ownProps.cake //if we get "cake" as props from parent component,set condition.
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunc = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunc,
  };
};

//if you want to dispatch actions but don't want to subscribe() to state changes in store || where we want to define mapDispatchToProps but not mapStateToProps. Pass Null as 1st argument instead of mapStateToProps to connect(). So we will not display state on this particular page.

//export default connect(null, mapDispatchToProps)(ItemContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
