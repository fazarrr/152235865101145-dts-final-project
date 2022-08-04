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
import Articles from "./containers/Articles";
import Blogs from "./containers/Blogs";
import Reports from "./containers/Reports";
import { DetailNews } from "./containers/DetailNews";

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
                <ProtectedRoute>
                  <Navbar />
                  <Articles />
                  <Footer />
                </ProtectedRoute>
              </>
            }
          />
          <Route
            path="/Blogs"
            element={
              <>
                <ProtectedRoute>
                  <Navbar />
                  <Blogs />
                  <Footer />
                </ProtectedRoute>
              </>
            }
          />
          <Route
            path="/Reports"
            element={
              <>
                <ProtectedRoute>
                  <Navbar />
                  <Reports />
                  <Footer />
                </ProtectedRoute>
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
            path="/Articles/:id"
            element={
              <ProtectedRoute>
                <Navbar />
                <DetailNews />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Blogs/:id"
            element={
              <ProtectedRoute>
                <Navbar />
                {/* <DetailMovie /> */}
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/:id"
            element={
              <ProtectedRoute>
                <Navbar />
                {/* <DetailMovie /> */}
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
