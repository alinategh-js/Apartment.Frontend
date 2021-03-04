import axios from "axios"
import { getAllPeople } from '../People/peopleServices'

const url = "http://193.151.128.227:5555/api/units"
const options = {
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    }
};

export const getUnit = (page , size) => axios.get(
    url,
    {
    params: {
        page,
        size
    }
})

export const postUnit = (unit) => axios.post(url, unit, options)

export const updateUnit = (unitId, unitOwnerResident) => axios.put(`${url}/${unitId}`, unitOwnerResident, options)