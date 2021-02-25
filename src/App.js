import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

function App() {
  const [callBack, setCallBack] = useState();
  const [music, setMusic] = useState();
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <Main callBack={callBack} setMusic={setMusic} setLoading={setLoading} />
      ) : (
        <div className="App">
          <Header setCallBack={setCallBack} music={music} />
          <Main
            callBack={callBack}
            setMusic={setMusic}
            setLoading={setLoading}
          />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
