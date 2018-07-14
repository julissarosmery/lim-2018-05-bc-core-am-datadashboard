const sedes = document.querySelector('#sedes');
// const cohort = document.querySelector('#cohorts');



const urlCohorts = "../data/cohorts.json";
const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlProgress = "../data/cohorts/lim-2018-03-pre-core-pw/progress.json";

const cohortsMostrar = document.getElementById('mostrarCohorts');
// const usersmostrar = document.getElementById('mostrarUsers');

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


//FUNCION PARA LLAMAR ACOHORTS:
const addCohorts = (sedesHtml, datacohorts) => {
  // console.log(sedesHtml , datacohorts);
  options.cohort = datacohorts;
//   // usersmostrar.innerHTML = '';
  const datosCohortsFiltrados = datacohorts.filter(fCohort => {
    return fCohort.id.indexOf(sedesHtml) !== -1;
  });
  // console.log(datosCohortsFiltrados);
  cohortsMostrar.innerHTML = '';
  for (const fCohort of datosCohortsFiltrados) {
    cohortsMostrar.innerHTML+='';

    let listCohorts = document.createElement('div');
    listCohorts.setAttribute('class', 'chau');
    listCohorts.textContent = fCohort.id;
    cohortsMostrar.appendChild(listCohorts);


  }

}
// //FUNCION PARA LLAMAR A PROGRESS:
const addProgress = (usersName, dataProgress) => {
  // console.log(usersName, dataProgress);
  options.cohortData.progress = dataProgress;
  // console.log(options);
//   // processCohortData(options);
};


// // FUNCION PARA LLLAMAR A LOS USERS:    
const addUsers = (usersName, dataUsers) => {
  // console.log(dataUsers);
  options.cohortData.users = dataUsers;
  // console.log(options);
  obtJson(usersName, urlProgress, addProgress);
//   // cohortsMostrar.innerHTML='';
//   // const filtroUsersLima=dataUsers.filter(users=>(users.role==='student'));
//   // console.log(filtroUsersLima);
//   // for(const users of filtroUsersLima){
//   // let listUsers=document.createElement('div');
//   // listUsers.setAttribute('class','chau');
//   // listUsers.textContent=users.name;
//   // usersmostrar.appendChild(listUsers);

//   //     }
// }
// //     //FUNCION PARA LLAMAR A LOS PROGRESOS:
// //     const addProgress=(srt,dataProgress)=>{
// //         let dataProgress2 = Object.keys(dataProgress);
// //         console.log(dataProgress2);    
// //     }
// //     // obtJson(event.target.id, urlProgress, addProgress);
}



// sedes.addEventListener('click', (event) => {
//     event.preventDefault();
//     obtJson(event.target.id, urlCohorts, addCohorts);

sedes.addEventListener('click', (event) => {

  obtJson(event.target.id, urlCohorts, addCohorts);
// console.log(event.target);


})
cohortsMostrar.addEventListener('click', (event) => {

   const cohortSeleccionado = options.cohort.filter(element => {
   if (element.id === "lim-2018-03-pre-core-pw"){
     options.cohort = element.id;
     
   }
  });
  options.cohort(cohortSeleccionado[0]);
  obtJson(event.target.id, urlUser, addUsers);

})
