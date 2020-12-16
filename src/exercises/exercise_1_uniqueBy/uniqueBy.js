export default function uniqueBy(data, key) {
  // * Write function here

  // map { key: occurences }
  const map = mapOccurences(data, key);

  // array of duplicate occurences
  const duplicates = data.filter((obj) => map[obj[key]]);
  const duplicatesByKeys = duplicates.map((obj) => obj[key]);

  const iterations = Object.values(map).filter((val) => val !== 0).length;

  // clone data array without the duplicates
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (!duplicatesByKeys.some((el) => el === data[i][key])) {
      result.push(data[i]);
    }
  }

  // insert acccording to last index of each duplicated items
  for (let i = 0; i < iterations; i++) {
    let curr = duplicatesByKeys[i];
    let lastIdx = duplicatesByKeys.lastIndexOf(curr);

    result.splice(data.indexOf(duplicates[i]), 0, duplicates[lastIdx]);
  }
  return result;
}

const mapOccurences = (arr, key) => {
  return arr.reduce((acc, obj) => {
    acc[obj[key]] = acc[obj[key]] + 1 || 0;
    return acc;
  }, {});
};
