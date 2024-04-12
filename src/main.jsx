import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Spinner for the lazy loading
import Spinner from "./components/spinner";
//Layouts
import { StudentLayout } from "./layouts/student-layout.jsx";
import { AdminLayout } from "./layouts/admin-layout";
import { DepartmentLayout } from "./layouts/department-layout";
//Pages
import {
  AddDepartmentAdmin,
  AdminDashboard,
  AdminStudents,
  CreateAdmin,
  CreateStudentAdmin,
  DepartmentDashboard,
  LandingPage,
  Login,
  NewFine,
  NoDuesRequests,
  PaidFines,
  SearchStudent,
  StudentDetail,
  StudentHome,
  StudentProfile,
} from "./pages/index.js";
//Auth
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
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

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </MsalProvider>
  </React.StrictMode>
);
/* vi: set et sw=2: */
