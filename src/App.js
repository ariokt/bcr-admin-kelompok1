import Dashboard from "./pages/Dashboard";
import Cars from "./pages/Cars";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import { useEffect } from "react";
import { useState } from "react";
import ProtectedRoute from "./HOC/ProtectedRoute";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

function App() {
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
      const checkIfLogin = () => {
          const token = localStorage.getItem("token");
          if (!token) {
              setIsLogin(false);
          } else {
              setIsLogin(true);
          }};
          checkIfLogin();
      }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/dashboard" element={<ProtectedRoute isLogin={isLogin}>
          <Dashboard />
        </ProtectedRoute>} />
        <Route path="/cars" element={<ProtectedRoute isLogin={isLogin}>
          <Cars />
        </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
