function showDistance(speed, time) {
    return speed * time;
}

if (document.getElementById("distanceResult")) {
    const result = showDistance(60, 2);
    document.getElementById("distanceResult").textContent = `Distance: ${result} km`;
}
