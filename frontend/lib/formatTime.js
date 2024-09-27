export const formatTime = (time) => {
  const newTime = time.slice(0, 5);
  return newTime;
};

export const concatTime = (time) => {
  const newTime = time.concat(":00");
  return newTime;
};
