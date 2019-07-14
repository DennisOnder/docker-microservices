module.exports = data =>
  data === "" ||
  data === [] ||
  data === {} ||
  data === null ||
  data === undefined
    ? true
    : false;
