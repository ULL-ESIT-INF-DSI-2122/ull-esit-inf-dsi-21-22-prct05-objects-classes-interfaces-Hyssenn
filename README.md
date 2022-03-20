# ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-Hyssenn
## Introducción
En esta práctica nos meteremos de lleno en el paradigma de OOP usando typescript, aprenderemos a hacer uso de clases, objetos e interfaces y la utilización de multiples ficheros para guardar cada una de las clases.
## Objetivos
- Utilización de objetos, clases e interfaces.
- Empezar a utilizar typeScript en el paradigma OOP.
- Utilización de multiples ficheros para guardar cada una de las clases.
## Ejercicio 1 Pokedex

En este ejercicio nos han pedido que creemos una lista de Pokemons guardando distintos elementos de información como:
- Nombre.
- Peso y altura.
- Tipo.
- Daño, defensa, velocidad, vida(HP)

Por último diseñar una clase combat con el cual podamos poner a combatir 2 de estos Pokemons y ver quien gana.

He dividido el ejercicio en 4 ficheros cada una con funcionalidades distintas estás van a ser:

-Clase pokedex: En esta clase guardaremos una lista de Pokemons creados.
-Clase pokemon: En esta clase guardaremos las estadísticas para cada uno de los objetos Pokemon.
-Clase typeCheck: En esta clase se guardará una matriz de tipos y calcularemos la efectividad de un ataque a otro.
-Clase combat: Esta clase se encargará de todo lo relacionado al propio combate entre 2 contricantes.

### Pokedex

```
export class Pokedex {
  public listPokemons : Pokemon[];

  constructor() {
    let suicune :Pokemon = new Pokemon('Suicune', 187, 2, 'agua', 75, 115, 85, 100);
    let luxray :Pokemon = new Pokemon('Luxray', 42, 1.4, 'electrico', 120, 79, 70, 80);
    let chikorita :Pokemon = new Pokemon('Chikorita', 6.4, 0.9, 'planta', 49, 65, 45, 45);
    let shinx :Pokemon = new Pokemon('Shinx', 9.5, 0.5, 'electrico', 65, 34, 45, 45);
    let charmander :Pokemon = new Pokemon('Charmander', 8.5, 0.6, 'fuego', 52, 43, 65, 39;
    let squirtle :Pokemon = new Pokemon('Squirtle', 9, 0.5, 'agua', 48, 65, 43, 44);
    this.listPokemons = [suicune, luxray, chikorita, shinx, charmander, squirtle];
  }
}
```

Aqui no hay mucho contenido simplemente creamos un montón de objetos _Pokemons_ y los guardamos luego en un array que va a contenerlos a todos.

### Pokemon

```
export class Pokemon {
  readonly name: string;
  readonly weigth: number;
  readonly height: number;
  private type: string;
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
  getAttack() {
    return this.attack;
  }
  getDefense() {
    return this.defense;
  }
  getHp() {
    return this.hp;
  }
  setHp(hp :number) {
    this.hp = hp;
  }
}
```

En esta clase es donde guardaremos toda la información básica de todos los pokemons los atributos que no van a cambiar están en formato de solo lectura y lo que potencialmente pueden cambiar están en privado, y luego hemos diseñado una serie de getters y setters para poder modificar o obtener dichos valores.

### TypeCheck

```

enum type {
fuego,
agua,
planta,
electrico
}

export class TypeChecker {
  private matrixTypes :number[][] = [[]];
  constructor() {    // fue //agu // pla //ele
    this.matrixTypes = [[1/2,   1/2,  2,  1], // fuego
                        [2,   1/2,  1/2,  1], // agua
                        [1/2,   2,  1/2,  1], // planta
                        [1,     2,  1/2,  1/2]]; // electrico

}
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
```

Esta clase se va a encargar de solucionar todo lo relacionado con la efectividad de unos tipos contra otros, para llevar a cabo esto he usado una matriz de tipos siguiendo la que usan en el propio juego de _Pokemon_:

![imagen](https://user-images.githubusercontent.com/79215998/159191090-d21ee2d9-03d2-4459-876c-fa6a1416f245.png)



Como se puede observar la efectividad se calcula por filas y columnas, siendo la fila el tipo que corresponde al atacante y la columna el tipo que corresponde al que se defiende del ataque, esto quiere decir que cuando un tipo fuego ataca a un tipo agua si unes las 2 coordenadas de fuego y agua encuentras el valor de la efectividad en este caso 1/2. 
Teniendo en cuenta esto he decidido que para la fila 0 y columna 0 va a corresponder al tipo fuego, luego a agua, luego a planta y por último a eléctrico, esto aprovechándome del tipo de datos enum que ya proviene con una enumeración que empiece desde 0, luego introduzco los datos en el constructor a mano, teniendo en cuenta y siguiendo la matriz original del juego.

Una vez creado dicha matriz cree una función `checkType` que se va a encargar de elegir la efectividad pasándole el pokemon atacante y el defensor, recorro el enumerado y cuando el tipo del pokemon coincide con el tipo del enumerado guardo el valor, es decir para un **tipo atacante de fuego** el enumerado correspondiente sería el **valor 0** y luego para un **tipo defensor eléctrico** el correspondiente sería **el 3**. Una vez que tenga los 2 valores el primero corresponderá a la x y el segundo a la y de la matriz y saco la efectividad, en el caso práctico que estoy describiendo fuego vs eléctrico sería: Fuego = 0 y eléctrico = 3, en la posición (0,3) de la matriz tendría la efectividad en este caso sería 1.

### Combat

Esta clase no tiene atributos y en su caso tiene 2 métodos que se van a encargar del combate, el método `start()` que realiza el combate y el método `attack()` que se encarga de los cálculos del ataque.

#### Start

```
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
```

Start va a recibir a los 2 contricantes creo la matriz de efectividad y el primer pokemon que se le pasa va a ser el primero que ataque, entonces el luchador 1 será siempre el atacante y el luchador 2 siempre será el que defienda, para que esto funcione. Después del ataque se comprueba la vida del luchador 2 (el defensor) si no ha llegado a 0 llamo a la función recursivamente cambiando a los contricantes de lugar, vamos a mirar como funciona el ataque

#### attack

```

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

	```

	`attack` recibe los 2 _pokemons_ siendo el primero el que ataca y el segundo el que defiende y se calcula el daño con una simple fórmula que va a ser:
	daño = 50* (daño_atacante / daño_defensor) * efectividad

	La efectividad se calcula con lo explicado anteriormente se le pasa el atacante y el defensor y usando la matriz te va a devolver la efectividad a multiplicar, hago referencia de si los ataques fueron efectivos o no muy efectivos dependiendo de si la efectividad es x2 o x1/2 y por último retorno el daño causado.
	
	![imagen](https://user-images.githubusercontent.com/79215998/159191099-a9478372-3050-410d-ba27-ab810de86b43.png)
