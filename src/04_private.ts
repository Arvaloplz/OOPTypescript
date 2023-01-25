export class MyDate {
  private year: number; //* Es publico por defecto
  private month: number;
  private day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
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

const myDate = new MyDate(1996, 9, 1);
console.log(myDate.printFormat());
myDate.add(3, 'day');
console.log(myDate.printFormat());
