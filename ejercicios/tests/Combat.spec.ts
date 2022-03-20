import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Pokedex} from '../src/ejercicio-1/pokedex';
import {Combat} from '../src/ejercicio-1/combat';

describe('Combat tests', () => {
  let suicune :Pokemon = new Pokemon('Suicune', 187, 2, 'agua', 75, 115, 85, 100);
  let luxray :Pokemon = new Pokemon('Luxray', 42, 1.4, 'electrico', 120, 79, 70, 80);
  let chikorita :Pokemon = new Pokemon('Chikorita', 6.4, 0.9, 'planta', 49, 65, 45, 45);
  let shinx :Pokemon = new Pokemon('Shinx', 9.5, 0.5, 'electrico', 65, 34, 45, 45);
  let charmander :Pokemon = new Pokemon('Charmander', 8.5, 0.6, 'fuego', 52, 43, 65, 39);
  let squirtle :Pokemon = new Pokemon('Squirtle', 9, 0.5, 'agua', 48, 65, 43, 44);
  let luchadores :Pokedex = new Pokedex();
  let combate = new Combat;
  it('Combate 1 Luxray vs Suicune: Gana luxray', () => {
    expect(combate.start(suicune, luxray)).to.be.eq('Luxray');
  });
  it('Combate 2 shinx vs Chikorita: Gana luxray', () => {
    expect(combate.start(shinx, chikorita)).to.be.eq('Chikorita');
  });
});
