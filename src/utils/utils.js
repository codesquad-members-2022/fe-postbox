const range = (from, to) => {
  const diff = Math.abs(to - from);
  return (Math.random() * diff + from) >> 0;
  // from ~ to-1
};

module.exports = { range };
