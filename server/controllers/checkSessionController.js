module.exports = (req, res) => {
  if (!req.session.user) {
    res.status(404).send(`You does not have a permission to access this site!`);
  } else {
    let {authid, avatar, id, email} = req.session.user;
    let userReactFormat = {
      authId: authid,
      avatar: avatar,
      id: id,
      email: email
    }
    res.status(202).send(userReactFormat);
  }
};
