create table Users(
    id serial primary key not null,
    email varchar(20) not null,
    auth_id text not null,
    avatar text not null,
    firstname varchar(40),
    lastname varchar(40),
    age integer,
    status varchar(40),
    location varchar(40),
    bootcamp varchar(40),
    total_likes integer,
    total_event_created integer,
    number_of_posts integer,
    a_little_about_myself text,
    learning_or_trying varchar(200),
    favorite_languages varchar(200),
    skills_or_languages varchar(200),
    projects_and_hacks varchar(200),
    roles varchar(40)
)

