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

export const getData = () => fakeUnitCharge;
