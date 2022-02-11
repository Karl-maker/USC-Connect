import style from "../styles/modules/home.module.css";

/*

10/02/2022

we used Next.js Component CSS feature to import CSS 

read here for more info: https://nextjs.org/docs/advanced-features/custom-error-page#customizing-the-404-page

*/

export default function Home() {
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className={style.specialScreen}
    >
      <div className={style.WelcomeDialogue}>
        <h1 className={style.WelcomeText}>
          Connecting <div>Our</div>
          <div style={{ color: "#e7b617" }}>Students</div> Together
        </h1>
      </div>
    </div>
  );
}
