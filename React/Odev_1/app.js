import axios from "axios";

export default async function getData(id) {
    let user = (await axios(`https://jsonplaceholder.typicode.com/users/${id}`))["data"];
    user["posts"] = (await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`))["data"];
    return user;
}
