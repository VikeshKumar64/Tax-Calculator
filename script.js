document.addEventListener("DOMContentLoaded", checkEmptyFields);


const annualIncomeInput = document.querySelector("#annualIncome");
const extraIncomeInput = document.querySelector("#extraIncome");
const ageInput = document.querySelector("#age");
const tDeductionsInput = document.querySelector("#tDeductions");
const submitButton = document.querySelector("#submitButton");
const closeButton = document.querySelector("#closeButton");
const answerBox = document.getElementById("answerBox");

const symbol = document.querySelector("#symbol");
const symbol1 = document.querySelector("#symbol1");
const symbol2 = document.querySelector("#symbol2");

const taxCalculator = document.querySelector("#heading");
const description = document.querySelector("#description");

taxCalculator.addEventListener("mouseover", () => {
    description.style.display = "block";
});

taxCalculator.addEventListener("mouseout", () => {
    description.style.display = "none";
});

function validateInput(inputField, errorSymbol) {
    const value = inputField.value.trim();
    const isValid = /^\d*$/.test(value); 

    errorSymbol.style.display = isValid ? "none" : "inline";
    return isValid;
}


symbol.addEventListener("mouseover", () => {
    document.getElementById("tooltip").style.display = "block";
});

symbol.addEventListener("mouseout", () => {
    document.getElementById("tooltip").style.display = "none";
});

symbol1.addEventListener("mouseover", () => {
    document.getElementById("tooltip1").style.display = "block";
});

symbol1.addEventListener("mouseout", () => {
    document.getElementById("tooltip1").style.display = "none";
});

symbol2.addEventListener("mouseover", () => {
    document.getElementById("tooltip2").style.display = "block";
});

symbol2.addEventListener("mouseout", () => {
    document.getElementById("tooltip2").style.display = "none";
});

//Error symbol end;







// This is for Question mark pop up

const questionMark = document.getElementById("questionMark");
const tooltipQuestionMark = document.getElementById("tooltipQuestionMark");

const questionMark1 = document.getElementById("questionMark1");
const tooltipQuestionMark1 = document.getElementById("tooltipQuestionMark1");

const questionMark2 = document.getElementById("questionMark2");
const tooltipQuestionMark2 = document.getElementById("tooltipQuestionMark2");

const questionMark3 = document.getElementById("questionMark3");
const tooltipQuestionMark3 = document.getElementById("tooltipQuestionMark3");

questionMark.addEventListener("mouseover", () => {
    tooltipQuestionMark.style.display = "block";
});

questionMark.addEventListener("mouseout", () => {
    tooltipQuestionMark.style.display = "none";
});

questionMark1.addEventListener("mouseover", () => {
    tooltipQuestionMark1.style.display = "block";
});

questionMark1.addEventListener("mouseout", () => {
    tooltipQuestionMark1.style.display = "none";
});

questionMark2.addEventListener("mouseover", () => {
    tooltipQuestionMark2.style.display = "block";
});

questionMark2.addEventListener("mouseout", () => {
    tooltipQuestionMark2.style.display = "none";
});

questionMark3.addEventListener("mouseover", () => {
    tooltipQuestionMark3.style.display = "block";
});

questionMark3.addEventListener("mouseout", () => {
    tooltipQuestionMark3.style.display = "none";
});
//Question mark pop up end


// Event listeners for input fields
annualIncomeInput.addEventListener("input", () => {
    const isValid = validateInput(annualIncomeInput, symbol);
    submitButton.disabled = !isValid;
});

extraIncomeInput.addEventListener("input", () => {
    const isValid = validateInput(extraIncomeInput, symbol1);
    submitButton.disabled = !isValid;
});

tDeductionsInput.addEventListener("input", () => {
    const isValid = validateInput(tDeductionsInput, symbol2);
    submitButton.disabled = !isValid;
});

submitButton.addEventListener("click", () => {
    console.log("Submit button clicked");
    clearErrors();

    // Get input values
    const annualIncomeValue = parseFloat(annualIncomeInput.value);
    const extraIncomeInputValue = parseFloat(extraIncomeInput.value);
    const tDeductionsInputValue = parseFloat(tDeductionsInput.value);
    const ageValue = ageInput.value;

    if (annualIncomeValue === "" || extraIncomeInputValue === "" || tDeductionsInputValue === "" || ageValue === "") {
        alert("Please fill in all fields.");
        return; 
    }

    let isValid = true;

    const inputs = [annualIncomeInput, extraIncomeInput, tDeductionsInput];
    inputs.forEach(input => {
        const value = input.value.trim();
        if (!/^\d*$/.test(value)) {
            showError(input, "Please enter only numbers");
            isValid = false;
        }
    });

    if (isValid) {
        let tax = 0;

        let totalIncome = annualIncomeValue + extraIncomeInputValue - tDeductionsInputValue;

        if (totalIncome > 800000) {
            if (ageValue === "<40") {
                tax = 0.3 * (totalIncome - 800000);
            } else if (ageValue === "≥ 40 & < 60") {
                tax = 0.4 * (totalIncome - 800000);
            } else if (ageValue === "≥ 60") {
                tax = 0.1 * (totalIncome - 800000);
            }
        }

        const textArea = document.querySelector(".textAnswer");
        const taxis = document.querySelector(".taxis");

        textArea.textContent = totalIncome - tax;
        answerBox.style.display = "flex";
        taxis.textContent = `Your tax is ( ${tax} )`;

        console.log("Tax: ", tax);
        checkEmptyFields();
    }
});

function checkEmptyFields() {
    const inputs = [annualIncomeInput, extraIncomeInput, tDeductionsInput, ageInput];
    const allEmpty = inputs.every(input => input.value.trim() === "");
    const anyEmpty = inputs.some(input => input.value.trim() === "");
    
    if (allEmpty) {
        submitButton.disabled = true; 
    } else {
        submitButton.disabled = anyEmpty; 
    }
}


annualIncomeInput.addEventListener("input", checkEmptyFields);
extraIncomeInput.addEventListener("input", checkEmptyFields);
tDeductionsInput.addEventListener("input", checkEmptyFields);
ageInput.addEventListener("input", checkEmptyFields);


function clearErrors() {
    const errorIcons = document.querySelectorAll(".error-icon");
    errorIcons.forEach(icon => icon.style.display = "none");
}

function showError(inputField, errorMessage) {
    const errorIcon = inputField.parentElement.querySelector(".error-icon");
    errorIcon.style.display = "inline";
}

closeButton.addEventListener("click", () => {
    answerBox.style.display = "none";
});
