// script1.js
document.getElementById("output").textContent = "Hello, world! I am Bipesh Budhathoki";



// Function available for Exercise 3 and 4
function showDistance(speed, time) {
    return speed * time;
}

// For Exercise 4: Button click handler
if (document.getElementById("calculateBtn")) {
    document.getElementById("calculateBtn").addEventListener("click", function () {
        const speed = parseFloat(document.getElementById("speedInput").value);
        const time = parseFloat(document.getElementById("timeInput").value);

        if (!isNaN(speed) && !isNaN(time)) {
            const result = showDistance(speed, time);
            document.getElementById("distanceOutput").textContent = `Distance: ${result} km`;
        } else {
            document.getElementById("distanceOutput").textContent = "Please enter valid numbers.";
        }
    });
}
