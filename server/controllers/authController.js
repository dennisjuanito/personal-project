const axios = require('axios');

module.exports = async (req, res) => {
    let {  REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET} = process.env;
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
  


  console.log(resWithUserData);
  // req.session.user = resWithUserData.data
};
