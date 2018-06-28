 window.computeUsersStats=(users, progress, courses)=>{
   const lista=users.map(usersWithStats=>{
    const exercisesTotal = (progress, courses) => {
      let cont = 0;
      courses.map((curso) => {
          const valorUnits = Object.keys(progress[curso].units);
          //console.log(valorUnits)
          valorUnits.map((nombreUnits) => {
              //console.log (nombreUnits);
              const valorParts = Object.keys(progress[curso].units[nombreUnits].parts);
              // console.log(valorParts)
              valorParts.map((nombreParts) => {
                  const valorExcercises = progress[curso].units[nombreUnits].parts[nombreParts];
                  //console.log (valorExcercises)
                  if (valorExcercises.hasOwnProperty('exercises')) {
                      const nombreExercises = valorExcercises.exercises;
                      cont += Object.keys(nombreExercises).length;
                  }
              });
          });
      });
      return cont
  };
    
try {
  usersWithStats.stats = {
      percent: progress[usersWithStats.id].intro.percent,
      exercises: {
          total: exercisesTotal(progress[usersWithStats.id], courses),
          completed: exercisesCompleted(progress[usersWithStats.id], courses),
          percent: 
  }
  return usersWithStats;
} catch (error) {
  return {};
}

})
// console.log(lista);
return lista;
}


  
    //  users.map((pepito)=>{

  //  })
  // const numbers=[1,4,9];
  // const doble=numbers.map(number=>number*2

  // )
  // console.log(doble);}
//   try{
//     usersWithStats.stats={
//                  percent:progress[usersWithStats.id].intro.percent,
//                  exercises:{
//                      total:
//                      completed:
//                      percentd:
//                  }
//                  reads:{
//                      total:
//                      completed:
//                      percent:
     
//                  }
//                  quizzes:{

//                      total:
//                      completed:
//                      percent:
//                      scoresum:
//                      scoreAvg:
//                  }  
  
//   }
//  }
//  catch{
//    return{}
//  }

// })
// return lista;
// }



























// window.computeUsersStats=(users, progress, courses)=>{
//    console.log(users, progress, courses);
  
  
  

  
  
//    let list=stats.map(users=>
    
//     {
//        try {
//             users.stats={
//             percent:
//             exeises:{
//                 total:
//                 completed:
//                 percentd:
//             }
//             reads:{
//                 total:
//                 completed:
//                 percent:

//             }
//             quizzes:{
//                 total:
//                 completed:
//                 percent:
//                 scoresum:
//                 scoreAvg:
//             }
//          catch (error) {
//          }
//    })
//   }
    
       
// function sortUsers(users,orderBy,orderDirection){

// };
// function filterUsers(users, search){

// };
// function processCohortData(options){
//     options:{
//         cohort:
//         cohorData:{
//             users:
//             progress:
//         }
//     orderBy:{
//     }
//     orderDireccition:    
//     }
//     search:
// };