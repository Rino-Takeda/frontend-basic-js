const firstIndex = (array) => array[0];

const countArrayLength = (array) => {
  if (!Array.isArray(array)) {
    return "これは配列ではありません";
  }
  if (array.length) {
    return `この配列は${array.length}個のデータを持っています`;
  } else {
    return "この配列は空配列です";
  }
};

const extractArray = (array) => array.slice(1,3);

const makeMark = (mark, number) => {
  let array = [];
  for (let i = 1; i<= number; i++){
    array.push(mark);
  }
  return array;
};

const onlyString = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      result.push(array[i]);
    }
  }
  return result;
};

const addNumber = (values) => {
  const newArray = values.map((value, index) => {
    return `${index+1}: ${value}`;
  });
  return newArray;
};

module.exports = {
  firstIndex,
  countArrayLength,
  extractArray,
  makeMark,
  onlyString,
  addNumber,
};
