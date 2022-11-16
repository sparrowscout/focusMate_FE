import { Route, Routes } from "react-router-dom";
import Chart from "./Chart";

const Router = () => {
  return (
    <Routes>
      <Route path="/chart" element={<Chart />} />;
    </Routes>
  );
};

export default Router;
