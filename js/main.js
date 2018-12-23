var slides = document.querySelectorAll('.slider__slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 8000);

function nextSlide() {
    slides[currentSlide].className = 'slider__slide slider__slide_hide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slider__slide';
}


var monthlySum = document.getElementById("monthlySum");

var monthCount = document.getElementById("monthRange");
var addMonth = document.getElementById("addMonth");
var reduceMonth = document.getElementById("reduceMonth");
var monthInput = document.getElementById("monthInput");

var totalSum = document.getElementById("moneyRange");
var addMoney = document.getElementById("addMoney");
var reduceMoney = document.getElementById("reduceMoney");
var moneyInput = document.getElementById("moneyInput");

reduceMonth.addEventListener('click', updateMonthInput.bind(this, -1));
addMonth.addEventListener('click', updateMonthInput.bind(this, 1));
monthCount.addEventListener('change', updateMonthInput.bind(this, 0));

reduceMoney.addEventListener('click', updateMoneyInput.bind(this, -100));
addMoney.addEventListener('click', updateMoneyInput.bind(this, 100));
moneyRange.addEventListener('change', updateMoneyInput.bind(this, 0));

function updateMonthInput(value) {
    monthCount.value = parseInt(monthCount.value) + parseInt(value);
    monthInput.value = `${monthCount.value} men.`;
    // this.monthlySum.innerText = `${parseInt(totalSum.value) / parseInt(monthCount.value)} €`
}

function updateMoneyInput(value) {
    totalSum.value = parseInt(totalSum.value) + parseInt(value);
    moneyInput.value = `${moneyRange.value} €`;
    // this.monthlySum.innerText = `${parseInt(totalSum.value) / parseInt(monthCount.value)} €`
}