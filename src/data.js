



















































//  window.computeUsersStats=(users, progress, courses) => {
//      console.log(users, progress, courses);
//   let lista= users.map(user=>{
//       try{
//         user.stats = {
//             percent:promedioCursos(progress[user.id],courses),
//             exercises:{
//                 total:totalExercises(progress[user.id],course),
//                 completed:completeExercise(progress[user.id]),courses,
//                 percent:(completeExercise(progress[user.id],courses)/totalExercises(progress[user.id],courses)) *100,
//             },
//             reads: {
//               total: totalReads(progress[user.id], courses),
//               completed: completedReads(progress[user.id], courses),
//               percent: (completedReads(progress[user.id], courses) / totalReads(progress[user.id], courses)) * 100,
//             },
//             quizzes: {
//               total: totalQuizzes(progress[user.id], courses),
//               completed: completeQuizzes(progress[user.id], courses),
//               percent: (completeQuizzes(progress[user.id], courses) / totalQuizzes(progress[user.id], courses)) * 100,
//               scoreSum: scoreSum(progress[user.id], courses),
//               scoreAvg: (scoreSum(progress[user.id], courses) / completeQuizzes(progress[user.id], courses)),
//             }
//           }
//           return user;
//         } catch (error) {
//          return {}; 
//         }
          
//         })
//         console.log(lista);
//       return lista
//     }
//     function promedioCursos(progress, courses) {
//         let contador = 0;
//         courses.forEach(curso => {
//           contador += progress[curso].percent;
//         });
//         return contador / courses.length;
//       }
//       //funciones ejercicios, total por curso, completados por alumna y FALTA porcentaje de completados por alumna
//       function totalExcercises(progress, courses) {
//         let total = 0;
//         courses.forEach(curso => {
//           Object.values(progress[curso].units).forEach(unit => {
//             let exercises = Object.values(unit.parts).filter(ejercicio => ejercicio.hasOwnProperty("exercises"));
//             exercises.forEach((parte) => {
//               total += Object.values(parte.exercises).length;
//             })
//           })
//         })
//         return total;
//       }
      
//       function completeExcercise(progress, courses) {
//         let total = 0;
//         courses.forEach(curso => {
//           Object.values(progress[curso].units).forEach(unit => {
//             let partes = Object.values(unit.parts).filter(ejercicio => ejercicio.hasOwnProperty("exercises"));
//             partes.forEach((parte) => {
//               let completeExercices = Object.values(parte.exercises).filter(
//                 (exercise) => {
//                   return exercise.completado === 1;
//                 })
//               total += completeExercices.length;
//             })
//           })
//         })
//         return total;
//       }
      
//       function totalReads(progress, courses) {
//         let total = 0;
//         courses.forEach(curso => {
//           Object.values(progress[curso].units).forEach(unit => {
//             let reads = Object.values(unit.parts).filter(lectura => lectura.hasOwnProperty("type") && lectura.type === "read"); //al no poner llaves se retorna automaticamente la primera linea
//             total += reads.length
//           })
//         })
//         return total;
//       }
      
//       function completedReads(progress, courses) {
//         let total = 0;
//         courses.forEach(curso => {
//           Object.values(progress[curso].units).forEach(unit => {
//             let lecturas = Object.values(unit.parts).filter(lectura => lectura.type === "read");
//             let onlyReads = lecturas.filter((lectura) => lectura.completed === 1)
//             total += onlyReads.length;
//           })
//         })
//         return total;
//       }
      
//       function totalQuizzes(progress, courses) {
//         let total = 0;
//         Object.entries(progress).forEach(([nombre, curso]) => {
//           if (courses.indexOf(nombre) >= 0) {
//             Object.values(curso.units).forEach((unit) => {
//               let quiz = Object.values(unit.parts).filter((part) => part.type === "quiz")
//               total += quiz.length;
//             })
//           }
//         })
//         return total;
//       }
      
//       function completeQuizzes(progress, courses) {
//         let total = 0;
//         courses.forEach(curso => {
//           Object.values(progress[curso].units).forEach(unit => {
//             let quizzes = Object.values(unit.parts).filter(quiz => quiz.type === "quiz");
//             let onlyQuizzes = quizzes.filter((quiz) => quiz.completed === 1)
//             total += onlyQuizzes.length;
//           })
//         })
//         return total;
//       }
//       //Suma de todas las puntuaciones (score) de los quizzes completados.
//       function scoreSum(progress, courses) {
//         let total = 0;
//         courses.forEach(curso => {
//           Object.values(progress[curso].units).forEach(unit => {
//             let quizzes = Object.values(unit.parts).filter((part) => part.type === "quiz" && part.completed === 1)
//             quizzes.forEach(quiz => {
//               total += quiz.score
//             })
//           })
//         })
//         return total
//       }
      
//       const courses = ["intro"];
//       const getInfoData = () => {
//         fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json", { method: 'GET' })
//           .then((response) => {
//             if (response.status !== 200) {
//               alert('Error')
//             }
//             return response.json();
//           })
//           .then((users) => {
//             fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json", { method: 'GET' })
//               .then((response) => {
//                 if (response.status !== 200) {
//                   alert('Error')
//                 }
//                 return response.json();
//               })
//               .then((progress) => {
//                 computeUsersStats(users, progress, courses);
//               })
//           })
//       }; 
        
// //             reads:{
// //                 total:
// //                 completed:
// //                 percent:
// //             }
// //             quizzes:{
// //                 total:
// //                 completed:
// //                 percent:
// //                 scoresum:
// //                 scoreAvg:
// //             }
// //          }
// //         }
// //   });
// // }

// // // function sortUsers(users,orderBy,orderDirection){

// // // };
// // // function filterUsers(users, search){

// // // };
// // // function processCohortData(options){
// // //     options:{
// //         cohort:
// //         cohorData:{
// //             users:
// //             progress:
// //         }
// //     orderBy:{
// //     }
// //     orderDireccition:    
// //     }
// //     search:
// // };