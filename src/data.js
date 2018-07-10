//cuarta funcion:

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
  
              })
              breack;
              case 'read':
              parts.map(part => calculateData(part['completed']));
              break;
              case'quiz':
              parts.map(part => {
  
              })
              break;
            }
  
          })
        };
        return completedByCourses;
      });
  
  
      let response = {
        total,
        completed,
        percent : total !== 0 ? Math.round(completed * 100 / total) : 0,
      };
        if (type === 'quiz'){
          response.scoreAvg = totalCompletedQuizzes !== 0 ? Math.round(scoreSun = totalCompletedQuizzes ): 0;
        }
        
        return response; 
      
        }
      
  
  
  
     
  //FILTARAR ROL DE ESTUDIANTES:PERFECTA  
    let students = dataUsers.filter(user => user.role ==='student');
  
   //RECORRER EL ROL DE ESTUDIANTES:
    students = students.map( user => {
      const userProgress = dataProgress[user.id];
      let percent = calculatePercent(userProgress);
      let exercises = calculateStats(userProgress, 'practica');
      let reads = calculateStats(userProgress, 'read');
      let quizzes = calculateStats(userProgress, 'quiz');
      return ({
        id: user.id,
        name: user.name.toUpperCase(),
        stats: {
          percent: percent,
          exercises:exercises,
          reads:reads,
          quizzes:quizzes,
        },
      })
  });
    return students;
  }
  
  
  
  
  
  
  window.sortUsers = (users, orderBy, orderDirection) => {
  
  }
  window.filterUsers = (users, search) => {
  
  }
  window.progressCohortData = (options) =>{ //PERFECTA.
    console.log(options);
    const courses = Object.keys(options.cohort.coursesIndex);
    // const [users,progress]=cohortData;
    console.log(courses);
  
    let students = computerUsersStats(options.cohortData.users, options.cohortData.progress, courses);
    // students = sortUsers(students,orderBy,orderDirection);
    // search ? students = filterUsers(students,search) : null;
  
  
  
  }
  