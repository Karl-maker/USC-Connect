import axios from "axios";
/* 


*/
export default class Connect {
  constructor(url, access_token) {
    this.url = url;
    this.access_token = access_token;
  }
  //Getters
  get Url() {
    return this._url;
  }

  get access_token() {
    return this._access_token;
  }

  //Setters
  set access_token(access_token) {
    this._access_token = access_token;
  }

  set Url(url) {
    this._url = url;
  }

  //Methods
  async GetGeneral(url, body, config) {
    const result = await axios.get(`${this.url}${url}`, body, {
      headers: { Authorization: `Bearer ${this.access_token}` },
      ...config,
    });
  }
}
