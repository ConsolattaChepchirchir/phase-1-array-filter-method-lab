const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driversArray,about){
    return driversArray.filter(item=>{
        return item.toUpperCase()===about.toUpperCase();
    })
}
const fuzzyMatch=function(drivers,about){
   return drivers.filter(drivers=>{
       return drivers.toUpperCase().substring(0,about.length)===about.toUpperCase()
   })
}
const matchName=(drivers,about)=>{
    return drivers.filter(drivers=>{
        return drivers.name===about;
    })
}