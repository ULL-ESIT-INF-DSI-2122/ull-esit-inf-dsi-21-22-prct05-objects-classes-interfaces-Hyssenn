export class Hexadecimal {
  private numero: number;

  constructor(numero :number) {
    this.numero = numero;
  }

  valueOf() {
    return this.numero;
  }
  toString() {
    let hex = this.numero.toString(16);
    hex = '0x' + hex;
    return hex;
  }
  parse(hex :string) {
    const numero :number = parseInt(hex, 16);
    return numero;
  }
  add(secHex :Hexadecimal) {
    let result :Hexadecimal = new Hexadecimal(this.numero + secHex.valueOf());
    return result;
  }
  rest(secHex :Hexadecimal) {
    let result :Hexadecimal = new Hexadecimal(this.numero - secHex.valueOf());
    return result;
  }
}

let myFirstHexValue = new Hexadecimal(23);
let mySecondHexValue = new Hexadecimal(15);
console.log(`la suma es numero entero es: ${myFirstHexValue.add(mySecondHexValue).valueOf()}`);
console.log(`la representacion hexadecimal es: ${myFirstHexValue.add(mySecondHexValue).toString()}`);
console.log(`el valor de hexadecimal a decimal es: ${myFirstHexValue.parse('0x26')}`);
