create table Users
(
    id serial primary key not null,
    email varchar(100) not null,
    authId text not null,
    avatar text not null,
    firstName varchar(100),
    lastName varchar(100),
    age integer,
    status varchar(100),
    location varchar(100),
    bootcampName varchar(100),
    totalLikes integer,
    totalEventCreated integer,
    numberOfPosts integer,
    aLittleAboutMyself text,
    learningOrTrying varchar(200),
    favoriteLanguages varchar(200),
    skillsOrLanguages varchar(200),
    projectsAndHacks varchar(200),
    roles varchar(100)
)

create table Publishes
(
    id serial primary key not null,
    userId integer references users(id) not null,
    type varchar(100) not null,
    publishDate text not null,
    publishPhoto text,
    publishRelativeTimeFromNow text,
    postTitle text,
    postContents text,
    eventName varchar(200),
    -- eventLocation integer references EventLocation(id),
    eventDate varchar(700),
    eventStartTime varchar(200),
    eventDescription text
)

create table EventLocation (
    id serial primary key not null,
    eventAddress text not null,
    lat integer not null,
    lng integer not null,
    publishId integer REFERENCES Publishes(id) not null
)

-- create table Users(
--     id serial primary key not null,
--     email varchar(100) not null,
--     auth_id text not null,
--     avatar text not null,
--     firstname varchar(100),
--     lastname varchar(100),
--     age integer,
--     status varchar(100),
--     location varchar(100),
--     bootcamp varchar(100),
--     total_likes integer,
--     total_event_created integer,
--     number_of_posts integer,
--     a_little_about_myself text,
--     learning_or_trying varchar(200),
--     favorite_languages varchar(200),
--     skills_or_languages varchar(200),
--     projects_and_hacks varchar(200),
--     roles varchar(100)
-- )