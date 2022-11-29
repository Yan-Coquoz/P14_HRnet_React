import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Employee from "../../pages/Employee";
import Error from "../../pages/Error";

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
