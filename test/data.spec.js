describe('data', () => {

  it('debería exponer función computeUsersStats en objeto global', () => {
    assert.isFunction(computeUsersStats);
  });

  it('debería exponer función sortUsers en objeto global', () => {
    assert.isFunction(sortUsers);
  });

  it('debería exponer función filterUsers en objeto global', () => {
    assert.isFunction(filterUsers);
  });

  it('debería exponer función processCohortData en objeto global', () => {
    assert.isFunction(processCohortData);
  });

  describe('computeUsersStats(users, progress, courses)', () => {

    const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    const { users, progress } = fixtures;

    it('debería retornar arreglo de usuarios con propiedad stats', () => {
      const processed = computeUsersStats(users, progress, courses);

      assert.equal(users.length, processed.length);

      processed.forEach(user => {
        assert.ok(user.hasOwnProperty('stats'));
        assert.isNumber(user.stats.percent);
        assert.isObject(user.stats.exercises);
        assert.isObject(user.stats.quizzes);
        assert.isObject(user.stats.reads);
      });
    });

    describe('user.stats para el primer usuario en data de prueba - ver carpeta data/', () => {

      const processed = computeUsersStats(users, progress, courses);

      it(
        'debería tener propiedad percent con valor 53',
        () => assert.equal(processed[0].stats.percent, 53)
      );

      it('debería tener propiedad exercises con valor {total: 2, completed: 0, percent: 0}', () => {
        assert.deepEqual(processed[0].stats.exercises, {
          total: 2,
          completed: 0,
          percent: 0,
        });
      });

      it('debería tener propiedad quizzes con valor {total: 3, completed: 2, percent: 67, scoreSum: 57, scoreAvg: 29}', () => {
        assert.deepEqual(processed[0].stats.quizzes, {
          total: 3,
          completed: 2,
          percent: 67,
          scoreSum: 57,
          scoreAvg: 29,
        });
      });

      it('debería tener propiedad reads con valor {total: 11, completed: 6, percent: 55}', () => {
        assert.deepEqual(processed[0].stats.reads, {
          total: 11,
          completed: 6,
          percent: 55,
        });
      });

    });

  });

  describe('sortUsers(users, orderBy, orderDirection)', () => {

      const studentX = {
        name: "ROSARIO CUEVAS",
        stats: {
          exercises: {
            completed: 1,
            percent: 100,
            total: 2
          },
          percent: 100,
          quizzes: {
            completed: 1,
            percent: 100,
            scoreAvg: 87,
            scoreSum: 260,
            total: 3
          },
          reads: {
            completed: 11,
            percent: 100,
            total: 11
  
          }
        }
      }
      const studentY = {
        name: "MARIA TORREZ",
        stats: {
          exercises: {
            completed: 1,
            percent: 50,
            total: 2
          },
          percent: 50,
          quizzes: {
            completed: 2,
            percent: 70,
            scoreAvg: 89,
            scoreSum: 267,
            total: 3
          },
          reads: {
            completed: 6,
            percent: 55,
            total: 11
          }
        }
      }
      const studentZ = {
        name: "LUZ ESPERANZA",
        stats: {
          exercises: {
            completed: 0,
            percent: 0,
            total: 2
          },
          percent: 25,
          quizzes: {
            completed: 1,
            percent: 25,
            scoreAvg: 64,
            scoreSum: 191,
            total: 3
          },
          reads: {
            completed: 3,
            percent: 40,
            total: 11
  
          }
        }
      }
      let students = [studentA, studentB, studentC];
  
      it('debería retornar arreglo de usuarios ordenado por nombre ASC', () => {
        assert.deepEqual(sortUsers(students, "name", "Ascendente"), [studentX, studentY, studentZ])
      });
      it('debería retornar arreglo de usuarios ordenado por nombre DESC', () => {
        assert.deepEqual(sortUsers(students, "name", "Descendente"), [studentZ, studentY, studentX])
      });
      it('debería retornar arreglo de usuarios ordenado por porcentaje general ASC', () => {
        assert.deepEqual(sortUsers(students, "completitud", "Ascendente"), [studentX, studentY, studentZ])
      });
      it('debería retornar arreglo de usuarios ordenado por porcentaje general DESC', () => {
        assert.deepEqual(sortUsers(students, "completitud", "Descendente"), [studentZ, studentY, studentX])
      });
      it('debería retornar arreglo de usuarios ordenado por ejercicios completados ASC', () => {
        assert.deepEqual(sortUsers(students, "ejercicios", "Ascendente"), [studentX, studentY, studentZ])
      });
      it('debería retornar arreglo de usuarios ordenado por ejercicios completados DESC', () => {
        assert.deepEqual(sortUsers(students, "ejercicios", "Descendente"), [studentZ, studentY, studentX])
      });
      it('debería retornar arreglo de usuarios ordenado por quizzes completados ASC', () => {
        assert.deepEqual(sortUsers(students, "quizzes", "Ascendente"), [studentX, studentY, studentZ])
      });
      it('debería retornar arreglo de usuarios ordenado por quizzes completados DESC', () => {
        assert.deepEqual(sortUsers(students, "quizzes", "Descendente"), [studentZ, studentY, studentX])
      });
      it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados ASC', () => {
        assert.deepEqual(sortUsers(students, "quizzes", "Ascendente"), [studentX, studentY, studentZ])
      });
      it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados DESC', () => {
        assert.deepEqual(sortUsers(students, "quizzes", "Descendente"), [studentZ, studentY, studentX])
      });
      it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas ASC', () => {
        assert.deepEqual(sortUsers(students, "lecturas", "Ascendente"), [studentX, studentY, studentZ])
      });
      it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas DESC', () => {
        assert.deepEqual(sortUsers(students, "lecturas", "Descendente"), [studentZ, studentY, studentX])
      });
  
    });
  
    describe('filterUsers(users, filterBy)', () => {
  
      it('debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)', () => {
        let array = [{
          "id": "LZZiC91B4NddpaPTBJ1XpT9Ox8V2",
          "name": "Dorelly", "locale": "es-PE",
          "timezone": "America/Lima", "role": "student"
        },
        {
          "id": "mIyuhjFX4uhASyDcWReNE5dcd2I2",
          "github": "",
          "locale": "es-ES",
          "timezone": "America/Lima",
          "name": "Fiorella S",
          "linkedin": "", "role": "student"
        },
        {
          "id": "pHuZDr9WjBV1qrU66QZlq2yhGmC2",
          "timezone": "America/Lima",
          "name": "Dory",
          "locale": "es-PE", "role": "student"
        },
        {
          "id": "rosNOO9dNQQDo4TlClcMiFHEIfy2",
          "name": "Dalia", "locale": "es-PE",
          "timezone": "America/Lima", "role": "student"
        }]
        const dorelly = [{
          "id": "LZZiC91B4NddpaPTBJ1XpT9Ox8V2",
          "name": "Dorelly", "locale": "es-PE",
          "timezone": "America/Lima", "role": "student"
        }
        ];
        const dalia = [
          {
            "id": "rosNOO9dNQQDo4TlClcMiFHEIfy2",
            "name": "Dalia", "locale": "es-PE",
            "timezone": "America/Lima", "role": "student"
          }
        ]
        assert.deepEqual(window.filterUsers(array, "Dorelly"), dorelly);
        assert.deepEqual(window.filterUsers(array, "Dalia"), dalia);
      });
    });
  
    describe('processCohortData({ cohortData, orderBy, orderDirection, filterBy })', () => {
      const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
      const { users, progress } = fixtures;
      let options = {
        cohort: {},
        cohortData: {
          users: null,
          progress: null
        },
        orderBy: 'name',
        orderDirection: 'Ascendente',
        search: '',
      };
      it('debería retornar arreglo de usuarios con propiedad stats y aplicar sort y filter', () => {
        const processed = processCohortData(options);
        assert.deepEqual(processed[0].name, 'ADRIANA VIZCARRA PAITÁN');
        options.search = 'rojas';
        assert.deepEqual(processCohortData(options)[0].name, 'ANA PAIMA ROJAS');
        options.orderBy = 'ejercicios';
        options.orderDirection = 'Descendente';
        assert.deepEqual(processCohortData(options)[0].name, 'LUCIA NATALIA HUAPAYA ROJAS')
      });
    });

  });
    
