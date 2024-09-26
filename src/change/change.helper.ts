import {Result} from './model'

export const calculateChangePerNote = (amountOfChange: number, note: number): Result => {
    if(!amountOfChange || !note) {
       throw Error ('Incorrect parameters detected')
    }
    const NumOfNoteType = Math.floor(amountOfChange / note);

    const remainder = amountOfChange % note;

    return {NumOfNoteType, remainder}
};