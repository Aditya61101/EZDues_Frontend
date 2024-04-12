import React from "react";
//Public pages
const LandingPage = React.lazy(() => import("./landingPage"));
const Login = React.lazy(() => import("./loginPage/Login"));
//Student-pages
const StudentHome = React.lazy(() => import("./student/home.jsx"));
const StudentProfile = React.lazy(() => import("./student/profile-page.jsx"));
//Admin-pages
const AdminDashboard = React.lazy(() => import("./admin/dashboard"));
const AdminStudents = React.lazy(() => import("./admin/admin-students"));
const AddDepartmentAdmin = React.lazy(() => import("./admin/add-department"));
const CreateAdmin = React.lazy(() => import("./admin/create-admin"));
const CreateStudentAdmin = React.lazy(() => import("./admin/add-students"));
//Department Pages
const DepartmentDashboard = React.lazy(() => import("./department/dashboard"));
const NoDuesRequests = React.lazy(() => import("./department/no-dues-requests"));
const PaidFines = React.lazy(() => import("./department/approve-paid"));
const SearchStudent = React.lazy(() => import("./department/search-student"));
const NewFine = React.lazy(() => import("./department/new-fine"));
const StudentDetail = React.lazy(() => import("./department/student-detail"));

export {
  LandingPage,
  Login,
  StudentHome,
  StudentProfile,
  AdminDashboard,
  AdminStudents,
  AddDepartmentAdmin,
  CreateAdmin,
  CreateStudentAdmin,
  DepartmentDashboard,
  NoDuesRequests,
  PaidFines,
  SearchStudent,
  NewFine,
  StudentDetail,
};
