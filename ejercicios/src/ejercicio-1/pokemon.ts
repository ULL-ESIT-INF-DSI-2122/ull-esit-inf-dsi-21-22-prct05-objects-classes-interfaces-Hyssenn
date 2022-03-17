class Pokemon {
  readonly name: string;
  readonly weigth: number;
  readonly height: number;
  readonly type: string;
  private attack: number;
  private defense: number;
  private speed: number;
  private hp: number;

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
  getType() {
    return this.type;
  }
}

