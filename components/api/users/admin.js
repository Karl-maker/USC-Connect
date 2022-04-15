import User from "./User";
const BACKEND_URL = process.env.BACKEND_URL;

export default class Admin extends User {
  constructor() {
    super(BACKEND_URL, null, { is_admin: true });
  }

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
      .then((response) => {
        // Check status code
        if (response.status === 200) {
          return response.json();
        }

        throw new Error({
          message: response.json().message || "Issue authenticating",
        });
      })
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

  async getCurrentUserInfo() {
    return fetch(`${this.url}/api/administrator`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this._access_token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // Check status code
        if (response.status === 200) {
          return response.json();
        }

        throw new Error({
          message: response.json().message || "Issue getting information",
        });
      })
      .then((result) => {
        this._id = result._id;
        this._first_name = result.first_name;
        this._last_name = result.last_name;
        this._email = result.email;
        this._logged_in = true;

        return true;
      })
      .catch((error) => {
        return false;
      });
  }

  async login(email, password) {
    return fetch(`${this.url}/api/administrator/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => {
        // Check status code
        if (response.status === 200) {
          return response.json();
        }

        throw new Error({
          message: response.json().message || "Issue with login",
        });
      })
      .then((response) => {
        if (response.access_token) {
          const administrator = response.administrator;

          this._access_token = response.access_token;
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
  }

  async logout() {
    return fetch(`${this.url}/api/administrator/authenticate`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-type": "API-Key",
      },
    })
      .then((response) => {
        // Check status code
        if (response.status === 200) {
          this._logged_in = false;
          return true;
        }

        throw new Error({
          message: response.json().message || "Issue with logout",
        });
      })
      .catch((error) => {
        return false;
      });
  }
}
