import { calcularChange } from "./change";
import { Change } from "./model";

describe("calculateChange", () => {
  it("Should give a throw if entradas are undefined", () => {
    //Arrange
    const price: any = undefined;
    const moneySpent: any = undefined;

    //Act
    const result = () => calcularChange(price, moneySpent);

    //Expect
    expect(result).toThrowError("Incorrect parameters detected");
  });

  it("Should give a throw if entradas are null", () => {
    //Arrange
    const price: any = null;
    const moneySpent: any = null;

    //Act
    const result = () => calcularChange(price, moneySpent);

    //Expect
    expect(result).toThrowError("Incorrect parameters detected");
  });

  it("price is 2.5€, customer pays 50€ --> change is 2 notes of 20€ and 1 of 5€, 1 of 2€ and 1 of 0.5€", () => {
    //Arrange
    const price = 50;
    const moneySpent= 2.5;

    //Act
    const result = calcularChange(price, moneySpent);

    //Expect
    const expected: Change[] = [
      {note: 20, sum: 2},
      {note: 5, sum: 1},
      {note: 2, sum: 1},
      {note: 0.5, sum: 1}
    ];
    expect(result).toEqual(expected);
  });
});
