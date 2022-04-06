import { Button } from "@mui/material";
import style from "../styles/modules/home.module.css";

/*

10/02/2022

we used Next.js Component CSS feature to import CSS 

read here for more info: https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css

*/

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
      className={style.specialScreen}
    >
      <div className={style.WelcomeDialogue}>
        <div className="text-center">
          <h1 className={style.WelcomeText}>
            Connecting <div>Our</div>
            <div style={{ color: "#e7b617" }}>Students</div> Together
          </h1>
          <Button
            className="mt-5"
            href="/register"
            size="medium"
            color="neutral"
            variant="contained"
            style={{ color: "#fff", textAlign: "center" }}
          >
            Create An Account
          </Button>
        </div>
      </div>
    </div>
  );
}
