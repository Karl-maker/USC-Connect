import user from "../users/user"


export default class student extends user{
    constructor(){
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

async GetUserInfo(id){}

async Login(email, password){}

}