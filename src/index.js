module.exports = function towelSort(matrix) {
  if (typeof matrix === 'undefined' || matrix.length === 0) return [];
  let result = [];
  matrix.forEach((element, index) => {
    if (index % 2 === 0) {
      result = result.concat(element);
    } else {
      result = result.concat(element.reverse());
    }
  });

  return result;
};
