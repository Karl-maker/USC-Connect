import { createContext, useState, useEffect } from "react";
import Loading from "../components/template/loading";
import Student from "../components/api/users/student";
import Admin from "../components/api/users/admin";

export const UserContext = createContext({});

export function ContextProvider({ children }) {
  const student = new Student();
  const admin = new Admin();
  const [user, setUser] = useState({ logged_in: false });
  const [loading, setLoading] = useState(true);

  /*

  Because system has two types of users, it will try to authenticate automatically as an admin then student.

  */

  useEffect(() => {
    (async function () {
      // Check if student is authenticated
      try {
        await student.authenticate();
        if (student.logged_in) {
          setUser(student);
          setLoading(false);
          return;
        }
      } catch (err) {
        console.log(err);
      }

      // Check if administrator is authenticated
      try {
        await admin.authenticate();
        if (admin.logged_in) {
          setUser(admin);
          setLoading(false);
          return;
        }
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    })();
  });

  return (
    <Loading loading={loading}>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </Loading>
  );
}
