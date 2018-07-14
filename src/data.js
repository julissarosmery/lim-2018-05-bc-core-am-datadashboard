window.computeUsersStats=(users,progress,courses)=>{
  const datosUsuarias = users;
  const datosProgresos = progress;
  
  const calculandoStadisticas=(usuaria,typo)=>{
  
  }
  //filtar usuarias :
  let students = datosUsuarias.filter(usu=>usu.role ===  "student");
  // console.log(students);
  //mapeando usuarias:
  students = students.map(usu=>{ 
  const usuariasProgreso=datosProgresos[usu.id];
  console.log(usuariasProgreso);
  let percent = calculandoPorcentaje(usuariasProgreso);
  let execises =  calculandoStadisticas(usuariasProgreso,"practice");
  let reads = calculandoStadisticas(usuariasProgreso,"reads");
  let quizzes = calculandoStadisticas(usuariasProgreso,"quizzes");
  
  })
  
  
  
  
  }
  window.sortUsers=(users,orderBy,orderDirection)=>{
  
  }
  window.filterUsers=(users,search)=>{
  
  }
  window.processCohortData = (options) => {
      // console.log(options);
  const courses=Object.keys(options.cohort.coursesIndex);
  // console.log(courses);
      
      let students = computeUsersStats(options.cohortData.users,options.cohortData.progress,courses);
      // students=sortUsers(users,orderBy,orderDirection);
      // search ? students=filterUsers(users,search):null;
      // console.log(options);
  }
