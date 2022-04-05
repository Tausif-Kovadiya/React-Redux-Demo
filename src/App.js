import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./compnents/CakeContainer";
import HooksCakeContainer from "./compnents/HooksCakeContainer";
import IceCreamContainer from "./compnents/IceCreamContainer";
import HooksIceCreamContainer from "./compnents/HooksIceCreamContainer";
import NewCakeContainer from "./compnents/NewCakeContainer";
import ItemContainer from "./compnents/ItemContainer";
import UserContainer from "./compnents/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <ItemContainer cake />
        <ItemContainer />
        <HooksIceCreamContainer />
        <IceCreamContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
