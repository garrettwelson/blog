module.exports = function () {
  const total = 57;
  const finished = 17
  var percent = (finished * 100) / total;
  const progress = parseFloat(percent).toFixed(0);
  const styleString = `width:${progress}%`;
  return { total, finished, progress, styleString };
};
