import "./App.css";
import HomePage from "./containers/HomePage";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/Navbar/Index";
import theme from "./themes/Theme";
import Footer from "./components/Footer";
import Login from "./containers/Login";
import Register from "./containers/Register";
import { DetailTv } from "./containers/DetailTv";
import Articles from "./containers/Articles";
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route
            path="/Articles"
            element={
              <>
                <Navbar />
                {/* <HomePage /> */}
                <Articles />
                <Footer />
              </>
            }
          />
          <Route
            path="/series"
            element={
              <>
                <Navbar />
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route
            path="/newandpopular"
            element={
              <>
                <Navbar />
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route
            path="/mylist"
            element={
              <>
                <Navbar />
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route
            path="login"
            element={
              <ProtectedRoute loginOnly={false}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoute loginOnly={false}>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <Navbar />
                {/* <DetailMovie /> */}
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tv/:id"
            element={
              <ProtectedRoute>
                <Navbar />
                <DetailTv />
                <Footer />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
