const sedes = document.querySelector('#sedes');
const espacioBuscar = document.getElementById('search');

const urlCohorts = "../data/cohorts.json";
const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlProgress = "../data/cohorts/lim-2018-03-pre-core-pw/progress.json";

const cohortsMostrar = document.getElementById('mostrarCohorts');


const options = {
  cohort: null,
  cohortData: {
    users: null,
    progress: null,
  },
  orderBy: 'name',
  orderDirection: 'ASC',
  search: ''
};

// const pasarDatos=(users,progress,cohort)=>{

// }


espacioBuscar.addEventListener('input',(event)=>{
  options.search = event.target.value;  
  const pintaFiltro = processCohortData(options);
  console.log(pintaFiltro);
const filtersMostrar = document.getElementById('mostrarFilters');

  cohortsMostrar.innerHTML='';
  pintaFiltro.forEach(students => {
    console.log(students);
    filtersMostrar.innerHTML+=
    pintar(pintaFiltro);
  
  })
})



// HY ORDER FUNCION PARA SOLICITAR DATOS:
const obtJson = (str, url, llamarDenuevo) => {
  const solicitud = new XMLHttpRequest();
  solicitud.open('GET', url, true);
  solicitud.addEventListener('load', event => {
    if (event.target.readyState === 4 && event.target.status === 200) {
      const response = (JSON.parse(event.target.responseText));
      llamarDenuevo(str, response)
    }
  });
  solicitud.onerror = error;
  solicitud.send();
}
const error = () => {
  console.log("oh my god que es estoooo..a ocurrido un error!!");
}
// 1 . FUNCION PARA LLAMAR ACOHORTS:
const addCohorts = (sedesHtml, datacohorts) => {
  options.cohort = datacohorts;
  // usersmostrar.innerHTML = '';
  const datosCohortsFiltrados = datacohorts.filter(fCohort => {
    return fCohort.id.indexOf(sedesHtml) !== -1;
  });
  cohortsMostrar.innerHTML = '';
  for (const fCohort of datosCohortsFiltrados) {
    cohortsMostrar.innerHTML += '';
    let listCohorts = document.createElement('div');
    listCohorts.setAttribute('class', 'chau');
    listCohorts.textContent = fCohort.id;
    cohortsMostrar.appendChild(listCohorts);
  }
}
// 3 . FUNCION PARA LLAMAR A PROGRESS:
const addProgress = (usersName, dataProgress) => {
  options.cohortData.progress = dataProgress;
  const arrResult= processCohortData(options);
  console.log(arrResult);
  // cohortsMostrar.innerHTML =''; 
  pintar(arrResult);

};

// 2 .  FUNCION PARA LLLAMAR A LOS USERS:    
const addUsers = (usersName, dataUsers) => {
  options.cohortData.users = dataUsers;
  obtJson(usersName, urlProgress, addProgress);
}
// FUNCION DE PINTADO:
const pintar=(datos)=>{
  cohortsMostrar.innerHTML='';
  for(const students of datos){
    cohortsMostrar.innerHTML+=
    ` <div class="cohort">
        <p>${students.name}</p>
        <p>excercises:${students.stats.exercises.percent}</p>
        <p>reads:${students.stats.reads.percent}</p>
        <p>quizzes:${students.stats.quizzes.percent}</p>
        <p>percent:${students.stats.percent}</p>
        </div>`
      }
    }


//EVENTO # 1:

sedes.addEventListener('click', (event) => {
  obtJson(event.target.id, urlCohorts, addCohorts);
})

// EVENTO # 2:
cohortsMostrar.addEventListener('click', (event) => {
  const cohortSeleccionado = options.cohort.filter(ele => {
    if (ele.id === "lim-2018-03-pre-core-pw") {
      return (ele.id);
      options.cohort = ele.id;
    }
  })
  options.cohort = cohortSeleccionado[0];
  // console.log(options);
  obtJson(event.target.id, urlUser, addUsers);
})

