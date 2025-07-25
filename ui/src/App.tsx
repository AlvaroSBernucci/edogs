import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DogDetailPage from "./pages/DogDetailPage/DogDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { UserStorage } from "./context/UserContext/UserContext";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <UserStorage>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="/dog-detail/:id" element={<DogDetailPage />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
