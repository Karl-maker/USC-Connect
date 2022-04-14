import React from "react";
import style from "../styles/modules/login.module.css";
import { UserContext } from "../context/context_provider";
import Admin from "../components/api/users/admin";
import { useRouter } from "next/router";
import user from "../components/api/users/user";
import Loading from "../components/template/loading";


function AdminLogin() {
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

  const user = new Admin();
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
      <div style={{ height: "100vh", width: "100vw" }} className={style.body}>
      
        <div className={style.container}>
          <div className="mascot">
            <img className='mascot' src={require('../public/img/mascot.png').default} alt='USC Connect'/>
          </div>

          <div className={style.Loginarea}>
            <h1 id="header">Log In</h1>
            {/*form that takes and submits the user's input and checks for authentication*/}
            <form
              onSubmit={(e) => {
                setLoading(true);
                submitLogin(e);
              }}
            >
              <div>
                <input
                  className={style.input}
                  type="text"
                  autoFocus
                  required
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
                <input
                  className={style.input}
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => {
                    setCredentials((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }));
                  }}
                />
              </div>
              <button className={style.button} type="sumbit">
                Log in
              </button>
              {/*Redirects the user to the Sign up page*/}
              <h4>Don't have an account?</h4>

              <h1>link</h1>
            </form>
            {
              //checks if there is an error while Logging in
              //and displays an error message if there is
              error && <div>{error}</div>
            }
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

export default AdminLogin;
