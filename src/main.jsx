import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//Layouts
import { StudentLayout } from "./layouts/student-layout.jsx";
import { AdminLayout } from "./layouts/admin-layout";
import { DepartmentLayout } from "./layouts/department-layout";
//Login page
import LogIn from "./pages/loginPage/LogIn.jsx";
//LandingPage
import LandingPage from "./pages/landingPage/index.jsx";
//Student-pages
import StudentHome from "./pages/student/home.jsx";
import StudentLogin from "./pages/student/sign-in.jsx";
import StudentProfile from "./pages/student/profile-page.jsx";
//Admin-pages
import AdminHome from "./pages/admin/home";
import AdminLogin from "./pages/admin/sign-in";
//Department Pages
import DepartmentDashboard from "./pages/department/dashboard";
import NoDuesRequests from "./pages/department/no-dues-requests";
import PaidFines from "./pages/department/approve-paid";
import SearchStudent from "./pages/department/search-student";
import NewFine from "./pages/department/new-fine";
import StudentDetail from "./pages/department/student-detail";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path:"/login", element: <LogIn/> },
  {
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
  {
    element: <DepartmentLayout />,
    children: [
      { path: "/department/", element: <DepartmentDashboard /> },
      { path: "/department/paidfines/", element: <PaidFines /> },
      { path: "/department/nodues/", element: <NoDuesRequests /> },
      { path: "/department/search/", element: <SearchStudent /> },
      { path: "/department/new/", element: <NewFine /> },
      { path: "/department/student/:studentID", element: <StudentDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
