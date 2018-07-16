window.computeUsersStats = (users, progress, courses) => {
    const datosUsuarias = users;
    const datosProgresos = progress;
    // console.log(datosProgresos);
  
    const calculandoPorcentaje = progresoDeCadaUsuaria => {
      let contador = 0;
      // console.log(courses.length);
      courses.map(elementoCursoPalabraIntro => {
        if (progresoDeCadaUsuaria[elementoCursoPalabraIntro]) {
          contador += progresoDeCadaUsuaria[elementoCursoPalabraIntro]['percent'];
          // console.log(contador);
          // console.log(contador/courses.length);
  
        }
      });
      return contador / courses.length;
    };
  
  
    const calculandoStadisticas = (progresoDeCadaUsuaria, practi) => {
      // console.log(practi);
      let completado = 0;
      let total = 0;
      let puntajeTotal = 0;
      let totalCompletadoQuizzes = 0;
      courses.map(course => {
        // console.log(courses);
        if (progresoDeCadaUsuaria.hasOwnProperty(course)) {
          let unidades = Object.values(progresoDeCadaUsuaria[course]["units"]);
          // console.log(unidades);
          unidades.map(unid => {
            let partes = Object.values(unid["parts"]).filter(eleParts => eleParts.type === practi);
            // console.log(partes);
            const calculandoData = value => {
              total++;
              completado += value;
              // console.log(completado);
  
              // cursosCompletados+=value;
            };
  
            switch (practi) {
              case 'practice':
                partes = partes.filter(eleParts => eleParts.hasOwnProperty("exercises"));
                partes.map(eleParts => {
                  // console.log(partes);
  
                  const ejercicios = Object.values(eleParts.exercises);
                  // console.log(ejercicios);
                  ejercicios.map(ele => typeof ele === "number" ? calculandoData(ele) : calculandoData(ele["completed"]));
                  // console.log(ejercicios);
  
                })
                break;
              case 'read':
                partes.map(eleParts => calculandoData(eleParts["completed"]));
  
                break;
              case 'quiz':
                partes.map(eleParts => {
                  calculandoData(eleParts["completed"]);
                  if (eleParts["completed"]) {
                    puntajeTotal += eleParts["score"];
                    totalCompletadoQuizzes++;
                    // console.log(partes);
  
                  }
  
                });
                break;
  
            }
          })
        };
        return completado;
      });
      let response = {
        total: total,
        completed: completado,
        percent: total != 0 ? Math.round(completado * 100 / total) : 0,
      };
      if (practi === 'quiz') {
        response.scoreAvg = totalCompletadoQuizzes != 0 ? Math.round(puntajeTotal = totalCompletadoQuizzes) : 0;
        // console.log(completado);
      }
      return response;
    }
  
  
  
    //filtrar usuarias para que sean del rol de estudiantes:
    let students = datosUsuarias.filter(estudiantesEspeficadas => estudiantesEspeficadas.role === "student");
    // console.log(students);
  
    // //mapeando usuarias para que retorne un nuevo array:
    students = students.map(objUsuaria => {
      //vinculamos usuarios y progreso por el id . que es lo que ambos tienen:
      const progresoDeCadaUsuaria = datosProgresos[objUsuaria.id];
      // console.log(objUsuaria);
      let perce = calculandoPorcentaje(progresoDeCadaUsuaria);
      let execi = calculandoStadisticas(progresoDeCadaUsuaria, "practice");
      let rea = calculandoStadisticas(progresoDeCadaUsuaria, "read");
      let quizz = calculandoStadisticas(progresoDeCadaUsuaria, "quiz");
      return ({
        id: objUsuaria.id,
        name: objUsuaria.name.toUpperCase(),
  
        stats: {
          percent: perce,
          exercises: execi,
          reads: rea,
          quizzes: quizz
        },
      })
    });
    return students;
  }
  
  // window.sortUsers = (users, orderBy, orderDirection) => {
  
  // }
  window.filterUsers = (users, search) => {
    
        const userFilter = users.filter(user => {
          // if(user.stats.name!=undefined){
          //   let nombres = user.stats.name;
          return user.name.toLowerCase().indexOf(search.toLowerCase())> -1;
          // }
        });
        return userFilter;
      }
  
      window.processCohortData = (options) => {
        const courses = Object.keys(options.cohort.coursesIndex);//el objet.keys devuelve un array:
        let students = computeUsersStats(options.cohortData.users, options.cohortData.progress, courses);
        //students = sortUsers(users,orderBy,orderDirection);
         options.cohortData.search ? students = filterUsers(options.cohortData.users,options.search):students;
        //console.log(filterUsers);
        console.log(options.search);
        
        // console.log(options.cohortData.users,options.cohortData.progress,courses);
      return students;
        
      }
  
