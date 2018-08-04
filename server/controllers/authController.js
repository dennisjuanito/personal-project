const axios = require("axios");

module.exports = async (req, res) => {
  let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET } = process.env;
  let payload = {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code,
    grant_type: "authorization_code",
    redirect_uri: `http://${req.headers.host}/auth/callback`
  };

  var resWithToken = await axios.post(
    `https://${REACT_APP_DOMAIN}/oauth/token`,
    payload
  );

  var resWithUserData = await axios.get(
    `https://${REACT_APP_DOMAIN}/oauth/userinfo?access_token=${
      resWithToken.data.access_token
    }`
  );

  const dbInstance = req.app.get("db");
  let { email, sub, picture } = resWithUserData.data;

  let isUserExists = await dbInstance.isUserExists([sub]);

  if (isUserExists[0]) {
    req.session.user = isUserExists[0];
    // res.redirect("http://localhost:3000/#/home");
    res.redirect("/home");
  } else { // the user does not exists
    dbInstance.createNewUser([email, sub, picture]).then(responseUser => {
      req.session.user = responseUser[0]
      // res.redirect("http://localhost:3000/#/register");
      res.redirect("/register");
    }).catch(err => res.status(404).send(err));
    console.log(err);
  }

  console.log(resWithUserData);
  // req.session.user = resWithUserData.data
};