const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// --- STANDARD FOR LOOP
for (let i = 0; i < companies.length; i++) {
    //console.log (companies[i]);
}

// --- FOREACH
companies.forEach(function(company) { // 3 things that can be params for the function: iterator, index, the array
                                                        // e.g. we could do function (company, index, companies)
    //console.log (company);
    //console.log (company.name);
})

// --- FILTER
    
    let canDrink = [];
    for (let j = 0; j < ages.length; j++) {
        if (ages[j] >= 21) {
            canDrink.push (ages[j]);
        }
    }
    //console.log (canDrink); // displays array of all the people above 21 who are allowed to drink

    // Now let's do the same thing with filter
    const canDrink2 = ages.filter(function(age) {
        if (age >= 21) {
            return true;
        }
    })
    //console.log (canDrink2);

    // We can put this all in one line using ES6 Arrow functions
    const canDrink3 = ages.filter(age => age >= 21);
    //console.log (canDrink3);

    // Filter retail companies
    const retailCompanies = companies.filter(function(company) {
        if (company.category === 'Retail') {
            return true;
        }
    })

    //console.log (retailCompanies);

    // Using es6 arrow functions
    const retailComp2 = companies.filter ((company) => company.category === 'Retail');
    //console.log (retailComp2);

    // Get 80s companies
    const eightiesCompanies = companies.filter ((company) => (company.start >= 1980 && company.start < 1990));
    //console.log (eightiesCompanies);

    // Get companies that lasted 10 years or more
    const lastedTenYears = companies.filter ((company) => (company.end - company.start >= 10));
    //console.log (lastedTenYears);

// --- MAP
// Create array of company names
const companyNames = companies.map(function (company){
    return company.name;
})
//console.log (companyNames);

// Company start to end dates
const testMap = companies.map(function (company){
    return `${company.name} [${company.start} - ${company.end}]`;
});
//console.log (testMap);

const testMap2 = companies.map((company) => `${company.name} [${company.start} - ${company.end}]`);
//console.log (testMap2);

// Square root of ages
const agesSquare = ages.map (age => Math.sqrt(age));
//console.log (agesSquare);

// Age doubled
const agesTimesTwo = ages.map (age => age*2);
//console.log (agesTimesTwo);

// Do square root of ages and age double at the same time
const agesSquareDoubled = ages
    .map (age => Math.sqrt(age))
    .map (age=> age*2);
//console.log (agesSquareDoubled);

// --- SORT
// sort companies by start year
const sortedCompanies = companies.sort(function (company1, company2) {
    if (company1.start > company2.start) {
        return 1;
    } else {
        return -1;
    }
});

//console.log (sortedCompanies);

// shorter form of above
const sortedC = companies.sort ((c1, c2) => (c1.start > c2.start ? 1 : -1));
//console.log (sortedC);

// Sort ages
const sortAges = ages.sort((a, b) => a - b); 
const sortAgesD = ages.sort ((c, d) => d - c); 
//console.log (sortAges);
//console.log (sortAgesD);

// --- REDUCE
// Sum of all the ages
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}
//console.log (ageSum);

const ageSum2 = ages.reduce (function (total, age) {
    return total + age;
}, 0); // you have to add '0' as a parameter, it means total = 0 initially
//console.log (ageSum2);

const ageSum3 = ages.reduce ((total, age) => total + age, 0);
//console.log (ageSum3);

// Get total years for all companies
const totalYears = companies.reduce (function (total, company) {
    return total + (company.end - company.start);
}, 0);

//console.log (totalYears);

const totalYears2 = companies.reduce ((total, company) => total + (company.end - company.start), 0);
//console.log (totalYears2);

// --- COMBINE METHODS
const combined = ages
    .map (age => age * 2) // multiply all the ages by 2
    .filter (age => age >= 40) // filter any age greater than or equal to 40
    .sort ((a, b) => a - b) // sort in ascending order
    .reduce ((a, b) => a + b, 0); // add them all together

console.log (combined);