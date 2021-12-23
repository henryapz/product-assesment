function validateTime(time) {
  return time >= 10 ? time : `0${time}`;
}

function getTimeFormat(time) {
  const minutes = Math.round(Math.floor(time / 60));
  const seconds = time - minutes * 60;
  return `${validateTime(minutes)}:${validateTime(seconds)}`;
}

export default getTimeFormat;
