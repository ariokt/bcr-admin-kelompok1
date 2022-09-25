import AddNewCar from "./pages/AddNewCar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cars from "./pages/Cars";
import Dashboard from "./pages/Dashboard";
import EditCar from "./pages/EditCar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Cars/Add-New-Car" element={<AddNewCar />} />
        <Route path="/Cars/Edit-Car-:id" element={<EditCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
