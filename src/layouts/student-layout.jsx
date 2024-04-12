import { Outlet, useNavigate } from "react-router-dom";
import ScrollToTopButton from "@/components/ScrollToTop";
import { useMsal } from "@azure/msal-react";
import Spinner from "@/components/spinner";
import { useEffect, useState } from "react";

export const StudentLayout = () => {
  const { inProgress, accounts } = useMsal();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      inProgress === "login" ||
      inProgress === "handleRedirect" ||
      inProgress === "logout"
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [inProgress]);

  useEffect(() => {
    if (inProgress === "none" && accounts.length === 0) navigate("/login");
  }, [accounts, navigate, inProgress]);

  if (loading) return <Spinner />;

  return (
    <>
      <ScrollToTopButton />
      <Outlet />
    </>
  );
};
