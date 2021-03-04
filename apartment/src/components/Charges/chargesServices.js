import axios from "axios";

const perunitchargeList = [
  {
    id: 2,
    name: "Unit 1",
  },
  {
    id: 3,
    name: "Unit 2",
  },
];

const url = "http://193.151.128.227:5555/api/charges"
const options = {
    headers: {'Content-Type': 'application/json'}
};

export const getPerUnitChargeList = () => perunitchargeList;

export const getAllCharges = () => axios.get(url, options);

export const postChargeCalculation = (chargeCalculationDate) => axios.post(url, chargeCalculationDate, options);