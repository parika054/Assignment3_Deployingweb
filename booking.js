/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var rate = 35;
var daySelected = 0;
var days = [document.getElementById('monday'), document.getElementById('tuesday'), document.getElementById('wednesday'), document.getElementById('thursday'), document.getElementById('friday')];
var clearButton = document.getElementById("clear-button");
var halfDays = document.getElementById("half");
var fullDays = document.getElementById("full");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function clickDay(day) {
    if (!day.classList.contains("clicked")) {
        day.classList.add("clicked");
        daySelected += 1;
        calculatePrice();
    }
}
days[0].addEventListener('click', function () { clickDay(days[0]); });
days[1].addEventListener('click', function () { clickDay(days[1]); });
days[2].addEventListener('click', function () { clickDay(days[2]); });
days[3].addEventListener('click', function () { clickDay(days[3]); });
days[4].addEventListener('click', function () { clickDay(days[4]); });




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function reset() {
    for (var i = 0; i < days.length; i++) {
        days[i].classList.remove("clicked");
        daySelected = 0;
        calculatePrice();
    }
}

clearButton.addEventListener('click', reset);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfdayPrice() {
    rate = 20;
    calculatePrice();
    halfDays.classList.add("clicked");
    fullDays.classList.remove("clicked");
}

halfDays.addEventListener('click', halfdayPrice);



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullDayPrice() {
    rate = 35;
    calculatePrice();
    halfDays.classList.remove("clicked");
    fullDays.classList.add("clicked");
}

fullDays.addEventListener('click', fullDayPrice);




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculatePrice() {
    let cost = document.getElementById("calculated-cost");
    cost.innerHTML = rate * daySelected;
}


