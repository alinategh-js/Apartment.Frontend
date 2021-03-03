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

const url = "http://193.151.128.227:5555/api/person"
const options = {
    headers: {'Content-Type': 'application/json'}
};

export const getPeopleByPage = (page= 1 , size= 5, isOwner= 1) => axios.get(
    url,
    {
    params: {
        page,
        size,
        isOwner
    }
})

export const getAllPeople = () => axios.put(url, {}, options);

export const postPerson = (person) => axios.post(url, person, options)
