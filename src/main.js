const campus = document.querySelector('#sedes');
// const cohort = document.querySelector('#cohorts');

const urlCohorts = "../data/cohorts.json";
const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlProgress = "../data/cohorts/lim-2018-03-pre-core-pw/progress.json";

const showCohorts = document.getElementById('mostrarCohorts');
const usersProgress = document.getElementById('mostrarUsers');

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


// High order function for server request
const getData = (string, url, callback) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.addEventListener('load', event => {
    if (event.target.readyState === 4 && event.target.status === 200) {
      const answer = (JSON.parse(event.target.responseText));
      callback(string, answer)
    }
  });
  request.onerror = ('handleError');
  request.send();
}

const printAll = (arr) =>{
//    console.log(arr);

}


// Function to call the chorts
const addCohorts = (proms, datacohorts) => {

  const filterCohorts = datacohorts.filter(element => {
    return element.id.indexOf(proms) !== -1;
  });
   showCohorts.innerHTML = '';
  for (const element of filterCohorts) {
    showCohorts.innerHTML+='';

    let cohortsList = document.createElement('div');
    cohortsList.setAttribute('class', 'box-style');
    cohortsList.textContent = element.id;
    showCohorts.appendChild(cohortsList);
  }
}

// Function to call users    
const addUsers = (usersName, dataUsers) => {
  options.cohortData.users = dataUsers;
  getData(usersName, urlProgress, addProgress);
};

// Function to call progress
const addProgress = (usersName, dataProgress) => { 
    options.cohortData.progress = dataProgress;
    // processCohortData(options);
   printAll(processCohortData(options));
  };
  
campus.addEventListener('click', (event) => {
  getData(event.target.id, urlCohorts, addCohorts);
//   console.log(options);
})

const addingCohortToOptions = (proms, datacohorts) => {
    options.cohort = datacohorts;
    const selectedCohort = options.cohort.filter(element => {
        if(element.id === "lim-2018-03-pre-core-pw"){
            return (element.id);
            options.cohort = element.id;
        }
        });
        options.cohort = selectedCohort[0];
        getData(event.target.id, urlUser, addUsers);
}


 showCohorts.addEventListener('click', (event) => { 
   event.preventDefault();
    getData(event.target.id, urlCohorts, addingCohortToOptions);

    })

    

// const computeUsersStats = (users, progress, courses) => { 
//     const usersName = users.name;
//     const usersWithStats = {};
//     usersWithStats.stats = {  
//       percent: progressPercent(progress, courses),
//       exercises: studentsExercises(progress, courses),
//       reads: progressReads(progress, courses),
//       quizzes: progressQuiz(progress, courses),
//     }
//     usersWithStats.stats.name = addUsers();
//     return usersWithStats;
//   };

//   const progressPercent = (progress, courses) => {
//     try {
//       return progress[courses].percent;
//     } catch (error) {
//       return 0;
//     } 
//   };

//   const studentsExercises = (progress, courses) => {
//     const count = 0;
//     const completedCount = 0;
//     try {
//       courses.map((course) => {
//         const unitsValue = Object.keys(progress[course].units);
  
//         unitsValue.map((unitsName) => {
  
//           const partValues = Object.keys(progress[course].units[unitsName].parts);
  
//           partValues.map((partValues) => {
//             const exercisesValues = progress[course].units[unitsName].parts[partValues];
  
//             if (exercisesValues.hasOwnProperty('exercises')) {
//               const exerciseNames = exercisesValues.exercises;
//               count += Object.keys(exerciseNames).length;
  
//               const completedValue = Object.keys(exercisesValues.exercises);
//               //console.log(completedValue) 
//               completedValue.map((exerciseNames) => {
//                 //console.log (exerciseNames)
//                 const completedValue = progress[course].units[unitsName].parts[partValues].exercises[exerciseNames].completed;
//                 //console.log (completedValue)
//                 if (completedValue == 1) {
//                   completedCount += completedValue;
//                 }
//               });
//             }
//           });
  
  
//         });
//       });
//     } catch (error) {
//       const exercises = {
//         total: 0,
//         completed: 0,
//         percent: 0,
//       }
  
//       return exercises;
  
//     }
  
//     const exercises = {
//       total: count,
//       completed: completedCount,
//       percent: (completedCount / count) * 100,
//     }
//     return exercises;
  
  
//   };

//   const progressReads = (progress, courses) => {
//     let count = 0;
//     let completedCount = 0;
//     try {
//       courses.map((course) => {
//         const unitsValue = Object.keys(progress[course].units);
//         //console.log(unitsValue)
//         unitsValue.map((unitsName) => {
//           //console.log (unitsName);
//           const partValues = Object.keys(progress[course].units[unitsName].parts);
//           //console.log(partValues)
//           partValues.map((partValues) => {
//             //console.log (partValues)
//             const typeValue = progress[course].units[unitsName].parts[partValues];
//             //console.log(typeValue);
//             if (typeValue.type == "read") {
//               count++;
//             }
//             if (typeValue.type == "read" && typeValue.completed == 1) {
//               completedCount++;
//             }
//           });
//         });
//       });
  
//     } catch (error) {
//       let reads = {
//         total: 0,
//         completed: 0,
//         percent: 0,
//       }
//       return reads;
//     }
  
//     let reads = {
//       total: count,
//       completed: completedCount,
//       percent: Math.round((completedCount / count) * 100),
//     }
//     return reads;
  
  
//   }
//   const progressQuiz = (progress, courses) => {
//     let count = 0;
//     let completedCount = 0;
//     let countscoreAvg = 0
//     try {
//       courses.map((course) => {
//         const unitsValue = Object.keys(progress[course].units);
//         //console.log(unitsValue)
//         unitsValue.map((unitsName) => {
//           //console.log (unitsName);
//           const partValues = Object.keys(progress[course].units[unitsName].parts);
//           //console.log(partValues)
//           partValues.map((partValues) => {
//             //console.log (partValues)
//             const typeValue = progress[course].units[unitsName].parts[partValues];
//             //console.log(typeValue);
//             if (typeValue.type == "quiz") {
//               count++;
//             }
//             if (typeValue.type == "quiz" && typeValue.completed == 1) {
//               completedCount++;
//             }
  
//             if (typeValue.type == "quiz" && typeValue.completed == 1 && typeValue.score) {
//               countscoreAvg += typeValue.score;
//             }
//           });
//         });
//       });
  
//     } catch (error) {
//       let quizzes = {
//         total: 0,
//         completed: 0,
//         percent: 0,
//         scoreSum: 0,
//         scoreAvg: 0,
//       }
//       return quizzes;
//     }
  
//     const quizzes = {
//       total: count,
//       completed: completedCount,
//       percent: Math.round((completedCount / count) * 100),
//       scoreSum: countscoreAvg,
//       scoreAvg: Math.round(countscoreAvg / completedCount),
//     }
//     return quizzes;
//   }