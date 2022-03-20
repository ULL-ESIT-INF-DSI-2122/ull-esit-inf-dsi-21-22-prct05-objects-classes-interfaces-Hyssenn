/**
 * clase que se encarga de guardar toda la información relacionada con los pokemons
 */
export class Pokemon {
  readonly name: string;
  readonly weigth: number;
  readonly height: number;
  private type: string;
  private attack: number;
  private defense: number;
  private speed: number;
  private hp: number;
  /**
 * el constructor va a añadir los parámetros del pokemon
 * @param name el nombre del pokemon
 * @param weigth el peso del pokemon
 * @param height la altura del pokemon
 * @param type el tipo del pokemon
 * @param attack el ataque del pokemon
 * @param defense la defensa del pokemon
 * @param speed la velocidad del pokemon
 * @param hp la vida del pokemon
 */
  constructor(name: string, weigth: number, height: number, type: string, attack: number,
      defense: number, speed: number, hp: number) {
    this.name = name;
    this.weigth = weigth;
    this.height = height;
    this.type = type;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.hp = hp;
  }
  /**
   * @returns el tipo del pokemon
   */
  getType() {
    return this.type;
  }
  /**
   * @returns el ataque del pokemon
   */
  getAttack() {
    return this.attack;
  }
  /**
   * @returns la defensa del pokemon
   */
  getDefense() {
    return this.defense;
  }
  /**
   * @returns la vida del pokemon
   */
  getHp() {
    return this.hp;
  }
  /**
   * para cambiarle la vida al pokemon
   * @param hp la nueva vida del pokemon
   */
  setHp(hp :number) {
    this.hp = hp;
  }
}

