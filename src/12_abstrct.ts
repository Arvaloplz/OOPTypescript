//* Es una forma de restringir la creación de objetos base
import {Animal, Dog} from './09_protected'

// ! Esta clase ahora esta protegida para instancia
// const copito = new Animal('copito de nieve');
// copito.greeting();

// * Solo se puede instanciar un hijo de la clase base

const chori = new Dog('choripan','El ANdroide')
chori.woof(2);
