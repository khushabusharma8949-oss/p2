// Appointment Form

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const department = document.getElementById("department").value;
    const date = document.getElementById("date").value;

    const message = document.getElementById("message");


    // Validation

    if (name === "" ||
        email === "" ||
        phone === "" ||
        department === "" ||
        date === "") {

        message.innerHTML = "Please fill all the fields.";
        message.style.color = "red";

        return;
    }


    // Phone validation

    if (phone.length !== 10 || isNaN(phone)) {

        message.innerHTML =
            "Please enter a valid 10-digit phone number.";

        message.style.color = "red";

        return;
    }


    // Success message

    message.innerHTML =
        "✓ Appointment booked successfully for " +
        name + "!";

    message.style.color = "green";


    // Clear form

    form.reset();

});