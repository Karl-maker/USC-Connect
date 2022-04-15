import { useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "./Loading";

// Helps control protecting pages

export default function RedirectGuard({ children, condition, page }) {
  const router = useRouter();

  useEffect(() => {
    if (!condition) {
      router.push({
        pathname: page,
      });
    }
  }, [condition]);

  return <Loading loading={!condition}>{children}</Loading>;
}
