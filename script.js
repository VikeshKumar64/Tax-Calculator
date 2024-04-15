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



annualIncomeInput.addEventListener("input",()=>{
    const value = annualIncomeInput.value;
    if(isNaN(value)&&value.trim() !== ""){
        symbol.style.display = "inline";
    }
    else{
        symbol.style.display = "none";
    }
});


extraIncomeInput.addEventListener("input",()=>{
    const value = extraIncomeInput.value;
    if(isNaN(value) && value.trim() !== ""){
        symbol1.style.display = "inline";
    }
    else{
        symbol1.style.display = "none";
    }
});


tDeductionsInput.addEventListener("input",()=>{
    const value = tDeductionsInput.value;
    if(isNaN(value) && value.trim() !== ""){
        symbol2.style.display = "inline";
    }
    else{
        symbol2.style.display = "none";
    }
})



// this code is for errorSymbol to (enter number only.)

symbol.addEventListener("mouseover", () => {
    document.getElementById("tooltip").style.display = "block";
});

// Clear message when not hovering over symbol1
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





submitButton.addEventListener("click",()=>{
    clearErrors();

    
    const annualIncomeValue = parseFloat(annualIncomeInput.value);
    const extraIncomeInputValue = parseFloat(extraIncomeInput.value);
    const tDeductionsInputValue = parseFloat(tDeductionsInput.value);
    const ageValue = ageInput.value;


    let isValid = true;

    if (isNaN(annualIncomeValue) ) {
        isValid = false;
    }

    if (ageValue === "") {
        showError(ageInput, "Age group is required");
        isValid = false;
    }


    if (isValid) {
    let tax = 0;


    let totalIncome = annualIncomeValue + extraIncomeInputValue - tDeductionsInputValue;

    if(totalIncome > 800000){
        if(ageValue === "<40"){
            tax = 0.3*(totalIncome - 800000);
        }

        else if(ageValue === "≥ 40 & < 60"){
            tax = 0.4*(totalIncome - 800000);
        }
        else if(ageValue === "≥ 60"){
            tax = 0.1*(totalIncome - 800000);
        }
    }

    const answerBox = document.getElementById("answerBox");
    const textArea = document.querySelector(".textAnswer");
    const taxis = document.querySelector(".taxis");

    textArea.textContent = totalIncome - tax;
    answerBox.style.display = "flex";
    taxis.textContent = `Your tax is ( ${tax} )`;


    console.log("Tax: ", tax);

    }
});

// This is the function to clear error messages
function clearErrors() {
    const errorIcons = document.querySelectorAll(".error-icon");
    errorIcons.forEach(icon => icon.style.display = "none");
}

closeButton.addEventListener("click", ()=>{
    answerBox.style.display="none";
});