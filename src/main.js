const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlCohorts = '../data/cohorts.json';

const botonUsuarias = document.getElementById('boUsuarias');//boton
const cohortsList = document.getElementById('cohort');//no lo usare
const usuarias = document.getElementById('resultado');//usuarias

const getJSON = (url, callback) => {

  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.onerror = handleError;
  request.send();
}

const handleError = () => {
  console.log('Se ha presentado un error');
}

const addUser = (event) => { 
  const data = JSON.parse(event.target.responseText);
  console.log (data);
  data.map((usuario) => {
    let usuaria = document.createElement('li');
    usuaria.innerHTML = usuario.name;
    usuarias.appendChild(usuaria);
  }); 
}
debugger

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