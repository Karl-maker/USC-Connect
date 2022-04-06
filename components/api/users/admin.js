import axios from "axios";
import User from "../users/user";
const BACKEND_URL = process.env.BACKEND_URL;

export default class Admin extends User {
  constructor() {
    super(BACKEND_URL, null, {});
  }

  //Getters and Setters

  async authenticate() {
    /*
     * Credentials need to be included to get the refresh token as a cookie
     */

    fetch(`${this.url}/api/administrator/authenticate`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "API-Key",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // get access_token and place in code
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  //Methods
  async GetUserInfo(id) {
    const result = await axios.get(`${this.Url}/api/user${id || this.id} `);
    this.first_name = result.data[0].first_name;
    this.last_name = result.data[0].last_name;
    this.email = result.data[0].email;
    this.IsAdmin = result.data[0].IsAdmin;
    this.phone_num = result.data[0].phone_num;

    return result.data[0];
  }

  async Login(id, password) {
    try {
      const result = await axios.post(`${this.url}/api/login`, {
        id,
        password,
      });

      if (result === 200) {
        //access token to be added
        await this.GetCurrentUser(id);

        this.IsLoggedIn = true;

        return result;
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
