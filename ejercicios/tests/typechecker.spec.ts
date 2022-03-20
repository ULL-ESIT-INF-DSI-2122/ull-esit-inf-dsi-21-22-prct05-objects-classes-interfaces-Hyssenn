import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {TypeChecker} from '../src/ejercicio-1/type';

describe('Combat tests', () => {
  let suicune :Pokemon = new Pokemon('Suicune', 187, 2, 'agua', 75, 115, 85, 100);
  let luxray :Pokemon = new Pokemon('Luxray', 42, 1.4, 'electrico', 120, 79, 70, 80);
  let chikorita :Pokemon = new Pokemon('Chikorita', 6.4, 0.9, 'planta', 49, 65, 45, 45);
  let efectividad : TypeChecker = new TypeChecker;
  it('Tipo electrico a agua ', () => {
    expect(efectividad.checkType(luxray, suicune)).to.be.equal(2);
  });
  it('Tipo electrico a planta', () => {
    expect(efectividad.checkType(luxray, chikorita)).to.be.equal(1/2);
  });
});

