module.exports = function () {
  const total = 56;
  const finished = 11;
  var percent = (finished * 100) / total;
  const progress = parseFloat(percent).toFixed(0);
  const styleString = `width:${progress}%`;
  return { total, finished, progress, styleString };
};
