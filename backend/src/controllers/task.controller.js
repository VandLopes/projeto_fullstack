const getAll = (req, res) => {
  return res.status(200).json({ Message: "Está tudo ok" });
};

module.exports = {
  getAll,
};
