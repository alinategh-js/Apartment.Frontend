import axios from 'axios';

// api
export const getItemList = () => [
  {
    id: 1,
    isOwner: 1,
    name: "Owner",
  },
  {
    id: 2,
    isOwner: 0,
    name: "Resident",
  },
]

const url = "http://193.151.128.227:5555/api/people"
const options = {
    headers: {'Content-Type': 'application/json'}
};

export const getPeopleByPage = (page= 1 , size= 5, isOwner= 2) => axios.get(
    url,
    {
    params: {
        page: page,
        size: size,
        isOwner: isOwner
    }
})

export const getAllPeople = () => axios.get(`${url}/all`, {}, options);

export const postPerson = (person) => axios.post(url, person, options)
