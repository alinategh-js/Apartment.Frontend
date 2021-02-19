// ==== for fake data and API calls ====
const fakeCharges = [
  {
    id: 1,
    unitNumber: 2,
    from: "98.2.1",
    to: "98.2.1",
    amount: 250000,
  },
  {
    id: 3,
    unitNumber: 2,
    from: "98.2.1",
    to: "98.2.1",
    amount: 250000,
  },
  {
    id: 2,
    unitNumber: 1,
    from: "98.2.1",
    to: "98.2.1",
    amount: 300000,
  },
  {
    id: 4,
    unitNumber: 3,
    from: "98.2.1",
    to: "98.2.1",
    amount: 250000,
  },
];
const unitList = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Unit Number 1",
  },
  {
    id: 3,
    name: "Unit Number 2",
  },
];

export const getUnitList = () => fakeCharges;

export const getData = () => fakeCharges;
