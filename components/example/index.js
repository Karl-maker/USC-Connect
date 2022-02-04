// Hooks

import { useState, useEffect } from "react";

export default function ExampleComponent({ course, children }) {
  const [count, setCount] = useState(0);

  // Fetch? ASYNC AWAIT

  useEffect(() => {
    //...
    // api/example ===> Hello World
  });

  return <>{children}</>;
}
