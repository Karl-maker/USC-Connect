import { Button } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import DrawerButton from "./drawerbutton";
import { useContext } from "react";
import SideBar from "./sidebar";
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
          opacity: 0.99,
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="row m-4">
          <div className="col-lg-10 col-md-10 col-6" style={{ color: "#fff" }}>
            <DrawerButton anchor="left" element={<SideBar />}>
              <MenuIcon style={{ color: "#fff", fontSize: "36px" }} />
            </DrawerButton>
          </div>
          <div className="col-lg-2 col-md-2 col-6 text-end">
            {/*
        
        Login Button shows if website state isn't logged In (public / visitor)

        */}

            {UserService.user.logged_in ? (
              <div>
                {UserService.user.displayProfileChip({
                  borderWidth: "0.5px",
                  color: "black",
                })}
              </div>
            ) : (
              <Button
                className="p-1"
                size="medium"
                color="neutral"
                variant="contained"
                href="/student_login"
              >
                LOGIN
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
