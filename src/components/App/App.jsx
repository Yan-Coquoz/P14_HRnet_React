import Home from "../../pages/Home";
import Employee from "../../pages/Employee";
import Error from "../../pages/Error";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employee-list" element={<Employee />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
