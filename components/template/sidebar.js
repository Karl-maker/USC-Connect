import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate, useLocation } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
  active: {
    background: "#f4f4f4",
  },
});

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: "Home",
      icon: <FontAwesomeIcon icon="fa-solid fa-house" color="secondary" />,
      path: "/",
    },
    {
      text: "Upcoming Events",
      icon: <FontAwesomeIcon icon="fa-solid fa-notes" color="secondary" />,
      path: "/",
    },
    {
      text: "School Calendar",
      icon: <FontAwesomeIcon icon="fa-solid fa-calendar" color="secondary" />,
      path: "/",
    },
    {
      text: "Search",
      icon: (
        <FontAwesomeIcon
          icon="fa-solid fa-magnifying-glass"
          color="secondary"
        />
      ),
      path: "/",
    },
  ];

  return (
    //Permanent Side Right Drawer
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="right"
      classes={{ paper: classess.drawerPaper }}
    >
      <div>

        {/*Title of App*/}
        <Typography variant="h5" className={classes.title}>
          USC Connect
        </Typography>
      </div>

      <Toolbar />

      <Divider />

      {/*Links/List section */}

      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text}>
            onClick={() => navigate.push(item.path)}
            className={location.pathname == item.path ? classes.active : null}
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
