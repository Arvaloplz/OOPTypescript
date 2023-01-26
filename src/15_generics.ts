// !no son mantenibles respecto a los tipos
// function getValue(value: number|string){
//   return value;
// }
// function getValue(value: unknown){
//   return value;
// }

import { Dog } from "./09_protected";

function getValue<T>(value: T){
  return value;
}

getValue<number>(2);
getValue<string>('2');
const SnoopDoggieDog = new Dog('SnoopDogg', 'Dead Row')
getValue<Dog>(SnoopDoggieDog);
