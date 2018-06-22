const btnUser = document.getElementById('btnMostrarUser');//boton
const selectbtn = document.getElementById('select-cohorts');//no lo usare
const listUsers = document.getElementById('container-user');//usuarias
const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlCohorts = '../data/cohorts.json';
const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';

const getJSON = (url, callback) => {
  //Creamos nuestro Objeto
  const request = new XMLHttpRequest();
  request.open('GET', url);
  //La funcion onload se le asigna la funcion callback
  request.onload = callback;
  //La funcion onerror tiene asignado la funcion handleError 
  request.onerror = handleError;
  request.send();
}

const handleError = () => {
  console.log('Se ha presentado un error');
}
//FUNCION DE LISTA DE USUARIO
const addUser = (event) => { 
  //debugger
  const data = JSON.parse(event.target.responseText);
  console.log (data);
  data.map((usuario) => {
    let listUser = document.createElement('li');
    listUser.innerHTML = usuario.name;
    listUsers.appendChild(listUser);
  }); 
}

//FUNCION LISTA DE COHORTS
const addCohorts = (event) => {
  const data = JSON.parse(event.target.responseText);
  data.map((cohorts) => {
    let listCor = document.createElement('option');
    listCor.value = cohorts.id;
    listCor.innerHTML = cohorts.id;
    selectbtn.appendChild(listCor);
  });

}
//
selectbtn.addEventListener('change', e => {
  e.preventDefault();
  if(selectbtn.value === 'lim-2018-03-pre-core-pw') {
    getJSON(urlUser,addUser);
  } 
  /* const url3 = '../data/cohorts/'+ e.target.value + '/users.json'
  getJSON(url3, addUsers);  */   
});

btnUser.addEventListener('click',(e) => {
  e.preventDefault();
  getJSON(urlUser,addUser);
});

getJSON(urlCohorts, addCohorts);




















// const lista = document.getElementById('contenedorUsarias');
// const botonn = document.getElementById('botonMostrar');


// const urlUsers = `../data/cohorts/lim-2018-03-pre-core-pw/user.json`;
// const urlProgress='../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
// const urlCohort='../data/lim-2018-03-pre-core-pw/users.json';

// const getJSON=(url,callback) => {
//     const request=new XMLHttpRequest();
//     request.open('GET',url);
//     request.onload=callback;
//     request.onerror=handleError;
//     request.send();
// }
// const handleError=()=>{
//     console.log('esto es un errorrrrrrrrrrr que estas haciebdooo?por dioss!!!😱');
// }
// //funcion de lista de usuarios
// const addUser=(event)=>{
// const data=JSON.parse(event.target.responseText);
// console.log(data);
// data.map((usuario)=>{
//     let listUser=document.createElement('li');
//     listUser.innerHTML=usuario.name;
//     listUser.appendChild(listUser);
// });
//  }
// // botonn.addEventListener('change', e=>{
// //     e.preventDefault();
// //     if(botonn.value==='lim-2018-03-pre-core-pw'){
// //         obtenerJson(urlUsers,añadirUsers);
// //     }
// // });
// botonn.addEventListener('click',(e) => {
//     e.preventDefault();
//     if(botonn.value ==='lim-2018-03-pre-core-pw'){
//         getJSON(urlUsers,addUser);
//     }
   
//    debugger
// });
  
// //   getJSON(urlCohorts, addCohorts);













// // window.dataCohort={}

// //  urlUsers = function(event){
// //     dataCohort.users=JSON.parse(event.target.responseText);
// //     console.log(event);
// // }
// // usersSave();
// // const progressUsers=function(event){
// //     dataCohort.progress=JSON.parse(event.target.responseText);
// // }
// // const cohortsUsers=function(event){
// //     dataCohort.cohorts=JSON.parse(event.target.responseText);
// // }

//     fun
// ction dataObtenida() {
//     let solicitandoData=new XMLHttpRequest();
//     solicitandoData.open('GET',urlUsers);
//     solicitandoData.onload=exito;
//     solicitandoData.onerror=error;
//     solicitandoData.send();
// }
//  function error(){
//     console.log('esto es un error que estas haciendooooooooo?');
// }
// function exito(){
//     const data=JSON.parse(this.responseText);
//     console.log(data);
// }
// dataObtenida();