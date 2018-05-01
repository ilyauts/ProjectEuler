/* Problem 19

You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

*/
'use strict';

let time = new Date().getTime(),
    millisInSecond = 1000.;

/////////////// Code ///////////////

let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

let dayPerMonths = {
    'January': 31,
    'February': 28,
    'March': 31,
    'April': 30,
    'May': 31,
    'June': 30,
    'July': 31,
    'August': 31,
    'September': 30,
    'October': 31,
    'November': 30,
    'December': 31
};

let dayOfWeek = 'Monday',
    dayNum = 1,
    monthName = 'January',
    yearNum = 1900,
    sundayCount = 0;

while (yearNum < 2001) {
    // If Sunday found
    if (dayOfWeek == 'Sunday' && dayNum == 1 &&
        yearNum > 1900 && yearNum < 2001) {
        sundayCount++;
    }

    dayNum++;
    if(dayNum > dayPerMonths[monthName]) {
        monthName = nextMonth(monthName);
        dayNum = 1;

        if(monthName == 'January') {
            yearNum++;
        }
    }

    dayOfWeek = nextDay(dayOfWeek);
}

console.log('There were', sundayCount, 'Sundays on the first of the month in the 20th century!')

function nextMonth(month) {
    switch (month) {
        case 'January':
            return 'February';
        case 'February':
            return 'March';
        case 'March':
            return 'April';
        case 'April':
            return 'May';
        case 'May':
            return 'June';
        case 'June':
            return 'July';
        case 'July':
            return 'August';
        case 'August':
            return 'September';
        case 'September':
            return 'October';
        case 'October':
            return 'November';
        case 'November':
            return 'December';
        case 'December':
            return 'January'
    }
}

function nextDay(day) {
    switch (day) {
        case 'Monday':
            return 'Tuesday';
        case 'Tuesday':
            return 'Wednesday';
        case 'Wednesday':
            return 'Thursday';
        case 'Thursday':
            return 'Friday';
        case 'Friday':
            return 'Saturday';
        case 'Saturday':
            return 'Sunday';
        case 'Sunday':
            return 'Monday';
    }
}

////////////////////////////////////

let timeEnd = new Date().getTime();
let difference = timeEnd - time;
console.log('Calculation took: ', difference / millisInSecond, ' seconds');