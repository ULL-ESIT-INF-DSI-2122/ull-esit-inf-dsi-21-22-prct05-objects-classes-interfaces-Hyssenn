import {Pokemon} from './pokemon';
/**
 * la clase que se va a encargar de guardar una lista de pokemons
 */
export class Pokedex {
  public listPokemons : Pokemon[];
  /**
 * Va a crear una serie de pokemons y los va a guardar para tenerlos listos para usarlos cuando queramos
 *  @param listPokemons un array de pokemons para ir guardandolos en una lista
 */
  constructor() {
    let suicune :Pokemon = new Pokemon('Suicune', 187, 2, 'agua', 75, 115, 85, 100);
    let luxray :Pokemon = new Pokemon('Luxray', 42, 1.4, 'electrico', 120, 79, 70, 80);
    let chikorita :Pokemon = new Pokemon('Chikorita', 6.4, 0.9, 'planta', 49, 65, 45, 45);
    let shinx :Pokemon = new Pokemon('Shinx', 9.5, 0.5, 'electrico', 65, 34, 45, 45);
    let charmander :Pokemon = new Pokemon('Charmander', 8.5, 0.6, 'fuego', 52, 43, 65, 39);
    let squirtle :Pokemon = new Pokemon('Squirtle', 9, 0.5, 'agua', 48, 65, 43, 44);
    this.listPokemons = [suicune, luxray, chikorita, shinx, charmander, squirtle];
  }
}
