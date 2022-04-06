import axios from "axios";
import Connect from "../Connect";
import { Chip, Avatar } from "@mui/material";

export default class user extends Connect {
  constructor(url, access_token, {}) {
    super(url, access_token);

    this.id;
    this.first_name;
    this.last_name;
    this.email;
    this.logged_in = false;
    this.access_token = access_token;
  }

  //Getters
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

  //Methods
  displayProfilePicture(size) {
    return (
      <Avatar>
        {this.first_name.toUpperCase().charAt(0) ||
          this._email.toUpperCase().charAt(0)}
      </Avatar>
    );
  }

  displayProfileChip({ borderWidth }) {
    return (
      <>
        <Chip
          avatar={this.displayProfilePicture(23)}
          variant="outlined"
          sx={{
            borderWidth,
          }}
          label={`${this.first_name || this._email} ${this.last_name || ""}`}
        />
      </>
    );
  }
}
