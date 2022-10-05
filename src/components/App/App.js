import Home from "components/pages/Home";
import EmployeList from "components/pages/EmployeList";
import Error from "components/pages/Error";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
