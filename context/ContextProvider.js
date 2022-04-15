import { createContext, useState, useEffect } from "react";
import Loading from "../components/template/Loading";
import Student from "../components/api/users/Student";
import Admin from "../components/api/users/Admin";

export const UserContext = createContext({});

export function ContextProvider({ children }) {
  const [student, setStudent] = useState(new Student());
  const [admin, setAdmin] = useState(new Admin());
  const [user, setUser] = useState({ logged_in: false });
  const [loading, setLoading] = useState(true);

  /*

  Because system has two types of users, it will try to authenticate automatically as an admin then student.

  */

  useEffect(async () => {
    /*

      Setup user info by authenticating with Refresh token in cookie

        1. Check if browser had a student token
        2. If not try to authenticate as an admin

    */

    // Try Admin

    await admin.authenticate().then((result) => {
      if (result) {
        admin.getCurrentUserInfo().then((result) => {
          setUser(admin);
          setLoading(false);
        });
      }
    });

    // If user still not logged_in try Student

    if (!user.logged_in) {
      await student.authenticate().then((result) => {
        if (result) {
          student.getCurrentUserInfo().then((result) => {
            setUser(student);
          });
        }
      });

      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <Loading loading={loading}>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </Loading>
  );
}
