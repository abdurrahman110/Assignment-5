function enableButton() {
  const name = nameField.value.trim();
  const phone = phoneField.value.trim();

  if (selectedSeats.length > 0 && name !== "" && phone !== "") {
    submitBtn.classList.remove("disabled");
    submitBtn.classList.add("enabled");
  } else {
    submitBtn.classList.add("disabled");
    submitBtn.classList.remove("enabled");
  }
}

function displaySelectedSeats() {
  selectedSeats = document.querySelectorAll(".selected");
  const detailsWrapper = document.createElement("div");

  Array.from(selectedSeats).forEach((seat) => {
    const seatDetails = document.createElement("div");
    seatDetails.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "opacity-60"
    );
    seatDetails.innerHTML = `
        <h3>${seat.innerText}</h3>
        <h3>Economy</h3>
        <h3>550</h3>
      `;

    detailsWrapper.appendChild(seatDetails);
  });

  seatWrapper.innerHTML = "";
  seatWrapper.appendChild(detailsWrapper);
}
