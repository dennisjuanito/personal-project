INSERT INTO PUBLISHES
    (type,
    publishdate,
    posttitle,
    publishphoto,
    postcontents,
    userid)
VALUES($1, $2, $3, $4, $5, $6)
returning *;