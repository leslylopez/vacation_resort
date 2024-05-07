"use strict"
console.log("its working!")
window.onload = function () {

  let overnightStayForm = document.querySelector("#overnightStayForm");


  overnightStayForm.addEventListener("submit", getRoomRate)
}


function getRoomRate(event) {

  event.preventDefault();

  let theForm = event.target

  // create form for prices of rooms
  let date = new Date(theForm.checkInDate.value);
  let month = date.getMonth() + 1;

  let originalRoomRate = 0;
 
  if (month <6 || month > 8 ) {

    if (theForm.roomType.value === "queen") {

      originalRoomRate = 150;
    }

    if (theForm.roomType.value === "king") {

      originalRoomRate = 150;
    }

    if (theForm.roomType.value === "twoBedroom") {

      originalRoomRate = 150;
    }

  }

  let summerRoomRate = 0;

  if (month >= 6 && month <= 8) {


    if (theForm.roomType.value === "queen") {

      summerRoomRate = 250;
    }

    if (theForm.roomType.value === "king") {

      summerRoomRate = 250;

    }

    if (theForm.roomType.value === "twoBedroom") {

      summerRoomRate = 350;
    }


  }

let discount = 0;

if (theForm.discountType.value === "senior" ) {

  discount = .10;

}

if (theForm.discountType.value === "military" ) {

discount = .20;

}


// let SummerRoomCost = (numOfDays.value * summerRoomRate) * discount;

// console.log  (SummerRoomCost)
let originalRoomCost = (summerRoomRate + originalRoomRate) * numOfDays.value
 let discountAmount =  ((summerRoomRate + originalRoomRate )*numOfDays.value) * discount;
 let roomCost = ((summerRoomRate + originalRoomRate)*numOfDays.value) - discountAmount
 let taxDue = roomCost * (12/100)
 let totalCost = roomCost + taxDue

 console.log (totalCost)



let message = `
<div> Original Room Cost: $${originalRoomCost} </div>
<div> Discount: $${discountAmount} </div>
<div> Discounted Room Cost: $${roomCost} </div>
<div> Tax: $${taxDue.toFixed(2)} </div>
<div> Total Cost $${totalCost} </div>
`
document.querySelector("#results").innerHTML = message;

}