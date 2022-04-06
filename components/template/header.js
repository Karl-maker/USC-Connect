import { Button } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import DrawerButton from "./drawerbutton";
import { useContext } from "react";
import { UserContext } from "../../context/context_provider";

export default function Header() {
  const UserService = useContext(UserContext);

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
          <div className="col-lg-10 col-md-10 col-6" style={{ color: "#fff" }}>
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
          <div className="col-lg-2 col-md-2 col-6 text-end">
            {/*
        
        Login Button shows if website state isn't logged In (public / visitor)

        */}

            {UserService.user.logged_in ? (
              <>
                {UserService.user.displayProfileChip({
                  borderWidth: "1px",
                })}
              </>
            ) : (
              <Button
                className="p-1"
                size="medium"
                color="neutral"
                variant="contained"
                href="/login"
                style={{ color: "#fff", float: "left" }}
              >
                LOGIN
              </Button>
            )}
            <DrawerButton anchor="right" element={<></>}>
              <MenuIcon style={{ color: "#fff", fontSize: "36px" }} />
            </DrawerButton>
          </div>
        </div>
      </div>
    </>
  );
}
