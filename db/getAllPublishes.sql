select users.id as userid, users.email, users.authid, users.avatar, users.firstname, users.lastname, users.age, users.status, users.location, users.bootcampname, users.totallikes, users.totaleventcreated, users.numberofposts, users.alittleaboutmyself, users.learningortrying, users.favoritelanguages, users.skillsorlanguages, users.projectsandhacks, users.roles, publishes.id as publishid, publishes.type, publishes.publishdate, publishes.publishphoto, publishrelativetimefromnow, publishes.posttitle, publishes.postcontents, publishes.eventname, publishes.eventdate, publishes.eventstarttime, publishes.eventdescription
from users join publishes on users.id = publishes.userid;








