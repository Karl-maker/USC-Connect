import style from "../styles/modules/error.module.css";

/*

10/02/2022

we used Next.js Component CSS feature to import CSS 

read here for more info: https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css

*/

function Error() {
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className={style.errorScreen}
    >
      {/* style = {{ ____ }} <--- this is for inline CSS*/}
      <div className={style.WelcomeDialogue}>
        <h1 className={style.WelcomeText}>
          Error<h2>Something Went Wrong. Please Try Again</h2>
        </h1>
      </div>
    </div>
  );
}

export default Error;
