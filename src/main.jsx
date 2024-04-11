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
const StudentProfile = React.lazy(() =>
  import("./pages/student/profile-page.jsx")
);
//Admin-pages
const AdminDashboard = React.lazy(() => import("./pages/admin/dashboard"));
const AdminStudents = React.lazy(() => import("./pages/admin/admin-students"));
const AddDepartmentAdmin = React.lazy(() =>
  import("./pages/admin/add-department")
);
const CreateAdmin = React.lazy(() => import("./pages/admin/create-admin"));
const CreateStudentAdmin = React.lazy(() =>
  import("./pages/admin/add-students")
);
//Department Pages
const DepartmentDashboard = React.lazy(() =>
  import("./pages/department/dashboard")
);
const NoDuesRequests = React.lazy(() =>
  import("./pages/department/no-dues-requests")
);
const PaidFines = React.lazy(() => import("./pages/department/approve-paid"));
const SearchStudent = React.lazy(() =>
  import("./pages/department/search-student")
);
const NewFine = React.lazy(() => import("./pages/department/new-fine"));
const StudentDetail = React.lazy(() =>
  import("./pages/department/student-detail")
);
//Auth
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig.js";

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
