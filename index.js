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
    drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
    return drivers.filter(drivers=>{
return drivers.name==="Bobby";
    })
}