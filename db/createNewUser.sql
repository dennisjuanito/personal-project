insert into users(email, auth_id, avatar) values($1, $2, $3) returning *; 