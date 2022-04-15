import Connect from "../Connect";
import environment from "../../../next.config";

export default class Events extends Connect {
  constructor({
    _id,
    name,
    description,
    date,
    location,
    campus_name,
    created_by,
    image,
    resource,
  }) {
    super(environment.env.BACKEND_URL, "");

    this._id = _id || "";
    this.name = name || "";
    this.date = date || "";
    this.location = location || "";
    this.description = description || "";
    this.campus_name = campus_name || "";
    this.created_by = created_by || "";
    this.image = image || "";
    this.resource = resource || "";
  }

  //Getters and Setters

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get date() {
    return this._date;
  }

  get location() {
    return this._location;
  }

  get resource() {
    return this._resource;
  }

  get description() {
    return this._description;
  }

  get campus_name() {
    return this._campus_name;
  }

  get created_by() {
    return this._created_by;
  }

  get image() {
    return this._image;
  }

  set event_id(event_id) {
    this._event_id = event_id;
  }

  set name(name) {
    this._name = name;
  }

  set resource(resource) {
    this._resource = resource;
  }

  set date(date) {
    this._date = date;
  }

  set location(location) {
    this._location = location;
  }

  set description(description) {
    this._description = description;
  }

  set campus_name(campus_name) {
    this._campus_name = campus_name;
  }

  set image(image) {
    this._image = image;
  }

  set created_by(created_by) {
    this._created_by = created_by;
  }

  async delete(access_token) {
    return fetch(`${this.url}/api/event/${this._id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => {
        // Check status code
        if (response.status === 200) {
          return response.json();
        }

        throw new Error({
          message: response.json().message || "Issue deleting event",
        });
      })
      .then((response) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  }

  async save(access_token) {
    // Returns true of false if save of event was successful

    return fetch(`${this.url}/api/event`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        name: this.name,
        description: this.description,
        campus_name: this.campus_name,
        location: this.location,
        date: this.date,
      }),
    })
      .then((response) => {
        // Check status code
        if (response.status === 200) {
          return response.json();
        }

        throw new Error({
          message: response.json().message || "Issue saving event",
        });
      })
      .then((response) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  }
}
