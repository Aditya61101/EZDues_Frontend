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
//Login page
import Login from "./pages/loginPage/Login.jsx";
//LandingPage
import LandingPage from "./pages/landingPage/index.jsx";
//Student-pages
const StudentHome = React.lazy(() => import("./pages/student/home.jsx"));
const StudentProfile = React.lazy(() => import("./pages/student/profile-page.jsx"));
//Admin-pages
const AdminDashboard = React.lazy(() => import("./pages/admin/dashboard"));
const AdminStudents = React.lazy(() => import("./pages/admin/admin-students"));
const AddDepartmentAdmin = React.lazy(() => import("./pages/admin/add-department"));
const CreateAdmin = React.lazy(() => import("./pages/admin/create-admin"));
const CreateStudentAdmin = React.lazy(() => import("./pages/admin/add-students"));
//Department Pages
const DepartmentDashboard = React.lazy(() => import("./pages/department/dashboard"));
const NoDuesRequests = React.lazy(() => import("./pages/department/no-dues-requests"));
const PaidFines = React.lazy(() => import("./pages/department/approve-paid"));
const SearchStudent = React.lazy(() => import("./pages/department/search-student"));
const NewFine = React.lazy(() => import("./pages/department/new-fine"));
const StudentDetail = React.lazy(() => import("./pages/department/student-detail"));
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig.js"

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Login /> },
  {
    element: <StudentLayout />,
    children: [
      { path: "/student", element: <Suspense fallback={<Spinner />}><StudentHome /></Suspense> },
      { path: "/student/profile", element: <Suspense fallback={<Spinner />}><StudentProfile /></Suspense> },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <Suspense fallback={<Spinner />}><AdminDashboard /></Suspense> },
      { path: "/admin/admin-students", element: <Suspense fallback={<Spinner />}><AdminStudents /></Suspense> },
      { path: "/admin/add-department", element: <Suspense fallback={<Spinner />}><AddDepartmentAdmin /></Suspense> },
      { path: "/admin/create-admin", element: <Suspense fallback={<Spinner />}><CreateAdmin /></Suspense> },
      { path: "/admin/add-student", element: <Suspense fallback={<Spinner />}><CreateStudentAdmin /></Suspense> },
    ],
  },
  {
    element: <DepartmentLayout />,
    children: [
      { path: "/department", element: <Suspense fallback={<Spinner />}><DepartmentDashboard /></Suspense> },
      { path: "/department/paid-fines", element: <Suspense fallback={<Spinner />}><PaidFines /></Suspense> },
      { path: "/department/no-dues", element: <Suspense fallback={<Spinner />}><NoDuesRequests /></Suspense> },
      { path: "/department/search", element: <Suspense fallback={<Spinner />}><SearchStudent /></Suspense> },
      { path: "/department/new", element: <Suspense fallback={<Spinner />}><NewFine /></Suspense> },
      { path: "/department/student/:studentID", element: <Suspense fallback={<Spinner />}><StudentDetail /></Suspense> },
    ],
  },
]);

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <RouterProvider router={router} />
    </MsalProvider>
  </React.StrictMode>
);
/* vi: set et sw=2: */
