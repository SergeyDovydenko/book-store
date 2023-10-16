import { Provider } from "react-redux";

import "fonts.css";
import "nullstyle.css";
import "reset-css";
import "variable.css";

import Router from "router/router";
import store from "store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
