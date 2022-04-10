import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RedirectGuard({ children, condition, page }) {
  const router = useRouter();

  useEffect(() => {
    /**
     * Here goes the logic of retrieving a user
     * from the backend and redirecting
     * an unauthorized user
     * to the login page
     */
    if (condition) {
      router.push({
        pathname: page,
      });
    }
  }, [condition]);

  return <>{children}</>;
}
