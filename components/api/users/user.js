import axios from "axios";
import Connect from "../Connect"

export default class user extends Connect{
    constructor(url, access_token, {}){
        super(url, access_token);

        this.id;
        this.first_name;
        this.last_name;
        this.email;
        this.IsLoggedIn = false;
        this.IsAdmin = false;
       
    }

//Getters
get id(){
    return this._id;
}

get first_name(){
    return this._first_name;
}

get last_name(){
    return this._last_name;
}

get email(){
    return this._email;
}

get IsLoggedIn(){
    return this._IsLoggedIn;
}

get IsAdmin(){
    this._IsAdmin;
}

set IsLoggedIn(IsLoggedIn){
    this._IsLoggedIn = this.IsLoggedIn;
}

set IsAdmin(IsAdmin){
    this._IsAdmin = this.IsAdmin;
}

//Methods
async GetCurrentUser(){
    const result = await axios.get(`${this.url}/api/user`, 
    {headers: {Authorization: `Bearer ${this.access_token}`},});

    if (result.status === 200){
        this.id = result.data[0].id;
        this.first_name = result.data[0].first_name;
        this.last_name = result.data[0].last_name;
        return true;
    }
    return false;
}




}
