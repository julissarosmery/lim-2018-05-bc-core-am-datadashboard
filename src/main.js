const sedes = document.querySelector('#sedes');
const cohort = document.querySelector('#cohorts');
const users = document.querySelector('#users');



const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlCohorts = "../data/cohorts.json";
const urlProgress = "../data/cohorts/lim-2018-03-pre-core-pw/progress.json";

const cohortsMostrar = document.getElementById("mostrarCohorts");
const usersMostrar = document.getElementById("mostrarUsers");
const progressMostrar = document.getElementById("mostrarProgress");





//DATOS DE COHORTS:
const cohortsLima = (str, datcohorts) => {
    // console.log(str,datcohorts);
    const filtroCohortLima = datcohorts.filter(ele => (ele.id.indexOf(str) > -1));
    // console.log(filtroCohortLima);
    cohortsMostrar.innerHTML = '';
    for (const element of filtroCohortLima) {
        let listCohorts = document.createElement('div');
        listCohorts.setAttribute('class','hola');
        listCohorts.setAttribute('id', element.id);
        listCohorts.textContent = element.id;
        cohortsMostrar.appendChild(listCohorts);
    }
}
//DATOS DE USERS::
const usersLima=(str,dataUsers)=>{
    
    const filtroUsersLima=dataUsers.filter(ele=>(ele.role==='student'));
    // console.log(filtroUsersLima);
    
    usersMostrar.innerHTML='';
    for(const element of filtroUsersLima){
        // console.log(element.role);
    console.log(element.signupCohort);
        if(element.signupCohort === str){
            // console.log(element);
            let listUsers=document.createElement('div');
        listUsers.setAttribute('class','chau');
        listUsers.textContent=element.name;
        usersMostrar.appendChild(listUsers); 
        }
       
    }
    // return usersMostrar
}

//DATOS DE PROGRESS:
const progresCourses=(str,dataProgress)=>{
    // console.log(str,dataProgress);
}
//FUNCION SOLICITAR DATOS:
const obtJson = (str, url, llamarDenuevo) => {
    const solicitud = new XMLHttpRequest();
    solicitud.open('GET', url, true);
    solicitud.addEventListener('load', event => {
        if (event.target.readyState === 4 && event.target.status === 200) {
            const response = (JSON.parse(event.target.responseText));
            llamarDenuevo(str,response)
        }
    });
    solicitud.onerror = error;
    solicitud.send();
}
const error = () => {
    console.log("oh my god que es estoooo..a ocurrido un error!!");
}

//LISTA DE BOTONES DESPLEGABLES:
sedes.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event.target.id);

    obtJson(event.target.id, urlCohorts, cohortsLima);

})
//LISTA DE BOTONES EN PANTALLA:
cohort.addEventListener('click',(event)=>{
    event.preventDefault();
    // console.log(event.target.id);
    
    obtJson(event.target.id,urlUser,usersLima);
    cohortsMostrar.classList.add('hidden');
    
})
//LISTA DE BOTONES  CLICK EN NONBRES:
users.addEventListener('click',(event)=>{
    event.preventDefault();
    
})
