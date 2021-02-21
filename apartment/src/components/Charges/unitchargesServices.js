// ==== for fake data and API calls ====
const fakeUnitCharge = [
  {
    id: 1,
    itemAs: "gas",
    payer: "Ahmadi",
    amount: 67000,
    calculatesType: "bypeaple",
  },
  {
    id: 2,
    itemAs: "water",
    payer: "rezaii",
    amount: 50000,
    calculatesType: "byArea",
  },
  {
    id: 3,
    itemAs: "cleaning",
    payer: "rezaii",
    amount: 20000,
    calculatesType: "fix",
  },
];



const fakeUnitData = [
  {
    
    unitNumber: "2",
    owner: "Ahmadi",
    resident: "Asadi",
    area: 87,
    from: 2001/2/30,
    to: 2001/3/30,
  },
  
];

export const getUnitData = () => fakeUnitData;

export const getData = () => fakeUnitCharge;

