import axios from "axios";

const url = "http://193.151.128.227:5555/api/building"
const options = {
    headers: {'Content-Type': 'application/json'}
};

export const getBuilding = () => axios.get(url, options)

export const postBuilding = (building) => axios.post(url, building, options)