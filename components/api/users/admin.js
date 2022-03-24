import axios from "axios";
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
async GetUserInfo(id){
 const result = await axios.get(`${this.Url}/api/user${id || this.id} `);
 this.first_name = result.data[0].first_name;
 this.last_name = result.data[0].last_name;
 this.email = result.data[0].email;
 this.IsAdmin = result.data[0].IsAdmin;
 this.phone_num = result.data[0].phone_num;

 return result.data[0];
}

async Login(id, password){
    try {
const result = await axios.post (`${this.url}/api/login`,{
    id,
    password
});

if (result === 200){
     //access token to be added
    await this.GetCurrentUser(id);

    this.IsLoggedIn = true;

    return result;
}
    }catch(err){
console.log(err);
return err;
    }
}


}