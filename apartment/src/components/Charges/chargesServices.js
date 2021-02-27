// ==== for fake data and API calls ====
const fakeCharges = [
  {
    id: 1,
    unitNumber: 1,
    from: "2002/2/30",
    to: "2002/3/30",
    amount: 250000,
  },
  {
    id: 2,
    unitNumber: 2,
    from: "2002/2/30",
    to: "2002/3/30",
    amount: 250000,
  },
  {
    id: 3,
    unitNumber: 3,
    from: "2002/2/30",
    to: "2002/3/30",
    amount: 300000,
  },
  {
    id: 4,
    unitNumber: 4,
    from: "2002/2/30",
    to: "2002/3/30",
    amount: 250000,
  },
];


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

export const getPerUnitChargeList = () => perunitchargeList;

export const getChargeData = () => fakeCharges;
