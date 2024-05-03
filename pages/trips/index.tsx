import { useEffect } from "react";
import { useRouter } from "next/router";

const RedirectToDashboard = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard");
  }, []);

  return null;
};

export default RedirectToDashboard;
