import user from "../users/user"

export default class admin extends user{
    constructor(){
        this.phone_num;
    }

//Getters and Setters

get phone_num(){
    return this._phone_num;
}

set phone_num(phone_num){
    this._phone_num = phone_num
}

//Methods
async GetUserInfo(id){}

async Login(id, password){}


}