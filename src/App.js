import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

function App() {
  const [callBack, setCallBack] = useState();

  return (
    <div className="App">
      <Header setCallBack={setCallBack} />
      <Main callBack={callBack} />
      <Footer />
    </div>
  );
}

export default App;
