import Connect from "../Connect";
import { Chip, Avatar } from "@mui/material";
import Link from "next/link";

export default class User extends Connect {
  constructor(url, access_token, { is_admin }) {
    super(url, access_token);

    this._id;
    this._first_name;
    this._last_name;
    this._email;
    this._logged_in = false;
    this._access_token = access_token;
    this._is_admin = is_admin || false;
  }

  //Getters
  get is_admin() {
    return this._is_admin;
  }

  get access_token() {
    return this._access_token;
  }

  get id() {
    return this._id;
  }

  get first_name() {
    return this._first_name;
  }

  get last_name() {
    return this._last_name;
  }

  get email() {
    return this._email;
  }

  get logged_in() {
    return this._logged_in;
  }

  set logged_in(logged_in) {
    this._logged_in = this.logged_in;
  }

  set access_token(access_token) {
    this._access_token = access_token;
  }

  //Methods

  displayProfilePicture(size) {
    return (
      <Avatar sx={{ bgcolor: "#fdcb6e" }}>
        {this.first_name.toUpperCase().charAt(0) ||
          this._email.toUpperCase().charAt(0)}
      </Avatar>
    );
  }

  displayProfileChip({ borderWidth, color, variant }) {
    return (
      <Link href={"/profile"} passHref>
        <Chip
          variant={variant || "none"}
          avatar={this.displayProfilePicture(23)}
          sx={{
            borderWidth: borderWidth || "0px solid",
            color: color || "#ffff",
          }}
          label={`${this.first_name || this._email} ${this.last_name || ""}`}
        />
      </Link>
    );
  }
}
