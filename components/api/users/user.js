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
        this.password;
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
async GetCurrentUser(){}

async register(){}



}
