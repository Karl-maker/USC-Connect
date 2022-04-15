import User from "./User";
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
      .then((response) => {
        // Check status code
        if (response.status === 200) {
          return response.json();
        }

        throw new Error({
          message:
            response.json().message || "Issue with getting student information",
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
    return fetch(`${this.url}/api/student/login`, {
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
          const student = response.student;

          this._access_token = response.access_token;
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
      .then((response) => {
        // Check status code
        if (response.status === 200) {
          return response.json();
        }

        throw new Error({
          message: response.json().message || "Issue with authentication",
        });
      })
      .then((response) => {
        // get access_token and place in code

        this._access_token = response.access_token;
        return true;
      })
      .catch((err) => {
        return false;
      });
  }

  async logout() {
    return fetch(`${this.url}/api/student/authenticate`, {
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

  async register(email, password, first_name, last_name, id, campus_name) {}
}
