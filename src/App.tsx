import { Provider } from "react-redux";
import React, { useState } from "react";

import "fonts.css";
import "reset-css";
import "nullstyle.css";
import "variable.css";


import Header from "./components/Header/Header";
import MainContent from "components/MainContent/MainContent";
import Footer from "components/Footer/Footer";
import MainLayout from "layouts/MainLayout/MainLayout";

function App() {

  return (
    <div className="App">
      <MainLayout Header={<Header/>} MainContent={<MainContent/>} Footer={<Footer/>}/>
    </div>
  );
}

export default App;
