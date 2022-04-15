import React from "react";
import style from "../styles/modules/login.module.css";
import { UserContext } from "../context/ContextProvider";
import Student from "../components/api/users/Student";
import { useRouter } from "next/router";
import user from "../components/api/users/User";
import Loading from "../components/template/Loading";
import { Button, TextField } from "@mui/material";

function StudentLogin() {
  const router = useRouter();
  const [error, setError] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  /*

  Student class will be created and the login method will be used

  if the login is successful the UserService will set the new user context which inturn will cause the entire system to react

  */

  const user = new Student();
  const UserService = React.useContext(UserContext);

  if (loggedIn) {
    const returnUrl = router.query.return_url || "/events";
    router.push(returnUrl);
  }

  React.useEffect(() => {
    UserService.setUser(user);
  }, []);

  const submitLogin = async (e) => {
    try {
      e.preventDefault(); //prevents the refreshing of the page
      await UserService.user.login(credentials.email, credentials.password);

      setLoggedIn(UserService.user.logged_in);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Loading loading={loading}>
      <div
        style={{ height: "100vh", width: "100vw", paddingTop: "80px" }}
        className={style.body}
      >
        <div className={style.container}>
          <div
            className={style.Loginarea}
            style={{
              height: "100%",
              width: "90%",
              margin: "auto",
            }}
          >
            <div className="row">
              <div className="mascot col-lg-6 col-md-12 col-sm-12 col-sx-12 mt-lg-5">
                <img
                  className={style.mascot}
                  src={"/img/mascot.png"}
                  alt="USC Connect"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-sx-12">
                <h1 className="display-4 mt-4">Student Login</h1>
                {/*form that takes and submits the user's input and checks for authentication*/}
                <form
                  onSubmit={(e) => {
                    setLoading(true);
                    submitLogin(e);
                  }}
                >
                  <div>
                    <TextField
                      type="text"
                      className="mt-3"
                      autoFocus
                      required
                      variant="filled"
                      size="small"
                      label="Email or Student ID"
                      placeholder="Email or Student ID"
                      onChange={(e) => {
                        setCredentials((prevState) => ({
                          ...prevState,
                          email: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <TextField
                      className="mt-3 mb-3"
                      type="password"
                      size="small"
                      required
                      variant="filled"
                      label="Password"
                      onChange={(e) => {
                        setCredentials((prevState) => ({
                          ...prevState,
                          password: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <Button
                    variant="contained"
                    disableElevation
                    className={style.button}
                    type="sumbit"
                  >
                    LOGIN
                  </Button>

                  {/*Redirects the user to the Sign up page*/}
                </form>
                <div className="col-12">
                  <p className="mt-3">
                    Are you an administrator?{" "}
                    <span
                      onClick={() => router.push("/admin-login")}
                      style={{ color: "#2d3436" }}
                    >
                      Login here
                    </span>
                  </p>
                </div>
                {
                  //checks if there is an error while Logging in
                  //and displays an error message if there is
                  error && <div>{error}</div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Loading>
  );
}

// Sets the page protection values, this will be taken from the page guard component to check if page is guarded

export async function getStaticProps(context) {
  return {
    props: {
      protected: false,
      title: "Login",
    },
  };
}

export default StudentLogin;
