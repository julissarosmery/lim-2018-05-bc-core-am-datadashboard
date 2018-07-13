// alert('hola soy main');
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
        listCohorts.setAttribute('class', 'hola');
        listCohorts.setAttribute('id', element.id);
        listCohorts.textContent = element.id;
        cohortsMostrar.appendChild(listCohorts);
    }
}
//DATOS DE USERS::
const usersLima = (str, dataUsers) => {

    // 
    computerUsersStats(dataUsers, progress, courses);

    const filtroUsersLima = dataUsers.filter(ele => (ele.role === 'student'));
    // console.log(filtroUsersLima);
    usersMostrar.innerHTML = '';
    for (const element of filtroUsersLima) {
        // console.log(element.role);
        // console.log(element.signupCohort);
        if (element.signupCohort === str) {
            // console.log(element);
            let listUsers = document.createElement('p');
            listUsers.setAttribute('class', 'chau');
            listUsers.textContent = element.name;
            usersMostrar.appendChild(listUsers);
        }

    }
    return usersMostrar
}

//DATOS DE PROGRESS:
const progressCourses = (str, dataProgress) => {

    let dataProgress2 = Object.keys(dataProgress)===;
    usersMostrar.innerHTML = '';
    console.log(dataProgress2);
    for (const element of dataProgress2) {
        let listProgress = document.createElement('div');
        listProgress.setAttribute('class', 'chau');
        listProgress.textContent = element;
        console.log(element);
        progressMostrar.appendChild(listProgress);
    }

    return progressMostrar;

}

//FUNCION GLOBAL PARA SOLICITAR DATOS:
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

//LISTA DE BOTONES DESPLEGABLES:
sedes.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event.target.id);

    obtJson(event.target.id, urlCohorts, cohortsLima);

})
//LISTA DE BOTONES EN PANTALLA:
cohort.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event.target.id);

    obtJson(event.target.id, urlUser, usersLima);
    cohortsMostrar.classList.add('hidden');

})
// //LISTA DE BOTONES  CLICK EN NONBRES:
// users.addEventListener('click', (event) => {
//     event.preventDefault();
    
//    createRole();

// })



// const options = {
//     cohort : ,
//     cohortData : {
//         users : null,
//         progress : null,
//     },
//     orderBy : 'name',
//     orderDirection : 'ASC',
//     search : ''
// }; 
//botones en pantalla:




// botonLima.addEventListener('click',(e)=>{
//     e.preventDefault();
//     obtJson(urlCohorts,cohortsLima);

// });
// botonCdmx.addEventListener('click',(e)=>{
//     e.preventDefault();
//     cohortsMostrar.innerHTML = '';
//     obtJson(urlCohorts,cohortCdmx);
// })
// botonAqp.addEventListener('click',(e)=>{
//     e.preventDefault();
//     obtJson(urlCohorts,cohortAqp);
// })
// botonSlc.addEventListener('click',(e)=>{
//     e.preventDefault();
//     obtJson(urlCohorts,cohortSlc);
// })
// botonSaoPaulo.addEventListener('click',(e)=>{
//     e.preventDefault();
//     obtJson(urlCohorts,cohortSaoPaulo);
// })


// //LLAMANDO A USER:
// const usersLima=(event)=>{
// const data=JSON.parse(event.target.responseText);
// console.log(data);

// const filtroUsersLima=data.filter(ele=>(ele.role==="student"));
// console.log(filtroUsersLima);
// const usersMostrar=document.getElementById("usuariasLima");




// filtroUsersLima.map((users)=>{
//     let listUsersLima=document.createComment('li');
//     listUsersLima.innerHTML=users.role;
//     usersMostrar.innerHTML='';
//     usersMostrar.appendChild(listUsersLima);

// })
// }



// //LLAMANDO A COHORTS:

/* 
const filtroCohortLima=data.filter(ele=>(ele.id.indexOf(botonLima.id)>-1));
console.log(filtroCohortLima);

for(const element of filtroCohortLima){
    let listCohorts = document.createElement('div');
    listCohorts.textContent = element.id; 
    cohortsMostrar.appendChild(listCohorts);
} */
// }

/* 
// filtroCohortLima.map((cohorts)=>{
//     let listCohorts=document.createElement('li');
//     listCohorts.innerHTML+=cohorts.id;
//     cohortsMostrar.innerHTML='';
//     cohortsMostrar.appendChild(listCohorts);
// }) */
// }
// const cohortCdmx=(event)=>{
//     const data=JSON.parse(event.target.responseText);
// // console.log(data);


// const filtroCohortLima=data.filter(ele=>(ele.id.indexOf(botonCdmx.id)>-1));
// //console.log(filtroCohortLima);

// for(const element of filtroCohortLima){
//     let listCohorts = document.createElement('div');
//     listCohorts.textContent = element.id; 
//     cohortsMostrar.appendChild(listCohorts);
// } 
// }

// const cohortAqp=(event)=>{
//     const data=JSON.parse(event.target.responseText);
// // console.log(data);

// const filtroCohortAqp=data.filter(ele=>(ele.id=== "aqp-2018-03-jp-core-talento"));
// console.log(filtroCohortAqp);
// const mostrarCuadro3=document.getElementById("cuadro3");
// filtroCohortAqp.map((cohorts)=>{
//     let listCohorts=document.createElement('li');
//     listCohorts.innerHTML=cohorts.id;
//     mostrarCuadro3.innerHTML='';
//     mostrarCuadro3.appendChild(listCohorts);
// })
// }

// const cohortSlc=(event)=>{
//     const data=JSON.parse(event.target.responseText);
// // console.log(data);

// const filtroCohortSlc=data.filter(ele=>(ele.id==="scl-2018-03-pre-core-pw"));
// console.log(filtroCohortSlc);

// const mostrarCuadro4=document.getElementById("cuadro4");
// filtroCohortSlc.map((cohorts)=>{
//     let listCohorts=document.createElement('li');
//     listCohorts.innerHTML=cohorts.id;
//     mostrarCuadro4.innerHTML='';
//     mostrarCuadro4.appendChild(listCohorts);
// })
// }
// const cohortSaoPaulo=(event)=>{
//     const data=JSON.parse(event.target.responseText);
// // console.log(data);

// const filtroCohortSaoPaulo=data.filter(ele=>(ele.id==="spl-2018-03-pre-core-pw"));
// console.log(filtroCohortSaoPaulo);

// const mostrarCuadro5=document.getElementById("cuadro5");
// filtroCohortSaoPaulo.map((cohorts)=>{
//     let listCohorts=document.createElement('li');
//     listCohorts.innerHTML=cohorts.id;
//     mostrarCuadro5.innerHTML='';
//     mostrarCuadro5.appendChild(listCohorts);
// })
// }































































// const suma=(a,b)=>{
//     const result=a+b;
//     return result;
//     };
//     const catorce=suma(7,7);

// botonLima.addEventListener('click', (e)=>{
//     e.preventDefault();
//     console.log(e.target.textContent);
//     console.log(suma(9,6));
// })

// botoncdmx.addEventListener('click',(e)=>{
//     e.preventDefault();
//     // e.target.textContent;
// console.log(suma(9,6));
// })
// botonaqp.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log(catorce);
// })
// const resta=(abc,def)=>{
//     const result=abc-def;
//     return result;
// };
// const tres=resta(987,123);

// botonslc.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log(tres);
// })

// botonSaoPaulo.addEventListener('click',(elemento)=>{
//     elemento.preventDefault();
//     console.log(suma(3,4));
// })
// const suma=(a,b)=>{
//     const result=a+b;
//     return result;
//     };
//     const catorce=suma(7,7);

// botonLima.addEventListener('click', (e)=>{
//     e.preventDefault();
//     console.log(e.target.textContent);
//     console.log(suma(9,6));
// })

// botoncdmx.addEventListener('click',(e)=>{
//     e.preventDefault();
//     // e.target.textContent;
// console.log(suma(9,6));
// })
// botonaqp.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log(catorce);
// })
// const resta=(abc,def)=>{
//     const result=abc-def;
//     return result;
// };
// const tres=resta(987,123);

// botonslc.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log(tres);
// })

// botonSaoPaulo.addEventListener('click',(elemento)=>{
//     elemento.preventDefault();
//     console.log(suma(3,4));
// })