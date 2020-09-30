const TARGET_DATE = new Date("2021-04-01");

const seconds = document.getElementById('seconds')!;
const minutes = document.getElementById('minutes')!;
const hours = document.getElementById('hours')!;
const days = document.getElementById('days')!;
const months = document.getElementById('months')!;

setInterval(() => {
    const diff = new Date(TARGET_DATE.getTime() - (new Date()).getTime());

    seconds.innerHTML = String(diff.getSeconds());
    minutes.innerHTML = String(diff.getMinutes());
    hours.innerHTML = String(diff.getHours());
    days.innerHTML = String(diff.getDay());
    months.innerHTML = String(diff.getMonth());

}, 1000)