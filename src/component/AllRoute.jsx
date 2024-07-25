import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Login from "../pages/Login.jsx";
import Task from "../pages/Task.jsx";
import About from "../pages/About.jsx";

import { PrivatePage } from "./PrivatePage.jsx";

export default function AllRoute() {
 

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivatePage>
              <Home />
            </PrivatePage>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivatePage>
              <Contact />
            </PrivatePage>
          }
        />
        <Route
          path="/about"
          element={
            <PrivatePage>
              <About />
            </PrivatePage>
          }
        />
        <Route
          path="/task"
          element={
            <PrivatePage>
              <Task />
            </PrivatePage>
          }
        />
      </Routes>
    </div>
  );
}
