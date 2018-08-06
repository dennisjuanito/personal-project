module.exports = (req, res) => {
  let dbInstance = req.app.get("db");
  let {
    avatar,
    firstName,
    lastName,
    age,
    location,
    bootcampName,
    aLittleAboutMyself,
    learningOrTrying,
    favoriteLanguages,
    skillsOrLanguages,
    projectsAndHacks,
    roles
  } = req.body;
  age = +age;
  console.log(req.session.user);
  // note I choose copyOfAuthId, because authId for some reason does not work
  let copyOfAuthId = req.session.user.authid;

  
  if (roles === "Mentor") {
    dbInstance
      .registerNewUser([
        avatar,
        firstName,
        lastName,
        age,
        location,
        bootcampName,
        0,
        0,
        0,
        aLittleAboutMyself,
        null,
        null,
        skillsOrLanguages,
        projectsAndHacks,
        roles,
        copyOfAuthId
      ])
      .then(response => {
        res.status(202).send(response[0]);
      })
      .catch(err => res.status(404).send(err));
  } else if (roles === "Student") {
    dbInstance
      .registerNewUser([
        avatar,
        firstName,
        lastName,
        age,
        location,
        bootcampName,
        0,
        0,
        0,
        aLittleAboutMyself,
        learningOrTrying,
        favoriteLanguages,
        null,
        null,
        roles,
        copyOfAuthId
      ])
      .then(response => {
        res.status(202).send(response[0]);
      })
      .catch(err => res.status(404).send(err));
  }
};
