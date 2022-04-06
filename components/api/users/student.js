import axios from "axios";
import User from "../users/user";
const BACKEND_URL = process.env.BACKEND_URL;

export default class Student extends User {
  constructor() {
    super(BACKEND_URL, null, {});
    this.campus_name;
    this.department_id;
    this.student_id;
  }

  //Getters

  get student_id() {
    return this._student_id;
  }

  get campus_name() {
    return this._campus_name;
  }
  get department_id() {
    return this._department_id;
  }

  set student_id(student_id) {
    this._student_id = student_id;
  }

  set campus_name(campus_name) {
    this._campus_name = campus_name;
  }

  set department_id(department_id) {
    this._department_id = department_id;
  }

  //Methods

  async getCurrentInfo(id) {
    const result = await axios.get(`${this.url}/api/student`);
    this.first_name = result.data[0].first_name;
    this.last_name = result.data[0].last_name;
    this.email = result.data[0].email;
    this.is_Confirmed = result.data[0].is_Confirmed;
    this.campus_name = result.data[0].campus_name;
    this.department_id = result.data[0].department_id;

    return result.data[0];
  }

  async login(email, password) {
    try {
      const result = await axios.post(`${this.Url}/api/student/login`, {
        email,
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

  async authenticate() {
    /*
     * Credentials need to be included to get the refresh token as a cookie
     */

    fetch(`${this.url}/api/student/authenticate`, {
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

  async register(email, password, first_name, last_name, id, campus_name) {
    const result = await axios.post(`${this.url}/api/student/register`, {
      email,
      password,
      first_name,
      last_name,
      id,
      campus_name,
    });
    if (result.status === 200) {
      return true;
    } else return false;
  }
}
