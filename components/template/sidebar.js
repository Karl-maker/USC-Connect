import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context/context_provider";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { HiLogout } from "react-icons/hi";
import { MdCreate } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { FiHelpCircle } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

export default function SideBar() {
  const UserService = useContext(UserContext);
  const router = useRouter();
  const [menu, setMenu] = useState([
    {
      label: "Home",
      icon: <GrHomeRounded />,
      link: "/",
    },
    {
      label: "Events",
      icon: <BsFillCalendarEventFill />,
      link: "/events",
    },
  ]);

  useEffect(() => {
    // Check if use is admin to get different options

    if (UserService.user.is_admin) {
      setMenu(
        menu.concat({
          label: "Add Event",
          icon: <MdCreate />,
          link: "/create-event",
        })
      );
    }
  }, [UserService.user.is_admin]);

  return (
    <>
      <List>
        {UserService.user.logged_in && (
          <ListItem>
            <ListItemText
              primary={UserService.user.displayProfileChip({
                color: "black",
                variant: "outlined",
              })}
            />
          </ListItem>
        )}
        {menu.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => {
              router.push({
                pathname: item.link,
              });
            }}
          >
            <ListItemIcon>
              {
                // Icons come here
              }
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem
          button
          onClick={() => {
            // Log user out

            router.push("/help");
          }}
        >
          <ListItemIcon>
            {
              // Icons come here
            }
            <FiHelpCircle />
          </ListItemIcon>
          <ListItemText primary={"Help"} />
        </ListItem>
      </List>
      {UserService.user.logged_in && (
        <>
          <Divider />
          <ListItem
            button
            onClick={() => {
              // Log user out
              UserService.user.logout();
              router.reload(window.location.pathname);
            }}
          >
            <ListItemIcon>
              {
                // Icons come here
              }
              <HiLogout />
            </ListItemIcon>
            <ListItemText primary={"Log Out"} />
          </ListItem>
        </>
      )}
    </>
  );
}
