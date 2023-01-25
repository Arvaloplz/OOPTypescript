// * patron de diseño que garantiza una unica instancia en una clase

export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    // no entendi por que MyService en vez de this
    if (MyService.instance === null) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService = MyService.create('service');
const myService1 = MyService.create('service1');

console.log(myService === myService1);
