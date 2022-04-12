import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RedirectGuard({ children, condition, page }) {
  const router = useRouter();

  useEffect(() => {
    if (!condition) {
      router.push({
        pathname: page,
      });
    }
  }, [condition]);

  return <>{children}</>;
}
