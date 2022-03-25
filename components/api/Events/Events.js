import Connect from "../Connect"
import axios from "axios";

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
async CreateEvent(event_id, name, date, location, description, campus_name, admin_id){
    try{
     const result = await axios.post(`${this.url}/api/createEvent`,{
         event_id,
         name,
         date,
         location,
         description,
         campus_name,
         admin_id,
     });
     if (result.status === 200){
        return true;
    }
   else return false;
    }
        catch(err){
            console.log(err);
        }
}

async DeleteEvent(event_id){
    try{
        result = await axios.delete(`${this.url}/api/delete?id=${event_id}`)
    }catch (err) {
        console.log(err);
      }
}

async UpdateEvent(event_id, update_info){
    try{
      update = await axios.put(`${this.url}/api/update?id=${event_id}`,{
          update_info
      })
    }catch (err) {
        console.log(err);
      }
}

async GetAllEvents(page_number, page_size, campus_name){
    try {
        const events = await axios.get(`${this.url}/api/events?page_number=${page_number}&page_size=${page_size}&campus_name=${campus_name}`)
        
  
        console.log(events);
  
      } catch (err) {
        console.log(err);
      }
}

async GetEventByID(event_id){
    try {
        const event = await axios.get(`${this.url}/api/event/${event_id}`);
        console.log(event);
      } catch (err) {
        console.log(err);
      }
    }
}
