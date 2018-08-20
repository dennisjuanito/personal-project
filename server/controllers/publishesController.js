const _ = require("lodash");

const toCamelCase = publishes => {
  return _.map(publishes, publish => {
    let {
      userid,
      authid,
      avatar,
      firstname,
      lastname,
      age,
      status,
      location,
      bootcampname,
      totallikes,
      totaleventcreated,
      numberofposts,
      alittleaboutmyself,
      learningortrying,
      favoritelanguages,
      skillsorlanguages,
      projectsandhacks,
      roles,
      publishid,
      type,
      publishdate,
      publishphoto,
      publishrelativetimefromnow,
      posttitle,
      postcontents,
      eventname,
      eventdate,
      eventstarttime,
      eventdescription
    } = publish;

    let camelCasePublish = {
      userId: userid,
      authId: authid,
      avatar,
      firstName: firstname,
      lastName: lastname,
      age,
      status,
      location,
      bootcampName: bootcampname,
      totalLikes: totallikes,
      totalEventCreated: totaleventcreated,
      numberOfPosts: numberofposts,
      aLittleAboutMyself: alittleaboutmyself,
      learningOrTrying: learningortrying,
      favoriteLanguages: favoritelanguages,
      skillsOrLanguages: skillsorlanguages,
      projectsAndHacks: projectsandhacks,
      roles,
      publishId: publishid,
      type,
      publishDate: publishdate,
      publishPhoto: publishphoto,
      publishRelativeTimeFromNow: publishrelativetimefromnow,
      postTitle: posttitle,
      postContents: postcontents,
      eventName: eventname,
      eventDate: eventdate,
      eventStartTime: eventstarttime,
      eventDescription: eventdescription
    };
    return camelCasePublish;
  });
};

module.exports = {
  makePost: (req, res) => {
    let dbInstance = req.app.get("db");
    let {
      type,
      publishDate,
      postTitle,
      publishPhoto,
      postContents,
      id
    } = req.body;
    dbInstance
      .makePost([type, publishDate, postTitle, publishPhoto, postContents, id])
      .then(response => {
        console.log(response);
        res.status(202).send(response);
      })
      .catch(err => res.status(404).send(err));
  },
  createEvent: (req, res) => {
    let {
      id,
      type,
      publishDate,
      publishPhoto,
      eventName,
      eventDate,
      eventStartTime,
      eventDescription
    } = req.body;
    let dbInstance = req.app.get("db");
    dbInstance
      .createEvent([
        type,
        publishDate,
        publishPhoto,
        eventName,
        eventDate,
        eventStartTime,
        eventDescription,
        id
      ])
      .then(response => {
        res.status(202).send(response[0]);
      })
      .catch(err => res.status(404).send(err));
  },
  insertNewEventLocation: (req, res) => {
    let { eventAddress, lat, lng, publishId } = req.body;
    let dbInstance = req.app.get("db");
    dbInstance
      .insertNewEventLocation([eventAddress, lat, lng, publishId])
      .then(response => res.status(202).send(response[0]))
      .catch(err => res.status(404).send(err));
  },
  getAllPublishes: (req, res) => {
    let dbInstance = req.app.get("db");
    dbInstance
      .getAllPublishes()
      .then(response => {
        res.status(202).send(toCamelCase(response));
      })
      .catch(err => res.status(404).send(err));
  }
};
