INSERT INTO PUBLISHES
    (type,
    publishDate,
    publishPhoto,
    eventName,
    eventDate,
    eventStartTime,
    eventDescription,
    userId
    )
VALUES($1, $2, $3, $4, $5, $6, $7, $8)
returning *;