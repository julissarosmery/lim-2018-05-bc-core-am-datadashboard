// window.computeUsersStats = (users, progress, courses) => {
//     const onlyStudents = dataUsers.filter(users=>(users.role==='student'))
//     let usersWithStats = onlyStudents.map(firstUser => {
//       return computeUsersStats(firstUser, progress[firstUser.id], courses);
//     }); 
//     return usersWithStats;
//     // console.log(computeUsersStats);
// }

// window.sortUsers = (users, orderBy, orderDirection) => {
//     // To order names alphabeticly
//     if (orderBy == "Name") {
//       return users.sort((a, b) => {
//         if (orderDirection == "ASC") {
//           //
//           return a.name.localeCompare(b.name); // Local compare method is used to compare 2 different strings 
//         } else {
//           //
//           return a.name.localeCompare(b.name) * -1;
//         }
//       });
//     }
//     if (orderBy == "Percent") {
//       return users.sort((a, b) => {
//         if (orderDirection == "ASC") {
//           return a.stats.percent - b.stats.percent;
//         } else {
//           return (a.stats.percent - b.stats.percent) * -1;
//         }
//       });
  
//     }
//     if (orderBy == "ExcercisePercent") {
//       return users.sort((a, b) => {
//         if (orderDirection == "ASC") {
//           return a.stats.exercises.percent - b.stats.exercises.percent;
//         } else {
//           return (a.stats.exercises.percent - b.stats.exercises.percent) * -1;
//         }
//       });
//     } else if (orderBy == "QuizzesPercent") {
//       return users.sort((a, b) => {
//         if (orderDirection == "ASC") {
//           return a.stats.quizzes.percent - b.stats.quizzes.percent;
//         } else {
//           return (a.stats.quizzes.percent - b.stats.quizzes.percent) * -1;
//         }
//       });
//     } else if (orderBy == "QuizzesScoreAvg") {
//       return users.sort((a, b) => {
//         if (orderDirection == "ASC") {
//           return a.stats.quizzes.scoreAvg - b.stats.quizzes.scoreAvg;
//         } else {
//           return (a.stats.quizzes.scoreAvg - b.stats.quizzes.scoreAvg) * -1;
//         }
//       });
//     } else if (orderBy === "ReadsPercent") {
//       return users.sort((a, b) => {
//         if (orderDirection == "ASC") {
//           return a.stats.reads.percent - b.stats.reads.percent;
//         } else {
//           return (a.stats.reads.percent - b.stats.reads.percent) * -1;
//         }
//       });
//     } else {
//       return users;
//     }
//   };
//   window.filterUsers = (users, search) => {
//     if (search) {
//       if (users) {
//         search = search.toLowerCase();
//         return users.filter(user => user &&
//           user.name && user.name.toLowerCase().indexOf(search) >= 0);
//       }
//       return [];
//     }
//     return users || [];
//   }

//   window.processCohortData = (options) => {
//     const courses = Object.keys(options.cohort.coursesIndex);
//     let students = computeUsersStats(users, options.cohortData.progress, courses);
//     students = sortUsers(students, options.orderBy, options.orderDirection);
  
//     if (options.search !== '') {
//       students = filterUsers(students, options.search);
//     }
//     return students;
//   }