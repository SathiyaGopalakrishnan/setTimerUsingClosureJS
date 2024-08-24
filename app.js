function createCounter() {
    let count = 0;

    // inner function
    return function() {
        count++;
        document.getElementById("count").innerHTML = count;
    }
}

const counter = createCounter();
document.getElementById("counterBtn").addEventListener("click", counter);
