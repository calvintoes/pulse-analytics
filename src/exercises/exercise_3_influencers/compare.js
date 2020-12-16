const sortOrder = {
  high: 3,
  medium: 2,
  low: 1,
};

export const compare = (a, b) => {
  const first =
    a.priority.toLowerCase() in sortOrder
      ? sortOrder[a.priority.toLowerCase()]
      : Number.MAX_SAFE_INTEGER;
  const second =
    b.priority.toLowerCase() in sortOrder
      ? sortOrder[b.priority.toLowerCase()]
      : Number.MAX_SAFE_INTEGER;
  if (first === second) {
    return 0;
  } else if (first < second) {
    return 1;
  } else {
    return -1;
  }
};
