import { Button } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";

function sidebarHandler(e) {
  e.preventDefault();
  /*
  
  Change State To Activate Sidebar

  MUI has a library/component is utilities that will allow for off clicking
  https://mui.com/components/click-away-listener/ <--- Find Here!

  */
}

export default function Header() {
  return (
    <>
      <div
        className="container-flush"
        style={{
          position: "fixed",
          backgroundColor: "transparent",
          width: "100%",
        }}
      >
        <div className="row m-4">
          <div className="col-6" style={{ color: "#fff" }}>
            <Link href="/" passHref>
              {/* Link is like an a tag, and passHref is used link within components*/}
              <Typography
                style={{ fontWeight: "bold" }}
                variant="h5"
                gutterBottom
                component="div"
              >
                USC CONNECT
              </Typography>
            </Link>
          </div>
          <div className="col-6 text-end">
            {/*
        
        Login Button shows if website state isn't logged In (public / visitor)

        */}
            <Button
              className="p-1"
              size="medium"
              color="neutral"
              variant="contained"
              href="/login"
              style={{ color: "#fff" }}
            >
              LOGIN
            </Button>
            <MenuIcon
              onClick={{ sidebarHandler }}
              style={{ color: "#fff", marginLeft: "30px", fontSize: "36px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
