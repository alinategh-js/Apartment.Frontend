// ==== for fake data and API calls ====
const fakeDatas = [
  {
    id: 1,
    name: "ali",
    phone: "156156",
    unitId: 2,
    isOwner: false,
  },
  {
    id: 2,
    name: "farhad",
    phone: "454649",
    unitId: 1,
    isOwner: false,
  },
  {
    id: 3,
    name: "sahar",
    phone: "64346",
    unitId: 4,
    isOwner: true,
  },
  {
    id: 4,
    name: "zahra",
    phone: "14694",
    unitId: 5,
    isOwner: false,
  },
  {
    id: 5,
    name: "azin",
    phone: "189797",
    unitId: 6,
    isOwner: true,
  },
  {
    id: 6,
    name: "nazi",
    phone: "4894563",
    unitId: 7,
    isOwner: false,
  },
];

// api 
export const getPeople = (isOwner = null) => fakeDatas;