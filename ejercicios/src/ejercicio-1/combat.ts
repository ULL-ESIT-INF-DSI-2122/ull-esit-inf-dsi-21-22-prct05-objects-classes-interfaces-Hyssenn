import {Pokemon} from './pokemon';
import {TypeChecker} from './type';
import {Pokedex} from './pokedex';
/**
 * La clase combat va a encargarse el combate entre 2 pokemons
 */
export class Combat {
  /**
   * Esta función se encarga del cálculo del daño de un pokemon atacante vs otro
   * @param atacante el pokemon que ataca
   * @param defensor el pokemon que va a recibir el ataque
   * @param efectividad la matriz que contiene todos las efectividades de tipo
   * @returns el daño que se realiza
   */
  attack(atacante :Pokemon, defensor :Pokemon, efectividad :TypeChecker) :number {
    const efectivo = efectividad.checkType(atacante, defensor);
    const damage = Math.round(50 * (atacante.getAttack() / defensor.getDefense()) * efectivo);
    console.log(`${atacante.name} ataca a ${defensor.name} y le hace ${damage} puntos de daño`);
    if (efectivo == 2) {
      console.log(`El ataque fue muy efectivo...`);
    } else if (efectivo == 1/2) {
      console.log(`El ataque no fue muy efectivo...`);
    }
    return damage;
  }
  /**
  * Esta función se encarga de organizar la pelea por turnos de 2 pokemons
   * @param fighter1 el pokemon que ataca
   * @param fighter2 el pokemon que va a recibir el daño
   * @returns el nombre del pokemon ganador
   */
  start(fighter1 :Pokemon, fighter2 :Pokemon) :string {
    let efectividad : TypeChecker = new TypeChecker;
    fighter2.setHp(fighter2.getHp() - this.attack(fighter1, fighter2, efectividad));
    console.log(`${fighter2.name} tiene ahora ${fighter2.getHp()} de vida`);
    if (fighter2.getHp() > 0) {
      return this.start(fighter2, fighter1);
    } else {
      console.log(`${fighter2.name} ha sido debilitado. ${fighter1.name} Es el ganador del combate`);
    }
    return fighter1.name;
  }
}
let luchadores :Pokedex = new Pokedex();
let combate = new Combat;

combate.start(luchadores.listPokemons[3], luchadores.listPokemons[2]);
