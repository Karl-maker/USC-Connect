import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context/ContextProvider";

export default function RouteGuard({ children, pageProps }) {
  const UserServices = useContext(UserContext);
  const [authenticated, setAuthenticated] = useState(
    UserServices.user.logged_in
  );
  const router = useRouter();

  useEffect(() => {
    /**
     * Here goes the logic of retrieving a user
     * from the backend and redirecting
     * an unauthorized user
     * to the login page
     */
    setTimeout(() => {
      if (pageProps.protected && !UserServices.user.logged_in) {
        router.push({
          pathname: "/student-login",
          query: { return_url: router.asPath },
        });
      }
    }, 2000);

    setAuthenticated(UserServices.user.logged_in);
  }, [UserServices.user.logged_in]);

  return <>{children}</>;
}
