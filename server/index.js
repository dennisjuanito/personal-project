require("dotenv").config();
const express = require("express"),
  bodyParser = require("body-parser"),
  session = require("express-session"),
  massive = require("massive"),
  authController = require("./controllers/authController.js"),
  logoutController = require("./controllers/logoutController.js"),
  checkSessionController = require("./controllers/checkSessionController.js"),
  registerController = require("./controllers/registerController.js");
  sessionChecker = require("./middleware/sessionChecker.js");

let { SERVER_PORT, CONNECTING_STRING, SECRET } = process.env;
const app = express();

// top level middleware
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SECRET
  })
);

// app.use(sessionChecker);
// ###################################################################################################################################################################
//                                                          my current end points
// ###################################################################################################################################################################
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% login and register %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
app.get(`/auth/callback`, authController);
app.get(`/api/logout`, logoutController);
app.get(`/api/check-session`, checkSessionController);
app.post(`/api/register`, registerController);




app.post(`/api/auth/login`);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Public post and events %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
app.get(`/api/posts/:postid:`); // get a post
app.get(`/api/events/:eventid`); // get a event
app.get(`/api/publishes`); // get all post and events
app.put(`/api/posts/:postid`); // edit a post
app.put(`/api/events/:event:id`); // edit a event
app.delete(`/api/posts/:postid`); // delete a post
app.delete(`/api/events/:eventid`); // delete a event
app.post(`/api/events`); // add a new event
app.post(`/api/posts`); //  add a new post

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% My posts and events %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// more to go in the future

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% The user followers and following %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
app.get(`/api/myfollowers/:userid`); // get all users who are followers of this user
app.get(`/api/myfollowing/:userid`); // get all users who are following this user
app.post(`/api/myfollowers/:userid/:followingid`); // add a new follower -- the user want to follow another user
app.delete(`/api/myfollowers/:userid/:followingid`); // delete a follower -- the user want to delete one of his / her following users
// Maybe total followers and following too

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% account settings %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// account settings vs login and register??
app.put(`/api/settings/:userid`); // update the user account. This typically done in the account settings tab

// My server is listening and database is set

massive(CONNECTING_STRING).then(connection => {
  app.set("db", connection);
});

app.get("*", (req, res, next) => {
  res.sendFile(path.join(`${__dirname}/../build/index.html`));
});

app.listen(SERVER_PORT, () => {
  console.log(`Your personal project is running on server${SERVER_PORT}`);
});

// ###################################################################################################################################################################
//                                                          all of my future end points
// ###################################################################################################################################################################
// Public post and events (Future)
// app.get(`/api/publishes/reply`); // get all reply post and events
// app.post(`/api/posts/save`); // save a post
// app.post(`/api/events/save`); // save a event

// // My posts and events (future)
// app.get(`/api/mypublishes/:userid`); // get all of my posts and events
// app.get(`/api/myposts/:userid`); // get all of my posts
// app.get(`/api/myevents/:userid`); // get all of my events
// app.get(`/api/mysaveposts/:userid`); // get all of my save posts
// app.get(`/api/mysaveevents/:userid`); // get all of my save events

// How about status???

// the status is calculated based on the #followers + #likesreceived + #totalpublishesmade
// the status can be calculated within react front end ?? The answer is yes
