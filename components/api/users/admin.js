import axios from "axios";
import User from "../users/user";
const BACKEND_URL = process.env.BACKEND_URL;

export default class Admin extends User {
  constructor() {
    super(BACKEND_URL, null, { is_admin: true });
  }

  //Getters and Setters

  async authenticate() {
    /*
     * Credentials need to be included to get the refresh token as a cookie
     */

    return fetch(`${this.url}/api/administrator/authenticate`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "API-Key",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // get access_token and place in code

        if (response.access_token) {
          this._access_token = response.access_token;
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => {
        return false;
      });
  }

  //Methods
  async getCurrentUserInfo() {
    return fetch(`${this.url}/api/administrator`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this._access_token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.email) {
          this._first_name = result.first_name;
          this._last_name = result.last_name;
          this._email = result.email;
          this._logged_in = true;
        } else {
          throw { message: "Issue" };
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async login(email, password) {
    console.log(email, password);
    try {
      return fetch(`${this.url}/api/administrator/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.access_token) {
            const administrator = response.administrator;

            this._email = administrator.email;
            this._first_name = administrator.first_name;
            this._last_name = administrator.last_name;
            this._id = administrator._id;
            this._logged_in = true;

            return true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async logout() {
    try {
      await axios.delete(`${this.url}/api/administrator/authenticate`, {
        withCredentials: true,
      });

      this._logged_in = false;

      return;
    } catch (err) {
      return;
    }
  }
}
