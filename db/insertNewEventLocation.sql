INSERT INTO EventLocation
    (eventAddress, lat, lng, publishId)
values($1, $2, $3, $4)
returning *;