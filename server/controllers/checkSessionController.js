module.exports = (req, res) => {
  if (!req.session.user) {
    res.status(404).send(`You does not have a permission to access this site!`);
  } else {
    res.status(202).send(req.session.user);
  }
};
