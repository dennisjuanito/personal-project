UPDATE USERS
set avatar=$1, firstName=$2, lastName=$3, age=$4, location=$5, bootcampName=$6, totalLikes=$7, totalEventCreated=$8, numberOfPosts=$9, aLittleAboutMyself=$10, learningOrTrying=$11, favoriteLanguages=$12, skillsOrLanguages=$13, projectsAndHacks=$14, roles=$15
where authId = $16
returning *;