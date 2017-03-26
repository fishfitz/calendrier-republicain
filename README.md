# Calendrier Républicain
This is a converter from the commonly used Gregorian Calendar to the French Republican Calendar.

It currently only implements the Romme System for recent dates, meaning that it has a shift of one day for sextile years before the year 20 (1811).

`npm install calendrier-republicain`

## History
*The French Republican Calendar (French: calendrier républicain français), also commonly called the French Revolutionary Calendar (calendrier révolutionnaire français), was a calendar created and implemented during the French Revolution, and used by the French government for about 12 years from late 1793 to 1805, and for 18 days by the Paris Commune in 1871. The revolutionary system was designed in part to remove all religious and royalist influences from the calendar, and was part of a larger attempt at decimalisation in France (which also included decimal time of day, decimalisation of currency, and metrication).*

— [Wikipédia](https://en.wikipedia.org/wiki/French_Republican_Calendar)

## Functions
Each function takes a single date object as parameter:
* `year(date)` Get the year
* `dayOfYear(date)` Get the n-day of the year (between 1 and 366)
* `dayOfYearName(date)` Get the name of the day (often plants, animals, or tools associated with the season), in French (translation in english may come if someone is interested)
* `month(date)` Get the n-month of the year (between 1 and 13, 13 being the complementary days alias the Sans-culottides days)
* `monthName(date)` Get the name of the month
* `dayOfMonth(date)` Get the n-day of the month (between 1 and 30)
* `dayOfDecade(date)` Get the n-day of the decade (between 1 and 10)
* `dayOfDecadeName(date)` Get the name of the day relative to the decade

## Example of use
```javascript
const cal = require('calendrier-republicain');
const someDay = new Date(2017, 2, 27); // 27 March 2017

console.log('Today we are ' +
    cal.dayOfMonth(someDay) + ' ' +
    cal.dayOfDecadeName(someDay) +
    ' of ' + cal.monthName(someDay) +
    ' of the year ' + cal.year(someDay) +
    ', day dedicated to the "' + cal.dayOfYearName(someDay) + '"');
    // Today we are 7 septidi of germinal of the year 225
    // day dedicated to the "bouleau"
```
