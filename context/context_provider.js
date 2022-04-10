import { createContext, useState, useEffect } from "react";
import Loading from "../components/template/loading";
import Student from "../components/api/users/student";
import Admin from "../components/api/users/admin";

export const UserContext = createContext({});

export function ContextProvider({ children }) {
  const [student, setStudent] = useState(new Student());
  const [admin, setAdmin] = useState(new Admin());
  const [user, setUser] = useState({ logged_in: false });
  const [loading, setLoading] = useState(true);

  /*

  Because system has two types of users, it will try to authenticate automatically as an admin then student.

  */

  useEffect(() => {
    //Attempt to login

    student.authenticate().then((result) => {
      if (result) {
        // Get Student information
        student
          .getCurrentUserInfo()
          .then(() => {
            // Login user
            student.logged_in = true;
            setUser(student);
            setLoading(false);
          })
          .catch((error) => {});
      }
    });
  }, []);

  return (
    <Loading loading={loading}>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </Loading>
  );
}
