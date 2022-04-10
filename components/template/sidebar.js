import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context/context_provider";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { HiLogout } from "react-icons/hi";
import { GrHomeRounded } from "react-icons/gr";
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

  return (
    <>
      <List>
        {[
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
        ].map((item, index) => (
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
