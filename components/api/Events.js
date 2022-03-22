import Connect from "../Connect"

export default class Events extends Connect{
    constructor(url, access_token, {}){
        super(url, access_token);

        this.event_id;
        this.name;
        this.date;
        this.location;
        this.description;
        this.campus_name;
        this.admin_id;
    }

//Getters and Setters

get event_id(){
  return this._event_id;
}

get name(){
    return this._name;
}

get date(){
    return this._date;
}

get location(){
    return this._location;
}

get description(){
    return this._description;
}

get campus_name(){
    return this._campus_name;
}

get admin_id(){
    return this._admin_id;
}

set event_id(event_id){
    this._event_id = event_id;
}

set name(name){
    this._name = name;
}

set date(date){
    this._date = date;
}

set location(location){
    this._location = location;
}

set description(description){
    this._description = description;
}

set campus_name(campus_name){
    this._campus_name = campus_name;
}

set admin_id(admin_id){
    this._admin_id = admin_id;
}

//Methods
async CreateEvent(){

}

async DeleteEvent(){}

async UpdateEvent(){}

async GetAllEvents(){}

async GetEventByID(){}
}