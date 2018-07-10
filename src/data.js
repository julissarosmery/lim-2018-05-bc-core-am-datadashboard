
window.computeUsersStats = (users, progress, courses) => {
  const userWithStats = {
    
  }
  window.computeUsersStats=(users, progress, courses)=>{
    const lista=users.map(usersWithStats=>{
     const exercisesTotal = (progress, courses) => {

window.computerUsersStats = (users, progress, courses) => {
    const dataUsers = users;
    const dataProgress = progress;
    
  //FUNCION PARA CALCULAR EL PORCENYAJE DE COMPLETITUD DEL USUARIO: PERFECTA
    const calculatePercent = user => {
      let count = 0;                 //CONTADOR ..ACUMULAR TODO EL PUNTAJE DE LOS USUARIOS.
      let perscentByCourses = [];
      courses.map(course => {        //RECORRO MIS CURSOS
      if(user[course]){                //CONDICION.  (intro:)
        count+= user[course]['percent'];           //REGLA DE TRES SIMPLES.
        perscentByCourses.push(user[course]['percent'])
      }
    });
    return {
      percent:count/courses.length,
      perscentByCourses,
    };
  };
   
  //FUNCION PARA CALCULAR LA DAT DE LOS EJERCICIOS,LECTURAS Y QUIZZES:
    const calculateStats = (user,type) => {
      let conpleted=0;
      let total=0;
      let scoreSun=0;
      let totalCompletedQuizzes=0;
      let completedByCourses=courses.map(course => {
        let completedByCourses = 0;
        if(user.hasOwnProperty(course)){
          let units = Object.values(user[course]['units']);
          units.map(unit => {
            let parts = Object.values(unit['parts']).filter(parts => part.type === type);
            const calculateData = value => {
              total++;
              completed += value;
              completedByCourses += value;
            };
            switch(type){
              case 'practice':
              parts = parts.filter(part => part.hasOwnProperty('exercises'));
              part.map(part=>{
                const exercises = Object.values(part.exercises);
              exercises.map(exercises => typeof exercise === 'number' ? calculateData(exercise) : calculateData(exercise['completed']))
  

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
