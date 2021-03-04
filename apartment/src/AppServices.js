import axios from "axios";

const url = "http://193.151.128.227:5555/api/building"

export const getBuilding = () => axios.get(url);