create table Users(
    id serial primary key not null,
    email varchar(100) not null,
    auth_id text not null,
    avatar text not null,
    firstname varchar(100),
    lastname varchar(100),
    age integer,
    status varchar(100),
    location varchar(100),
    bootcamp varchar(100),
    total_likes integer,
    total_event_created integer,
    number_of_posts integer,
    a_little_about_myself text,
    learning_or_trying varchar(200),
    favorite_languages varchar(200),
    skills_or_languages varchar(200),
    projects_and_hacks varchar(200),
    roles varchar(100)
)

