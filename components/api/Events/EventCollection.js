import axios from "axios";
import Connect from "../Connect"
import Events from "./Events";

export default class EventCollection extends Connect{
    constructor(url, access_token, {}){
        super(url, access_token);
    }

//Methods

    async GetPosts(page_number, page_size, campus_name){
     const result = await axios.get(`${this.url}/api/events?page_number=${page_number}&page_size=${page_size}&campus_name=${campus_name}`);

     post_list = [];

     for(i = 0;i < result.data[0].length; i++ ){
         new Events(this.url, this.access_token,{ data: result.data[0].data[i]})
     
        }
        return {post_data: result.data[0].data, list_data: post_list};
    }



}