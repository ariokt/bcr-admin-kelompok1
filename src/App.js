import Dashboard from "./pages/Dashboard";
import Cars from "./pages/Cars";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import { useEffect } from "react";
import { useState } from "react";
import ProtectedRoute from "./HOC/ProtectedRoute";

function App() {
  // const [isLogin, setIsLogin] = useState(null);

  // const [token, setToken] = useState('');
  // const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if(token) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // }, []);

  // isLogin={isLogin}
  // setIsLogin={setIsLogin}
  // setToken={setToken}
  // token={token}

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
