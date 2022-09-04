import Dashboard from "./pages/Dashboard";
import Cars from "./pages/Cars";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Cars" element={<Cars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
