export class MyDate {
  year: number;
  month: number;
  day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  printFormat(): string {
    return `${this.day}-${this.month}-${this.year}`;
  }
  add(amount: number, type: 'day' | 'month' | 'year') {
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
}

const myDate = new MyDate(1996, 9, 19);
console.log(myDate.printFormat());
myDate.add(3,'day')
console.log(myDate.printFormat());
