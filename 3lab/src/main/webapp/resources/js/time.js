let days = document.getElementById('day');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let month = document.getElementById('month');
let year = document.getElementById('year');


function updateClock() {
    let now = new Date();
    days.innerHTML = ('0' + now.getDate().toString()).slice(-2);
    hours.innerHTML = ('0' + now.getHours().toString()).slice(-2);
    minutes.innerHTML = ('0' + now.getMinutes().toString()).slice(-2);
    seconds.innerHTML = ('0' + now.getSeconds().toString()).slice(-2);
    month.innerHTML = ('0' + (now.getMonth()+1).toString()).slice(-2);
    year.innerHTML = now.getFullYear().toString();

    setTimeout(updateClock, 11000);
}

updateClock();