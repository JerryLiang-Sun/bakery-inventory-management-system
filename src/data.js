export const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const initialInventory = [
  {
    id: 1,
    name: "Boston Cream",
    inventory: 10,
  },
  {
    id: 2,
    name: "Old Fashion Plain",
    inventory: 15,
  },
  {
    id: 3,
    name: "Double Chocolate",
    inventory: 10,
  },
  {
    id: 4,
    name: "Apple Fritter",
    inventory: 15,
  },
  {
    id: 5,
    name: "Chocolate Chip Muffin",
    inventory: 12,
  },
];

export const initialData = {
  weekNum: 2,
  Boston_Cream: {
    1: [
      0, 0, 0, 0, 1, 1, 3, 4, 7, 10, 12, 11, 14, 10, 11, 7, 5, 4, 5, 2, 0, 1, 0,
      1,
    ],
    2: [
      0, 0, 0, 0, 1, 1, 2, 4, 6, 11, 12, 13, 12, 10, 11, 7, 4, 4, 5, 3, 0, 1, 0,
      1,
    ],
    3: [
      0, 0, 1, 0, 0, 1, 2, 2, 7, 10, 10, 10, 14, 12, 9, 3, 3, 5, 4, 1, 2, 0, 1,
      1,
    ],
    4: [
      0, 0, 2, 1, 0, 0, 3, 4, 4, 9, 13, 12, 15, 15, 11, 8, 4, 4, 2, 0, 1, 0, 0,
      1,
    ],
    5: [
      1, 1, 2, 0, 0, 1, 4, 4, 6, 12, 15, 17, 16, 17, 14, 11, 8, 5, 4, 6, 3, 4,
      2, 1,
    ],
    6: [
      2, 1, 0, 0, 1, 3, 5, 9, 8, 15, 16, 19, 17, 17, 18, 13, 9, 8, 4, 4, 3, 3,
      2, 1,
    ],
    7: [
      3, 2, 0, 0, 0, 2, 4, 8, 8, 12, 14, 18, 18, 11, 12, 8, 10, 6, 6, 3, 1, 2,
      2, 1,
    ],
  },
  Old_Fashion_Plain: {
    1: [0, 0, 1, 0, 1, 0, 1, 4, 1, 7, 5, 7, 2, 4, 8, 6, 1, 0, 4, 4, 3, 2, 0, 1],
    2: [0, 3, 1, 0, 3, 0, 3, 2, 1, 2, 2, 5, 3, 8, 7, 4, 5, 2, 4, 3, 1, 1, 3, 0],
    3: [0, 1, 0, 2, 3, 2, 0, 6, 2, 3, 6, 4, 6, 6, 4, 2, 1, 3, 1, 1, 0, 0, 0, 1],
    4: [0, 0, 2, 0, 0, 3, 3, 4, 2, 5, 3, 5, 6, 6, 9, 5, 0, 0, 2, 3, 0, 2, 1, 1],
    5: [1, 3, 4, 0, 0, 4, 4, 3, 0, 6, 6, 6, 5, 7, 8, 3, 0, 0, 1, 1, 0, 1, 0, 3],
    6: [0, 0, 0, 0, 1, 0, 2, 3, 3, 4, 4, 6, 4, 5, 6, 3, 2, 2, 1, 2, 0, 0, 0, 0],
    7: [0, 3, 1, 0, 0, 2, 4, 2, 1, 2, 6, 8, 3, 7, 5, 5, 4, 0, 3, 1, 0, 0, 2, 1],
  },
  Double_Chocolate: {
    1: [
      0, 0, 0, 0, 0, 1, 1, 2, 3, 5, 8, 13, 15, 11, 8, 8, 6, 9, 3, 3, 4, 1, 2, 0,
    ],
    2: [
      0, 2, 0, 3, 0, 0, 2, 4, 4, 6, 10, 15, 13, 10, 9, 7, 4, 8, 4, 2, 3, 3, 1,
      0,
    ],
    3: [
      0, 1, 3, 0, 0, 0, 0, 0, 1, 6, 7, 11, 16, 9, 6, 9, 8, 8, 4, 4, 7, 2, 4, 1,
    ],
    4: [
      0, 0, 3, 2, 1, 2, 0, 4, 4, 8, 6, 12, 18, 12, 9, 9, 7, 6, 1, 4, 2, 2, 3, 3,
    ],
    5: [
      0, 0, 2, 0, 1, 0, 4, 1, 1, 3, 6, 14, 16, 8, 7, 7, 8, 10, 5, 4, 3, 0, 3, 3,
    ],
    6: [
      1, 2, 0, 3, 0, 2, 3, 8, 6, 14, 13, 21, 20, 18, 19, 10, 11, 9, 3, 3, 6, 1,
      1, 0,
    ],
    7: [
      1, 2, 1, 0, 3, 2, 6, 8, 9, 18, 19, 22, 16, 16, 17, 10, 7, 6, 5, 5, 4, 1,
      4, 0,
    ],
  },
  Apple_Fritter: {
    1: [
      0, 1, 2, 2, 1, 2, 2, 5, 2, 8, 3, 7, 12, 12, 12, 19, 9, 5, 8, 6, 1, 3, 0,
      1,
    ],
    2: [
      1, 1, 0, 1, 0, 0, 4, 3, 6, 6, 5, 13, 15, 16, 15, 17, 9, 5, 6, 2, 3, 5, 0,
      2,
    ],
    3: [
      0, 0, 0, 0, 0, 1, 2, 3, 4, 4, 5, 10, 12, 13, 11, 13, 10, 4, 3, 3, 2, 1, 0,
      0,
    ],
    4: [
      2, 0, 0, 2, 2, 2, 3, 1, 3, 2, 4, 8, 13, 14, 12, 14, 9, 1, 4, 4, 0, 0, 0,
      0,
    ],
    5: [
      1, 1, 2, 2, 1, 2, 3, 1, 5, 5, 4, 8, 14, 11, 12, 10, 13, 5, 5, 5, 3, 2, 2,
      1,
    ],
    6: [
      0, 0, 0, 0, 0, 1, 3, 4, 5, 5, 6, 10, 13, 14, 13, 16, 11, 6, 7, 4, 4, 2, 1,
      0,
    ],
    7: [
      0, 0, 1, 0, 0, 2, 6, 5, 3, 6, 8, 12, 12, 16, 11, 17, 12, 3, 6, 5, 5, 1, 0,
      0,
    ],
  },
  Chocolate_Chip_Muffin: {
    1: [
      2, 2, 1, 3, 2, 0, 5, 4, 7, 5, 3, 11, 11, 12, 9, 12, 9, 3, 1, 2, 3, 0, 0,
      1,
    ],
    2: [
      0, 0, 1, 0, 2, 3, 3, 5, 3, 5, 3, 13, 13, 11, 9, 12, 12, 1, 5, 4, 3, 2, 1,
      3,
    ],
    3: [
      0, 0, 0, 0, 3, 2, 2, 0, 2, 3, 6, 12, 16, 12, 5, 9, 7, 8, 4, 0, 3, 4, 1, 0,
    ],
    4: [
      1, 1, 2, 2, 1, 0, 2, 3, 5, 2, 11, 14, 17, 12, 7, 7, 4, 6, 4, 2, 1, 0, 4,
      0,
    ],
    5: [
      3, 0, 0, 1, 2, 2, 6, 7, 9, 17, 18, 20, 20, 18, 21, 10, 8, 5, 6, 5, 4, 2,
      4, 0,
    ],
    6: [
      4, 0, 0, 0, 0, 5, 4, 8, 5, 12, 13, 18, 18, 16, 19, 12, 7, 10, 3, 7, 4, 6,
      3, 4,
    ],
    7: [
      3, 2, 0, 0, 2, 2, 6, 8, 5, 17, 14, 16, 20, 16, 17, 11, 7, 7, 5, 6, 0, 2,
      3, 3,
    ],
  },
};

//2, 1, 0, 0, 1, 3, 5, 9, 8, 15, 16, 19, 17, 17, 18, 13, 9, 8, 4, 4, 3, 3, 2, 1
//0, 0, 0, 0, 0, 1, 1, 2, 3, 5, 8, 13, 15, 11, 8, 8, 6, 9, 3, 3, 4, 1, 2, 0
//0, 0, 0, 0, 0, 1, 2, 3, 4, 4, 5, 10, 12, 13, 11, 13, 10, 4, 3, 3, 2, 1, 0, 0
