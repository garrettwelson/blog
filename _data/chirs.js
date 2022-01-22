module.exports = function () {
  const total = 75;
  const finished = 12;
  var percent = (finished * 100) / total;
  const progress = parseFloat(percent).toFixed(0);
  const styleString = `width:${progress}%`;
  return { total, finished, progress, styleString };
};
