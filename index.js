// Code your solution in this file!

// The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2)
}

// The assigned function should accept an array of drivers as an argument and return the last two drivers in the array.
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

// This is an array containing two elements: the two functions that we previously defined.
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly.
const createFareMultiplier = function (multiplyValue) {
    return function (value) {
        return multiplyValue * value
    }
}

// Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
const fareDoubler = createFareMultiplier(2)

// Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
const fareTripler = createFareMultiplier(3)

// Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers)
}