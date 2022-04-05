import { useState } from "react";
import { Drawer, ClickAwayListener, Box } from "@mui/material";

export default function DrawerButton({ children, anchor, element }) {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    event.stopPropagation();
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <ClickAwayListener onClickAway={toggleDrawer(anchor, false)}>
      <div onClick={toggleDrawer(anchor, true)}>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          <div className="container">
            <Box
              sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
              }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              {element}
            </Box>
          </div>
        </Drawer>
        {children}
      </div>
    </ClickAwayListener>
  );
}
