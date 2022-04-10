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

  async getCurrentUserInfo() {
    return fetch(`${this.url}/api/student`, {
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
    return fetch(`${this.url}/api/student/login`, {
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
        if (response.access_token) {
          const student = response.student;

          this._student_id = student.student_id;
          this._email = student.email;
          this._first_name = student.first_name;
          this._last_name = student.last_name;
          this._id = student._id;
          this._logged_in = true;

          return true;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async authenticate() {
    /*
     * Credentials need to be included to get the refresh token as a cookie
     */

    return fetch(`${this.url}/api/student/authenticate`, {
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

  async logout() {
    try {
      await axios.delete(`${this.url}/api/student/authenticate`, {
        withCredentials: true,
      });

      this._logged_in = false;

      return;
    } catch (err) {
      return;
    }
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
