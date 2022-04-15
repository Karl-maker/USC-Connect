import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerButton from "./DrawerButton";
import { useContext } from "react";
import SideBar from "./SideBar";
import { UserContext } from "../../context/ContextProvider";

/*
 *
 *   Stays ontop of browser as a header bar
 *
 */

export default function Header() {
  const UserService = useContext(UserContext);

  return (
    <>
      <div
        className="container-flush "
        style={{
          position: "fixed",
          backgroundColor: "transparent",
          width: "100%",
          opacity: 0.99,
          backdropFilter: "blur(20px)",
          zIndex: 999,
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
        
        Login Button shows if website's user isn't logged in

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
                href="/student-login"
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
