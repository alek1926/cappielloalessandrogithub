import {formatDate} from '../../utils/dateUtils'

describe('Test formattazione delle date', () => {

    it('Formattazione corretta delle date', () => {
        const mydate = '2020-01-01T00:00:00.000Z';
        const formattedDate = formatDate(mydate);
        expect(formattedDate).toBe('1 gen 2020, 01:00');
    });

    it('Inviare come data null', () => {
        const mydate = null; 
        expect (() =>formatDate(mydate)).toThrow();
    });

    it('Inviare come data undefined', () => {
        const mydate = undefined;
        expect (() =>formatDate(mydate)).toThrow();
    });
    
    it('Inviare come data una stringa non corretta', () => {
        const mydate = 'stringa';
        expect (() =>formatDate(mydate)).toThrow();
    });


});

