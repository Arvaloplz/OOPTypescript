export class MyDate {
  constructor(
    //* Definición y asignación en el CONSTRUCTOR
    //! Requiere el acceso (public/ private)
    public year: number = 1993,
    public month: number = 7,
    private _day: number = 9 //* Para getear un privado '_blabla'
  ) {}

  printFormat(): string {
    //* Es publico por defecto
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}-${month}-${this.year}`;
  }

  add(amount: number, type: 'day' | 'month' | 'year') {
    //* Es publico por defecto
    if (type === 'year') {
      this.year = this.year + amount;
    }
    if (type === 'month') {
      this.month = this.month + amount;
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
myDate.add(3, 'day');
console.log(myDate.isLeapYear);
