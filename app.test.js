const { dayOfTheWeek } = require('./app');
const { monthOfTheYear } = require('./app');


test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/11/2020') );
    expect( day ).toBe('Wednesday');
});

test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/12/2020') );
    expect( day ).toBe('Thursday');
});

test('getMonth returns the month of the year', () => {
    const month = monthOfTheYear( new Date('3/11/2020') );
    expect( month ).toBe('March');
});

test('getMonth returns the month of the year', () => {
    const month = monthOfTheYear( new Date('4/11/2020') );
    expect( month ).toBe('April');
});

test('getMonth returns the month of the year', () => {
    const month = monthOfTheYear( new Date('5/11/2020') );
    expect( month ).toBe('May');
});
