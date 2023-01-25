export abstract class Animal {
  constructor(protected name: string) {}
  //* Protected es private pero nos permite heredar la variable.
  move() {
    console.log('Moving');
  }
  greeting() {
    return `Hi, I'm ${this.name}`;
  }
}
export class Dog extends Animal {
  constructor(
    name: string, //* no lo declaro publico ya que la propiedad es de animal no de perro
    public owner: string
  ) {
    super(name);
  }
  move(): void {
    console.log('Move as a dog');
    super.move();
  }
  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log(`${this.name} say: woof !`);
    }
  }
}

const firulais = new Dog('Firulais', 'dremian');

firulais.move();
firulais.woof(1);

console.log(firulais.greeting());
console.log(firulais.owner);
// ! firulais.name = 'firu'; no se puede hacer con protected

firulais.woof(1);
