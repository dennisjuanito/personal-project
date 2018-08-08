module.exports = {
  makePost: (req, res) => {
    let dbInstance = req.app.get("db");
    let {
      type,
      publishDate,
      postTitle,
      postPhoto,
      postContents,
      id
    } = req.body;
    dbInstance
      .makePost([
        type,
        publishDate,
        postTitle,
        postPhoto,
        postContents,
        id
      ])
      .then(response => {
          console.log(response);
        res.status(202).send(response);
      })
      .catch(err => res.status(404).send(err));
  }
};
