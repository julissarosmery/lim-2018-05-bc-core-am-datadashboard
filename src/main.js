import { WSAECANCELLED } from "constants";

const urlUser="../data/cohorts/lim-2018-03-pre-core-pw/users.json";
const urlProgress="../data/cohorts/lim-2018-03-pre-core-pw/progress.jsson";
const urlcohorts="../data/cohorts.json";

window.cohortData={}
 //se crea la constante getnews dandole los parametros url y getnews
const getNews=(url,addNews)=>{
//se crea la constante recuest para guardar en ella lo que ese obtenga de la peticion
 const recuest=new XMLHttpRequest();
 //el metodo open ayuda a abrir lo qu pida el parametro que en este caso es get (obtener) url.
 recuest.open('GET',url);
//atravez del metodo onload en la constante recuest se le agrega la data (addData) que se obtubo de la url
 recuest.onload=addData;
 //atravez del metodo en error(.onerror)se programa que cuando salga un error se tome en cuenta y almacene en manejar el error (handleError)
 recuest.onerror=handleError;
 //atravez de el metodo  send se envia la peticion
 recuest.send();
}
//se llama a la funcion y se suplantan los parametros base por lo que se quiere ejecutar en este caso lo de las tres url
getNews(urlUser,saveUsers);
getNews(urlProgress,saveprogress);
getNews(urlcohorts,saveCohorts);

//se crea la contante para la url de users la fuan contendra los users de json   ,haciendola funcion con el parametro event
 const saveUsers=(event)=>{
   cohortData.urlUser=JSON.parse(event.target.responseText);
 }
 const saveprogress=(event)=>{
   cohortData.urlProgress=JSON.parse(event.target.responseText);
 }
 const saveCohorts=(event)=>{
  cohortData.urlcohorts=JSON.parse(event.target.responseText);
 }
 const hanldeError=()=>{
   console.log('que hacess esto es un error 😱')
 }