console.log(Math.PI);

class MyMath {
  static readonly PI = 3.14;
  static max(...values: number[]) {
    let result = values.reduce(
      (acc: number, cur: number) => (cur > acc ? cur : acc),
      values[0]
    );

    return result;
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(-1, -2, -3, -4, -6));
