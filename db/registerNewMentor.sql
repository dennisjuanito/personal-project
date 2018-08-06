INSERT INTO USERS
    (avatar, firstname, lastname, age, location, bootcamp, total_likes, total_event_created, number_of_posts, a_little_about_myself, learning_or_trying, favorite_languages, roles)
values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
returning *;