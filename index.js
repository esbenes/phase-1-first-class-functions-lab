const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers){
return drivers.slice(-2); 
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(number){
    return function(fee){
        return number*fee;
    }
}
const fareDoubler = function(fee){
    return fee*2;
}
const fareTripler = function(fee){
   return fee*3;
}
function selectDifferentDrivers (drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}