/* enum type {
fuego,
agua,
planta,
electrico
}

class typeChecker {
  private type :type;
  private matrixTypes :number[][] = [[]];

  constructor() {
    this.matrixTypes[0][0] = 1/2;
    this.matrixTypes[0][1] = 1/2;
    this.matrixTypes[0][2] = 2;
    this.matrixTypes[0][3] = 1;
    this.matrixTypes[1][0] = 2;
    this.matrixTypes[1][1] = 1/2;
    this.matrixTypes[1][2] = 1/2;
    this.matrixTypes[1][3] = 1;
    this.matrixTypes[2][0] = 1/2;
    this.matrixTypes[2][1] = 2;
    this.matrixTypes[2][2] = 1/2;
    this.matrixTypes[2][3] = 1;
    this.matrixTypes[3][0] = 1;
    this.matrixTypes[3][1] = 2;
    this.matrixTypes[3][2] = 1/2;
    this.matrixTypes[3][3] = 1/2;
  }
  checkType(atacante: Pokemon, defensor: Pokemon) :number {
    let x = 0;
    let y = 0;
    for (let i = 0; i < 3; i++) {
      if (type[i] == atacante.type) {
        x = i;
      }
      if (type[i] == defensor.type) {
        y = i;
      }
    }
    return this.matrixTypes[x][y];
  }
}
*/
