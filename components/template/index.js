import Header from "./header";

export default function PageTemplate({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
