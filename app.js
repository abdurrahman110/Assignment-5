const seats = document.querySelectorAll(".seat");
let selectedSeats = [];
let availableSeats = 40;
const nameField = document.getElementById("name");
const phoneField = document.getElementById("phone");
const emailField = document.getElementById("email");
const submitBtn = document.getElementById("submit_btn");
const seats_left = document.getElementById("seats_left");
const seatWrapper = document.getElementById("details_wrapper");
const totalPrice = document.getElementById("total_price");
const grandTotal = document.getElementById("grand_total");
const couponField = document.getElementById("coupon_field");
const couponBtn = document.getElementById("coupon_btn");
const mainElement = document.getElementById("main");
const modalElement = document.getElementById("modal");
const modalBtn = document.getElementById("modal_btn");

seats.forEach((seat) => {
  seat.addEventListener("click", function () {
    if (!seat.classList.contains("booked")) {
      const isSelected = seat.classList.contains("selected");

      selectedSeats = document.querySelectorAll(".selected");
      if (selectedSeats.length === 4 && isSelected) {
        console.log("object");
        seat.classList.toggle("selected");
      }

      if (selectedSeats.length <= 3) {
        // Toggle the "selected" class of the clicked seat
        seat.classList.toggle("selected");

        displaySelectedSeats();

        if (selectedSeats.length === 4) {
          couponBtn.classList.remove("disabled");
          couponBtn.classList.add("enabled");
        } else {
          couponBtn.classList.add("disabled");
          couponBtn.classList.remove("enabled");
        }

        document.getElementById("seat_count").innerHTML = selectedSeats.length;
        totalPrice.innerText = selectedSeats.length * 550;
        grandTotal.innerText = selectedSeats.length * 550;
        enableButton();

        let seatsLeft = availableSeats - selectedSeats.length;
        seats_left.innerHTML = seatsLeft;
      } else {
        displaySelectedSeats();
        alert("You can only select up to 4 seats.");
        enableButton();
      }
    }
  });
});

[nameField, phoneField].forEach((input) => {
  input.addEventListener("input", function () {
    enableButton();
  });
});

submitBtn.addEventListener("click", function () {
  selectedSeats = document.querySelectorAll(".selected");
  selectedSeats.forEach((seat) => {
    seat.classList.remove("selected");
    seat.classList.add("booked");
  });
  selectedSeats = [];
  mainElement.classList.add("hide");
  mainElement.classList.remove("show");
  modalElement.classList.remove("hide");
  modalElement.classList.add("flex");
  seatWrapper.innerHTML = "";
});

couponBtn.addEventListener("click", function () {
  const couponCode = couponField.value;
  if (couponCode === "NEW15") {
    grandTotal.innerText = selectedSeats.length * 550 * 0.85;
  } else if (couponCode === "Couple 20") {
    grandTotal.innerText = selectedSeats.length * 550 * 0.8;
  } else {
    grandTotal.innerText = selectedSeats.length * 550;
    alert("Invalid Coupon Code");
  }
});

modalBtn.addEventListener("click", function () {
  mainElement.classList.remove("hide");
  mainElement.classList.add("show");
  modalElement.classList.add("hide");
  modalElement.classList.remove("flex");
});
