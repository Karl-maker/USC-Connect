import style from "../styles/modules/error.module.css";

/*

10/02/2022

we used Next.js Component CSS feature to import CSS 

read here for more info: https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css

*/

function Error404() {
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className={style.error404Screen}
    >
      {/* style = {{ ____ }} <--- this is for inline CSS*/}
      <div className={style.ErrorDialogue}>
        <h1 className={style.WelcomeText}>Error 404</h1>
        <h2>This Page Could Not Be Found</h2>
      </div>
    </div>
  );
}

export default Error404;
