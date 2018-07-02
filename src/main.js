<<<<<<< HEAD
const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlCohorts = '../data/cohorts.json';

const botonUsuarias = document.getElementById('boUsuarias');//boton
const cohortsList = document.getElementById('cohort');//no lo usare
const resultado= document.getElementById('resultado');//usuarias
const us2017=document.getElementById('b2017');

const getJSON = (url, callback) => {

  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.onerror = handleError;
  request.send();
=======
const usersData = '../data/cohorts/lim-2018-03-pre-core-pw/users.json'
const progressData = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'
const cohortsData = '../data/cohorts.json'

//Creating a function where the url and the onload property are parameters
const getData = (url, onload) => {
//xmlhttprecuest es para volver la pagina asincrona
   let dataRequest = new XMLHttpRequest();
   dataRequest.open('GET', url);
   dataRequest.onload = onload;
   dataRequest.onerror = handleError;
   dataRequest.send();
};

//We declare the global object dataCohort, it's empty and will be fill when we call the data  
window.dataCohort = {}

const saveUsersData = (event) => {
   //jason son los datos con los que vamos a interactuar
   dataCohort.users = JSON.parse(event.target.responseText);
>>>>>>> 32a131dd81a4f358ce5ff8b3cf61227c4f2d32d9
}

const saveProgressData = (event) => {
    //Saving progress data
   dataCohort.progress = JSON.parse(event.target.responseText);
}

<<<<<<< HEAD
const addUser = (ggg) => { 
  const data = JSON.parse(ggg.target.responseText);
  console.log (data);
  data.map((usuario) => {
    let usuaria = document.createElement('li');
    usuaria.innerHTML = usuario.name;
    resultado.appendChild(usuaria);
  }); 
=======
const saveCohortsData = (event) => {
    //Saving cohorts data
   dataCohort.cohorts = JSON.parse(event.target.responseText);  
>>>>>>> 32a131dd81a4f358ce5ff8b3cf61227c4f2d32d9
}

<<<<<<< HEAD
const addCohorts = (event) => {
  const data = JSON.parse(event.target.responseText);
  data.map((cohorts) => {
    let cohoList = document.createElement('option');
    cohoList.value = cohorts.id;
     cohoList.innerHTML = cohorts.id;
     cohortsList.appendChild(cohoList);
  });
}
cohortsList.addEventListener('change', e => {
  e.preventDefault();
  if(cohortsList.value === 'lim-2018-03-pre-core-pw') {
    getJSON(urlUser,addUser);
  } 
 
});
botonUsuarias.addEventListener('click',(e) => {
  e.preventDefault();
  getJSON(urlUser,addUser);
});

getJSON(urlCohorts, addCohorts);


=======
const handleError= () => {
 console.log('hay un error')
};


getData(usersData, saveUsersData);
getData(progressData, saveProgressData);
getData(cohortsData, saveCohortsData);

console.log(getData);
>>>>>>> 32a131dd81a4f358ce5ff8b3cf61227c4f2d32d9
