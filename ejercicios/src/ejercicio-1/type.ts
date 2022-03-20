import {Pokemon} from './pokemon';
/**
 * @enum type donde se van a guardar los tipos para la creación de la matriz
 */
enum type {
fuego,
agua,
planta,
electrico
}
/**
 * Clase para trabajar con los distintos tipos que tienen los pokemons
 */
export class TypeChecker {
  private matrixTypes :number[][] = [[]];
  /**
 * El constructor no recibe nada, solo crea una matriz de cantidad de tipos x cantidad de tipos
 * y usando como fila el tipo del atacante y como columna el tipo del defensor introduce en cada 
 * espacio la efectividad.
 * @param matrixTypes Matriz que guarda tipos
 */
  constructor() {    // fue //agu // pla //ele
    this.matrixTypes = [[1/2,   1/2,  2,  1], // fuego
                        [2,   1/2,  1/2,  1], // agua
                        [1/2,   2,  1/2,  1], // planta
                        [1,     2,  1/2,  1/2]]; // electrico
  /* this.matrixTypes[0][0] = 1/2;
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
    this.matrixTypes[3][3] = 1/2; */
  }
  /**
   * funcion que se encarga de calcular la efectividad del ataque
   * @param atacante el pokemon que realiza el ataque
   * @param defensor el pokemon que se defiende del ataque
   * @returns la efectividad en un xn
   */
  checkType(atacante: Pokemon, defensor: Pokemon) :number {
    let x = 0;
    let y = 0;
    for (let i = 0; i <= 3; i++) {
      if (type[i] == atacante.getType()) {
        x = i;
      }
      if (type[i] == defensor.getType()) {
        y = i;
      }
    }
    return this.matrixTypes[x][y];
  }
}

