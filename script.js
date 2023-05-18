const foodArr = ["FRIED RICE 🍚", "BENTO 🍱", "ICE CREAM 🍨", "YUMMY 😋", "HUNGRY 🤤", "FOOD 🍴"];

function addToText() {
    let longText = document.querySelector('.endless-text');
    let random = Math.floor(Math.random() * 6); // 6 default texts; 0 to 5
    longText.textContent = longText.textContent + foodArr[random] + '\n';
}