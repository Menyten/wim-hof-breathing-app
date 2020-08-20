const formatTimeLeft = (time) => {
  const minutes = Math.floor(time / 1000 / 60);
  let seconds = (time / 1000) % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};

export default formatTimeLeft;
