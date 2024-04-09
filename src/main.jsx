import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//Layouts
import { StudentLayout } from "./layouts/student-layout.jsx";
import { AdminLayout } from "./layouts/admin-layout";
import { DepartmentLayout } from "./layouts/department-layout";
//Login page
import Login from "./pages/loginPage/Login.jsx";
//LandingPage
import LandingPage from "./pages/landingPage/index.jsx";
//Student-pages
import StudentHome from "./pages/student/home.jsx";
import StudentProfile from "./pages/student/profile-page.jsx";
//Admin-pages
import AdminDashboard from "./pages/admin/dashboard";
import AdminStudents from "./pages/admin/admin-students";
import AddDepartmentAdmin from "./pages/admin/add-department";
import CreateAdmin from "./pages/admin/create-admin";
import CreateStudentAdmin from "./pages/admin/add-students";
//Department Pages
import DepartmentDashboard from "./pages/department/dashboard";
import NoDuesRequests from "./pages/department/no-dues-requests";
import PaidFines from "./pages/department/approve-paid";
import SearchStudent from "./pages/department/search-student";
import NewFine from "./pages/department/new-fine";
import StudentDetail from "./pages/department/student-detail";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Login /> },
  {
    element: <StudentLayout />,
    children: [
      { path: "/student", element: <StudentHome /> },
      { path: "/student/profile", element: <StudentProfile /> },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/admin/admin-students", element: <AdminStudents /> },
      { path: "/admin/add-department", element: <AddDepartmentAdmin /> },
      { path: "/admin/create-admin", element: <CreateAdmin /> },
      { path: "/admin/add-student", element: <CreateStudentAdmin /> },
    ],
  },
  {
    element: <DepartmentLayout />,
    children: [
      { path: "/department", element: <DepartmentDashboard /> },
      { path: "/department/paid-fines", element: <PaidFines /> },
      { path: "/department/no-dues", element: <NoDuesRequests /> },
      { path: "/department/search", element: <SearchStudent /> },
      { path: "/department/new", element: <NewFine /> },
      { path: "/department/student/:studentID", element: <StudentDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
