document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    const historyList = document.getElementById("history-list");
    const clearHistoryBtn = document.querySelector(".clear-history");
    const themeSwitch = document.getElementById("themeSwitch");
    let memory = 0;

    function updateHistory(expression, result) {
        const entry = document.createElement("li");
        entry.textContent = `${expression} = ${result}`;
        historyList.appendChild(entry);
        localStorage.setItem("history", historyList.innerHTML);
    }

    function loadHistory() {
        historyList.innerHTML = localStorage.getItem("history") || "";
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let value = button.textContent;

            if (button.classList.contains("clear")) {
                display.value = "";
            } 
            else if (button.classList.contains("delete")) {
                display.value = display.value.slice(0, -1);
            } 
            else if (button.classList.contains("equals")) {
                try {
                    let result = eval(display.value);
                    updateHistory(display.value, result);
                    display.value = result;
                } catch {
                    display.value = "Error";
                }
            } 
            else if (button.classList.contains("sqrt")) {
                display.value = Math.sqrt(eval(display.value));
            } 
            else if (button.classList.contains("sin")) {
                display.value = Math.sin(eval(display.value));
            } 
            else if (button.classList.contains("cos")) {
                display.value = Math.cos(eval(display.value));
            } 
            else if (button.classList.contains("tan")) {
                display.value = Math.tan(eval(display.value));
            } 
            else {
                display.value += value;
            }
        });
    });

    // Fix: Clear history button functionality
    clearHistoryBtn.addEventListener("click", () => {
        historyList.innerHTML = "";  // Clear the history list in the UI
        localStorage.removeItem("history");  // Remove history from localStorage
    });

    themeSwitch.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
    });

    loadHistory();
});