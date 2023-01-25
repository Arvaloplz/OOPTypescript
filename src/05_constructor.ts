export class MyDate {
  constructor(
    //! Requiere el acceso (public/ private)
    public year: number = 1993,
    public month: number = 7,
    private day: number = 9
  ) {}
  //* Definición y asignación en el CONSTRUCTOR

  printFormat(): string {
    //* Es publico por defecto
    const day = this.addPadding(this.day);
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
      this.day = this.day + amount;
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
myDate.add(3, 'day');
console.log(myDate.printFormat());
