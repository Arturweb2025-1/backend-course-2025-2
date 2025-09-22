'use strict';

// Constant for date
const date = '202202';

// Creating a base URL
const base = 'https://bank.gov.ua/';
const path = 'NBUStatService/v1/statdirectory/res';

// Creating a URL object
const url = new URL(path, base);

// Adding parameters via searchParams
url.searchParams.set('date', date);
url.searchParams.append('json', ''); //  ?date=202202&json

// Output the finished URL to the console
console.log(url.href);
