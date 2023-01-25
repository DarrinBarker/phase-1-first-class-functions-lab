// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);
//returnFirstTwoDrivers();
const returnLastTwoDrivers = (drivers) => drivers.slice(-2)
//returnLastTwoDrivers();
const selectingDrivers = [];
selectingDrivers[0] = returnFirstTwoDrivers;
selectingDrivers[1] = returnLastTwoDrivers;

//const createFareMultiplier = 4 => createFareMultiplier
//createFareMultiplier()
function createFareMultiplier (mult){
    return function(fare){
        return fare * mult
    }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, callback) => callback(drivers)
   
