// Code your solution here


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

 function findMatching(collection, name) {
    const matchingDrivers = collection.filter(function (user){
        return name.toLowerCase() === user.toLowerCase();
    })
    return matchingDrivers
 };


console.log(findMatching(drivers, 'sammy'))

function fuzzyMatch(collection, name) {
    const matchingDrivers = collection.filter(function (user){
        return name.slice(0,2) === user.slice(0,2);
    })
    return matchingDrivers
}

console.log(fuzzyMatch(drivers, "Sa"))

function matchName(collection, driver) {
    const matchingDrivers = collection.filter(function (user){
        return driver === user.name; 
    })
    return matchingDrivers
}