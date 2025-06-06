function enter() {
    const input = document.getElementById("numberInput").value;
    const num = parseFloat(input);

    if (!isNaN(num)) {
        const result = num * num;
        document.getElementById("resultOutput").textContent = `The square of ${num} is ${result}`;
    } else {
        document.getElementById("resultOutput").textContent = "Please enter a valid number.";
    }
}
