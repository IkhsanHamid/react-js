import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import UseEffect1 from "./components/pages/useEffect1";
import Calculator from "./calculator/calculator";
import Layout from "./components/shared/Layout";
import UseEffect2 from "./components/pages/UseEffect2";
import DataObject from "./components/pages/DataObject";
import ListProduct from "./components/pages/listProduct";
// import Footer from "./components/shared/footer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/DataObject" element={<DataObject />}></Route>
            <Route path="/calculator" element={<Calculator />}></Route>
            <Route path="/listProduct" element={<ListProduct />}></Route>
            <Route path="/UseEffect2" element={<UseEffect2 />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
