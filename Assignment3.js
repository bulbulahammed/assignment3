
//========================= kilometerToMeter ==========================
//kilometere to meter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
// var randomKilometer = kilometerToMeter(10);
// console.log(randomKilometer);


//========================== budgetCalculator ============================
// Budget calculator
var watchPrice = 50;
var phonePrice = 100;
var laptopPrice = 500;

function budgetCalculator(watch, phone, laptop) {
    var watchTotal = watch * 50;
    var phoneTotal = phone * 100;
    var laptopTotal = laptop * 500;
    return watchTotal + phoneTotal + laptopTotal;
}
// var result = budgetCalculator(25, 54, 145);
// console.log(result);

//========================== HotelCost ============================
function hotelCost(day) {
    var rent = 0;
    if (day <= 10) {
        rent = day * 100;
    } else if (day <= 20) {
        var firstRent = 10 * 100;
        var remainingDay = day - 10;
        var secondRent = remainingDay * 80;
        rent = firstRent + secondRent;
    } else {
        var firstRent = 10 * 100;
        var secondRent = 10 * 800;
        var remainingDay = day - 20;
        var thirdRent = remainingDay * 50;
        var rent = firts + secondRent + thirdRent;
    }
    return rent;
}
// var totalRent = hotelCost(15);
// console.log(totalRent);

//========================== megaFriend ============================
function megaFriend(friends) {
    var friendsName = friends[0].length;
    var result = friends[0];
    for (var i = 1; i < friends.length; i++) {
        var bigName = friends[i].length;
        if (bigName > friendsName) {
            result = friends[i];
            friendsName = bigName;
        }
    }
    return result;
}
// console.log(megaFriend(["bulbul", "habib", "hasan", "habibullahh"]));
