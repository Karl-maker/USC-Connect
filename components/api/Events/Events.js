import Connect from "../Connect";
import axios from "axios";
import environment from "../../../next.config";

export default class Events extends Connect {
  constructor({
    _id,
    name,
    description,
    date,
    location,
    campus_name,
    admin_id,
  }) {
    super(environment.env.BACKEND_URL, "");

    this._id = _id;
    this.name = name;
    this.date = date;
    this.location = location;
    this.description = description;
    this.campus_name = campus_name;
    this.admin_id = admin_id;
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

  get description() {
    return this._description;
  }

  get campus_name() {
    return this._campus_name;
  }

  get admin_id() {
    return this._admin_id;
  }

  set event_id(event_id) {
    this._event_id = event_id;
  }

  set name(name) {
    this._name = name;
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

  set admin_id(admin_id) {
    this._admin_id = admin_id;
  }
}
