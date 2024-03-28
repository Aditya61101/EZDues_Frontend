import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//Layouts
import { StudentLayout } from "./layouts/student-layout.jsx";
import { AdminLayout } from "./layouts/admin-layout";
//LandingPage
import LandingPage from "./pages/landingPage/index.jsx";
//Student-pages
import StudentHome from "./pages/student/home.jsx";
import StudentLogin from "./pages/student/sign-in.jsx";
import StudentProfile from "./pages/student/profile-page.jsx";
//Admin-pages
import AdminHome from "./pages/admin/home";
import AdminLogin from "./pages/admin/sign-in";
import LogIn from "./pages/loginPage/LogIn.jsx";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  {path:"/login", element: <LogIn/>}
  ,{
    element: <StudentLayout />,
    children: [
      { path: "/student", element: <StudentHome /> },
      { path: "/student/sign-in", element: <StudentLogin /> },
      { path: "/student/profile", element: <StudentProfile /> },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <AdminHome /> },
      { path: "/admin/sign-in", element: <AdminLogin /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
