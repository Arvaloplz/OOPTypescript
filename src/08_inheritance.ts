export class Animal {
  constructor(public name: string) {}
  move() {
    console.log('Moving');
  }
  greeting() {
    return `Hi, I'm ${this.name}`;
  }
}
export class Dog extends Animal {
  constructor(name: string //* no lo declaro publico ya que la propiedad es de animal no de perro
  , public owner: string) {
    super(name);
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log('woof !');
    }
  }
}

const firulais = new Dog('Firulais', 'dremian');

firulais.move();
firulais.woof(4);
console.log(firulais.greeting());
console.log(firulais.owner);
