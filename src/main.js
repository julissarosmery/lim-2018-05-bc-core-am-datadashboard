const urlUsersData = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlProgressData = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const urlCohortsData = '../data/cohorts.json';

const options = {
    cohort : null,
    cohortData : {
        users : null,
        progress : null,
    },
    orderBy : 'name',
    orderDirection : 'ASC',
    search : ''
}; 

const limCohort = document.getElementById('lim');
const cdmxCohort = document.getElementById('cdmx');
const guadCohort = document.getElementById('guad'); 
const spauCohort = document.getElementById('spau'); 
const chleCohort = document.getElementById('chle');
const firstSection = document.getElementById('block-1');
const secondSection =document.getElementById('block-2');


const getData = (string, url, callback) => {
const xhRequest = new XMLHttpRequest;
xhRequest.open('GET', url);
xhRequest.addEventListener('load', (event) => {    
    if(event.target.readyState === 4){
        if(event.target.status !== 200){
            return 
                const answer = JSON.parse(event.target.responseText);
                callback(string, answer);
        }
    }
xhRequest.onerror('handleError');
xhRequest.send();
}
)};



const showCohorts = (venues, urlCohortsData, showCohorts) => { debugger
    const limData = JSON.parse(urlCohortsData);
    limData.forEach(element => {
        const filterLimCohort = limData.filter(Element =>(Element.id === 'lim-2018-03-pre-core-pw'));
    });
         
}