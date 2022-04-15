import { MenuItem, Menu } from "@mui/material";
import { useState } from "react";

export default function MenuButton({ children, list }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
  };

  const menu_items = list.map((item) => (
    <MenuItem
      key={item.label}
      onClick={(e) => {
        e.stopPropagation();
        item.activity();
        handleClose(e);
      }}
    >
      {item.label}
    </MenuItem>
  ));

  return (
    <>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {children}

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {menu_items}
        </Menu>
      </div>
    </>
  );
}
