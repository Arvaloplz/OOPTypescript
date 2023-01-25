export class MyDate {
  constructor(
    //* Definición y asignación en el CONSTRUCTOR
    //! Requiere el acceso (public/ private)
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9 //* Para getear o setear un privado '_blabla'
  ) {}

  printFormat(): string {
    //* Es publico por defecto
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}-${month}-${this.year}`;
  }

  add(amount: number, type: 'day' | 'month' | 'year') {
    //* Es publico por defecto
    if (type === 'year') {
      this.year = this.year + amount;
    }
    if (type === 'month') {
      this._month = this._month + amount;
    }
    if (type === 'day') {
      this._day = this._day + amount;
    }
  }
  get day() {
    //* Retorno propiedad day a travez de una funcion con GET
    return this._day;
  }
  get isLeapYear(): boolean {
    //* Retorno propiedad nueva a travez de una funcion con GET
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
  set month(value :number){
    //* Retorno propiedad nueva (para asignar) a travez de una funcion con SET
    if (value >= 1 && value < 12) {
      this._month = value;
    } else {
      throw new Error('Month out of range');
    }
  }
  private addPadding(value: number) {
    //* Privado
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
}

const myDate = new MyDate();
console.log(myDate.printFormat());
myDate.month = 4
console.log(myDate.printFormat());
myDate.month = 27;
console.log(myDate.printFormat());
