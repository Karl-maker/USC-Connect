import Protect from "../components/protect/protect";

export default function Example({ children }) {
  return (
    <Protect userType="student" href="/">
      <h1>Hello World</h1>
    </Protect>
  );
}
