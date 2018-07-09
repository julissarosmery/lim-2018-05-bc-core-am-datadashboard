
window.computeUsersStats = (users, progress, courses) => {
  const userWithStats = {
    
  }
  window.computeUsersStats=(users, progress, courses)=>{
    const lista=users.map(usersWithStats=>{
     const exercisesTotal = (progress, courses) => {

       let cont = 0;
       courses.map((curso) => {
           const valorUnits = Object.keys(progress[curso].units);
           console.log(valorUnits)
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
          
           completed:
           percentd:
           }
           reads:{
           total:
           completed:
           percent:
                 
           }
           quizzes:{
            
          total:




          
          completed:
          percent:
          scoresum:
          scoreAvg:
           }  
              
       }
     }
  catch{

   }
   return{}   
} )

userWithStats();     

window.sortUsers = () => {

}

window.filterUsers = () => {

}

window.processCohortData = () => {

}




//Buttons
const button2018Function = 
document.getElementById('prom-2018-button').addEventListener('click', () => {
document.getElementById('block-2').style.display = 'none';
document.getElementById('block-3').style.display = 'block';
});
