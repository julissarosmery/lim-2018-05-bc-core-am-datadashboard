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

              })
              // break;

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
  console.log(stats);
}

window.sortUsers = (users, orderBy, orderDirection) => {
  const ordenarPorNombre = users.sort((a, b) => {
    var primero = a.name.toLowerCase();
    var segundo = b.name.toLowerCase();
    if (primero < segundo) {
       return -1;
       }
    if (primero > segundo) {
       return 1; 
      }
    return 0;
  });
  //ordena por nombre:
  if (orderBy === 'name' & orderDirection === 'asc') {
    // console.log(ordenarPorNombre)
    return ordenarPorNombre;
  } 
  else if (orderBy === 'name' & orderDirection === 'desc') {
    return ordenarPorNombre.reverse();
  } 
//ordena por porcentaje:
  else if (orderBy === 'percent' & orderDirection === 'asc') {
    const order = ordenarPorNombre.sort ((a, b) =>{ return a.stats.percent - b.stats.percent });
    return order;
  }
   else if (orderBy === 'percent' & orderDirection === 'desc') {
    const order = users.sort ((a, b) =>{ return b.stats.percent - a.stats.percent });
    return order;
  } 
  //ordena por ejjercicios:
  else if (orderBy === 'exercises' & orderDirection === 'asc') {
    const order = users.sort ((a, b) =>{ return a.stats.exercises.completed - b.stats.exercises.completed });
    return order;
  } 
  else if (orderBy === 'exercises' & orderDirection === 'desc') {
    const order = users.sort((a, b) =>{ return b.stats.exercises.completed - a.stats.exercises.completed });
    return order;
 }
  //ordena por quizzes:
   else if (orderBy === 'quizzes' & orderDirection === 'asc') {
    const order = users.sort ((a, b) =>{ return a.stats.quizzes.completed - b.stats.quizzes.completed });
    return order;
  }
  else if (orderBy === 'quizzes' & orderDirection === 'desc') {
    const order = users.sort ((a, b) =>{ return b.stats.quizzes.completed - a.stats.quizzes.completed });
    return order;
  }
  // ordenar por lecturas:
  else if (orderBy === 'reads' & orderDirection === 'asc') {
    const order = users.sort ((a, b)=> { return a.stats.reads.completed - b.stats.reads.completed });
    return order;
  } 
  else if(orderBy === 'reads' & orderDirection === 'desc'){
    const order = users.sort ((a, b)=> { return b.stats.reads.completed - a.stats.reads.completed });
    return order;
  }
}
window.filterUsers = (users, search) => {
  const userFilter = users.filter(user => {
    return user.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
  });
  return userFilter;
  // console.log(users);

}

window.processCohortData = (options) => {
  const courses = Object.keys(options.cohort.coursesIndex);//el objet.keys devuelve un array:
  let students = computeUsersStats(options.cohortData.users, options.cohortData.progress, courses);
  options.search ? students = filterUsers(students, options.search) : students;

  students = sortUsers(students,options.orderBy,options.orderDirection);
 
  
  console.log(students)
  
  //console.log(filterUsers);
  // console.log(options.search);

  // console.log(options.cohortData.users,options.cohortData.progress,courses);
  return students;

}

