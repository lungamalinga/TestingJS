# TestingJS [Jest]
  <!-- ! npm install jest --save-dev -->
  <!-- ! npm install @types/jest --save-dev -->
  <!-- ! 'npm test' to run test -->

* beforeAll(() => console. log('1 - beforeAll'));
* afterAll(() => console.log('1 - afterAll'));
* beforeEach(() => console. log('1 - beforeEach')) ;
* afterEach(() => console.log('1 - afterEach'));
* test('', () => console. log('1 - test'));
* describe('Scoped / Nested block', () => {
   beforeAll(() => console.log('2 - beforeAll'));
* afterAll(() =› console. log('2 - afterAll')); 
* beforeEach (() => console. log('2 - beforeEach'));
* afterEach(() => console. log('2 - afterEach'));
* test("', () => console. log('2 - test'));}) ;

// 1 - beforeALL
// 1 - beforeEach
// 1 - test
// 1 - afterEach
1/2 - beforeALU
// 1 - beforeEach
// 2 - beforeEach|
// 2 - test
// 2 - afterEach
// 1 - afterEach
/ 2 -afterAll
// 1 - afterALL
 
