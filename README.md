# Random Name Generator

This project is a simple web application that generates a random name from a predefined list each time a button is clicked. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
- [License](#license)

## Installation

No special installation is required for this project. Simply download or clone the repository and open the `index.html` file in your web browser.

```bash
git clone https://github.com/yourusername/random-name-generator.git
cd random-name-generator
# Usage
Open index.html in your web browser.

Click the "message generator" button to display a random name from the predefined list.
# Code Explanation
## HTML
The HTML file sets up the structure of the webpage, including a button to generate the random name and a div to display the generated name.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Name Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button class="btn">message generator</button>
    <div class="showNumber"></div>
    <script src="script.js"></script>
</body>
</html>

## JavaScript
The JavaScript file contains the logic for generating a random name from a predefined list and updating the HTML content.

const btn = document.querySelector('.btn');
const showNumber = document.querySelector('.showNumber');

const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivy", "Jack"];

const getRandomName = () => names[Math.floor(Math.random() * names.length)];
console.log(getRandomName());

btn.addEventListener('click', () => {
    const randomName = getRandomName();
    console.log(randomName);
    showNumber.innerHTML = randomName;
});

## CSS
The CSS file contains styles for the webpage. Here is a simple example:

body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
}

.btn {
    padding: 10px 20px;
    font-size: 16px;
}

.showNumber {
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
}

