//main fx to calc change

import { calculateChangePerNote } from "./change.helper";
import { Change } from "./model";

const notes = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

export const calcularChange = (price: number, moneySpent: number): Change[] => {
  if (!price || !moneySpent) {
    throw Error("Incorrect parameters detected");
  }

  let result: Change[] = [];
  let amountOfChange = price - moneySpent;

  for (let i = 0; i < notes.length; i++) {
    const { NumOfNoteType, remainder } = calculateChangePerNote(
      amountOfChange,
      notes[i]
    );

    if (NumOfNoteType > 0) {
      amountOfChange = remainder;
      result = [...result, { note: notes[i], sum: NumOfNoteType }];
    }

    if (amountOfChange === 0) {
      break;
    }
  }

  return result;
};
