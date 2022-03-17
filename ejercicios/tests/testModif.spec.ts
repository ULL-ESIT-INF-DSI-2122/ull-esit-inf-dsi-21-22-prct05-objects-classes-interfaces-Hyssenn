import 'mocha';
import {expect} from 'chai';
import {Hexadecimal} from '../src/modif/hexadecimal';

describe('Options tests', () => {
  it('checking default options', () => {
    const myFirstHexValue = new Hexadecimal(23);
    const mySecondHexValue = new Hexadecimal(15);
    expect(myFirstHexValue.add(mySecondHexValue).valueOf()).to.equal(38);
    expect(myFirstHexValue.add(mySecondHexValue).toString()).to.equal('0x26');

    expect(myFirstHexValue.parse('0x26')).to.equal(38);
    expect(myFirstHexValue.rest(mySecondHexValue).valueOf()).to.equal(8);
  });
});
