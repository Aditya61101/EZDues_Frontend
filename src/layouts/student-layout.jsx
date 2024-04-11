import { Outlet, useNavigate } from "react-router-dom";
import ScrollToTopButton from "@/components/ScrollToTop";
import { useMsal } from "@azure/msal-react";
import { useEffect } from "react";
import Spinner from "@/components/spinner";

export const StudentLayout = () => {
  const { inProgress } = useMsal();
  if (inProgress === "login") return <Spinner />;
  return (
    <>
      <ScrollToTopButton />
      <Outlet />
    </>
  );
};
