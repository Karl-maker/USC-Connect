import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context/context_provider";

export default function RouteGuard({ children, pageProps }) {
  const UserServices = useContext(UserContext);
  const [authenticated, setAuthenticated] = useState(UserServices.logged_in);
  const router = useRouter();

  useEffect(() => {
    /**
     * Here goes the logic of retrieving a user
     * from the backend and redirecting
     * an unauthorized user
     * to the login page
     */
    if (pageProps.protected && !authenticated) {
      router.push({
        pathname: "/student_login",
        query: { return_url: router.asPath },
      });
    }

    setAuthenticated(UserServices.isLoggedIn);
  }, [UserServices.logged_in]);

  return <>{children}</>;
}
