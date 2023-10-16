import { Provider } from "react-redux";

import "fonts.css";
import "nullstyle.css";
import "reset-css";
import "variable.css";

import { LocalStorage } from "components/LocalStorage/LocalStorage";
import Router from "router/router";
import store from "store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
        <LocalStorage />
      </Provider>
    </div>
  );
}

export default App;
