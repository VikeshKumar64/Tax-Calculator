# Tax Calculator Web Application

Estimate your taxable income and tax owed with this Tax Calculator Web Application! Input your financial details and let the application do the rest.

## Live Application Demo

Check out the live application [here](https://visionary-malabi-ec6cdc.netlify.app/).

## Pre-Requisites

Before getting started, make sure you have a modern Web browser like Google Chrome or Microsoft Edge installed on your PC.

## Getting Started

### Clone the Repository:

```
git clone https://github.com/VikeshKumar64/Tax-Calculator.git
```

### Open the Project:

Navigate to the project directory and open the `index.html` file in your preferred web browser.

## Features

- **Input Fields:** Easily input your gross annual income, extra income, age group, and applicable deductions.
  
- **Error Handling:** Real-time validation for user input ensures accurate calculations.
  
- **Tax Calculation:** Instantly calculate taxable income and tax owed based on the provided inputs.
  
- **Interactive Tooltips:** Helpful explanations and guidance available by hovering over question mark icons for each input field.

- **Responsive Design:** Optimized for desktop devices.

## Formula Used

The tax calculation works based on the following formula:

"Overall Income = Gross Income + Extra Income - Deductions"

If the overall income (after deductions) is under 8 Lakhs, no tax is applied.

For income over 8 Lakhs:
- 30% tax for individuals under 40 years old
- 40% tax for individuals aged 40 to 59
- 10% tax for individuals aged 60 and above

## How It Works

1. **Input Details:** Enter your gross annual income, extra income, select your age group, and input any applicable deductions.

2. **Validation:** Real-time validation ensures accuracy and completeness of your input.

3. **Calculation:** Based on the provided information and the tax calculation formula, the application determines your taxable income and tax owed.

4. **Results:** View the calculated results on the screen, including taxable income and the amount of tax owed.

5. **Clear and Restart:** Click the "Close" button to clear the results and start over, allowing for multiple calculations as needed.

## Technologies Used

- HTML5
- CSS3
- JavaScript


## Demonstration Screenshots

### Test Cases

1. **Valid Input:**

      <i> Description: Enter valid values for gross annual income, extra income, age group, and deductions.</i>

      <i>Screenshot:</i> [![image.png](https://i.postimg.cc/1X7VTwWq/image.png)](https://postimg.cc/FkcKkdXr)

2. **Invalid Input - Character Error Tooltip:**

      <i>Description: Attempt to input characters instead of numbers in the number fields and verify the display of the error tooltip.</i>

      <i>Screenshot:</i> [![image.png](https://i.postimg.cc/wjL35CdJ/image.png)](https://postimg.cc/xXj0nF8T)

3. **Valid Input - Age < 40:**

      <i>Description: Enter values for gross annual income, extra income, and deductions, with an age less than 40.</i>
      
      <i>Screenshot:</i> [![image.png](https://i.postimg.cc/PJSVRVsQ/image.png)](https://postimg.cc/YLmx43Sv)

4. **Valid Input - Age ≥ 40 & < 60:**
      <i>Description: Enter values for gross annual income, extra income, and deductions, with an age between 40 and 60.</i>
      
      <i>Screenshot:</i> [![image.png](https://i.postimg.cc/nrXqn39k/image.png)](https://postimg.cc/hQqXrbrz)

5. **Valid Input - Age ≥ 60:**

      <i>Description: Enter values for gross annual income, extra income, and deductions, with an age greater than or equal to 60.</i>

      <i>Screenshot:</i> [![image.png](https://i.postimg.cc/Y9Wb32bk/image.png)](https://postimg.cc/1nyGRQkY)

6. **Edge Case - No Tax:**

      <i>Description: Enter values for gross annual income, extra income, and deductions, resulting in a taxable income of 0 (≤ 8 Lakhs).</i>

      <i>Screenshot:</i> [![image.png](https://i.postimg.cc/13Mmms09/image.png)](https://postimg.cc/DSJk5VYD)

7. **How It Works (Feature)**

      <i>Description: Information about the Calculator When Hover Over the Tax Calculator Heading</i>

      <i>Screenshot:</i> [![image.png](https://i.postimg.cc/jqvZ41hD/image.png)](https://postimg.cc/HjcwpBRm)

8. **Tooltip-Information:**

      <i>Description: Description: Hovering on ? icon will display the information of that input box</i>

      <i>Screenshot:</i> [![image.png](https://i.postimg.cc/qv2Kjhd1/image.png)](https://postimg.cc/NKfL00FX)

9. **Final Output**

      <i>Screenshot:</i> [![image.png](https://i.postimg.cc/wMTKbsPL/image.png)](https://postimg.cc/Q9PnFVjd)
      
