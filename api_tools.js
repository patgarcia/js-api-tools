/*
           _____ _____   _______ ____   ____  _       _____ 
     /\   |  __ \_   _| |__   __/ __ \ / __ \| |     / ____|
    /  \  | |__) || |      | | | |  | | |  | | |    | (___  
   / /\ \ |  ___/ | |      | | | |  | | |  | | |     \___ \ 
  / ____ \| |    _| |_     | | | |__| | |__| | |____ ____) |
 /_/    \_\_|   |_____|    |_|  \____/ \____/|______|_____/ 
 
*/

/*=============
  QUERY PARAMS
 =============*/

// Create a query string of parameters.
const getQueryParamStr = queryParams => {
  if(!queryParams) return ''
  return Object.entries(queryParams).map(
          ([key, val]) => `${key}=${val}`
          ).join('&');
}

// query parameters and values object example
let queryParams = {
    symbols : ['aapl', 'goog', 'fb'],
    types : ['chart', 'quote'],
    range: '24h',
}

getQueryParamStr(queryParams); // 'symbols=aapl,goog,fb&types=chart,quote&range=24h'


/*========
  SLUGIFY
 ========*/

const slugify = str => str.toLowerCase().replace(/[^\x61-\x7A \s]/g, "").split(' ').join('-');

slugify("American Decorative Arts") // 'american-decorative-arts'

