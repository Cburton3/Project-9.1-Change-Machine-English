import { calculateChangePerNote } from "./change.helper";

describe("calculateChangePerNote", () => {
  it("Should give a throw if entradas are undefined", () => {
    //Arrange
    const amountOfChange: any = undefined;
    const note: any = undefined;

    //Act
    const result = () => calculateChangePerNote(amountOfChange, note);

    //Expect
    expect(result).toThrowError("Incorrect parameters detected");
  });

  it("Should give a throw if entradas are null", () => {
    //Arrange
    const amountOfChange: any = null;
    const note: any = null;

    //Act
    const result = () => calculateChangePerNote(amountOfChange, note);

    //Expect
    expect(result).toThrowError("Incorrect parameters detected");
  });

  it("Change is 3, note is 10 --> { NumOfNoteType: 0, remainder: 3 }", () => {
    //Arrange
    const amountOfChange = 3;
    const note = 10;

    //Act
    const result = calculateChangePerNote(amountOfChange, note);

    //Expect
    const expected = { NumOfNoteType: 0, remainder: 3 }
    expect(result).toEqual(expected);
  });

  it("Change is 12, note is 10 --> { NumOfNoteType: 1, remainder: 2 } ", () => {
    //Arrange
    const amountOfChange = 12;
    const note = 10;

    //Act
    const result = calculateChangePerNote(amountOfChange, note);

    //Expect
    const expected = { NumOfNoteType: 1, remainder: 2 }
    expect(result).toEqual(expected);
  });
});
