import axios from "axios";
import user from "../users/user"


export default class student extends user{
    constructor(url, access_token){
        super(url, access_token)
        this.is_Confirmed = false;
        this.campus_name;
        this.department_id;
    }

//Getters
get is_Confirmed(){
    return this._is_Confirmed;
}

get campus_name(){
    return this._campus_name;
}
get department_id(){
    return this._department_id;
}

set is_Confirmed(is_Confirmed){
    this._is_Confirmed = is_Confirmed;
}

set campus_name(campus_name){
    this._campus_name = campus_name;
}

set department_id(department_id){
    this._department_id = department_id;
}

//Methods

async GetUserInfo(id){
   
        const result = await axios.get(`${this.url}/api/user${id || this.id} `);
        this.first_name = result.data[0].first_name;
        this.last_name = result.data[0].last_name;
        this.email = result.data[0].email;
        this.is_Confirmed = result.data[0].is_Confirmed;
        this.campus_name = result.data[0].campus_name;
        this.department_id = result.data[0].department_id;
     
       
        return result.data[0];
       
}

async Login(email, password){

    try {
        const result = await axios.post (`${this.Url}/api/login`,{
            email,
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

async register(email, password, first_name, last_name, id, campus_name){
    const result = await axios.post(`${this.url}/api/register`,{
        email,
        password,
        first_name,
        last_name,
        id,
        campus_name,
    } );
    if(result.status === 200){
        return true;
    }
  else  return false;
}


}