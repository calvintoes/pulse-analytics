export default function filterBy(data, searchTerm, keys) {
  // * Write function here

  let result = data.filter((obj) => {
    return Object.keys(obj).map((key) => {
      if (keys.includes(key)) {
        return (
          data[data.indexOf(obj)][key].toLowerCase().split(" ") ===
          searchTerm.toLowerCase()
        );
      }
      return false;
    });
  });

  return result;
}
