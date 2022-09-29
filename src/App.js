import AddNewCar from "./pages/AddNewCar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cars from "./pages/Cars";
import Dashboard from "./pages/Dashboard";
import EditCar from "./pages/EditCar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';
import Login from "./pages/Login";
import ProtectedRoute from "./HOC/ProtectedRoute";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login  />} />
        <Route path="/dashboard" element={<ProtectedRoute >
          <Dashboard />
        </ProtectedRoute>} />
        <Route path="/cars" element={<ProtectedRoute >
          <Cars />
        </ProtectedRoute>} />
        <Route path="/cars/add-new-car" element={<ProtectedRoute >
          <AddNewCar />
        </ProtectedRoute>} />
        <Route path="/cars/edit-car-:id" element={<ProtectedRoute >
          <EditCar />
        </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
